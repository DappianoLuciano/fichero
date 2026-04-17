const { ipcMain } = require("electron");
const { prisma }  = require("../db");

function registerRecetasHandlers() {
  ipcMain.handle("recetas:listar", async (_, pacienteId) => {
    return prisma.receta.findMany({
      where: { pacienteId },
      include: { fotos: true },
      orderBy: { fecha: "desc" },
    });
  });

  // data: { pacienteId, fechaOrden, fotos: [{foto, observaciones}] }
  ipcMain.handle("recetas:crear", async (_, { pacienteId, fechaOrden, fotos }) => {
    return prisma.receta.create({
      data: {
        pacienteId,
        fecha: fechaOrden ? new Date(fechaOrden + "T12:00:00") : new Date(),
        fotos: {
          create: fotos.map((f) => ({
            foto: f.foto,
            observaciones: f.observaciones || "",
          })),
        },
      },
      include: { fotos: true },
    });
  });

  // data: { id, fechaOrden, fotos: [{id, observaciones}] }
  ipcMain.handle("recetas:actualizar", async (_, { id, fechaOrden, fotos }) => {
    await prisma.receta.update({
      where: { id },
      data: { fecha: new Date(fechaOrden + "T12:00:00") },
    });
    for (const f of fotos) {
      await prisma.fotoReceta.update({
        where: { id: f.id },
        data: { observaciones: f.observaciones || "" },
      });
    }
    return prisma.receta.findUnique({
      where: { id },
      include: { fotos: true },
    });
  });

  ipcMain.handle("recetas:eliminar", async (_, id) => {
    return prisma.receta.delete({ where: { id } });
  });

  ipcMain.handle("fotos:eliminarUna", async (_, id) => {
    return prisma.fotoReceta.delete({ where: { id } });
  });
}

module.exports = { registerRecetasHandlers };
