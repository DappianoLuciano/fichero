const { ipcMain } = require("electron");
const { prisma }  = require("../db");

function registerRecetasLentesHandlers() {
  ipcMain.handle("recetasLentes:listar", async (_, pacienteLenteId) => {
    return prisma.recetaLente.findMany({
      where: { pacienteLenteId },
      include: { fotos: true },
      orderBy: { fecha: "desc" },
    });
  });

  ipcMain.handle("recetasLentes:crear", async (_, { pacienteLenteId, fechaOrden, fotos }) => {
    return prisma.recetaLente.create({
      data: {
        pacienteLenteId,
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

  ipcMain.handle("recetasLentes:actualizar", async (_, { id, fechaOrden, fotos }) => {
    await prisma.recetaLente.update({
      where: { id },
      data: { fecha: new Date(fechaOrden + "T12:00:00") },
    });
    for (const f of fotos) {
      await prisma.fotoRecetaLente.update({
        where: { id: f.id },
        data: { observaciones: f.observaciones || "" },
      });
    }
    return prisma.recetaLente.findUnique({
      where: { id },
      include: { fotos: true },
    });
  });

  ipcMain.handle("recetasLentes:eliminar", async (_, id) => {
    return prisma.recetaLente.delete({ where: { id } });
  });

  ipcMain.handle("fotosLentes:eliminarUna", async (_, id) => {
    return prisma.fotoRecetaLente.delete({ where: { id } });
  });
}

module.exports = { registerRecetasLentesHandlers };
