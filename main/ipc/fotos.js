const { ipcMain } = require("electron");
const { prisma }  = require("../db");

function registerFotosHandlers() {
  ipcMain.handle("fotos:listar", async (_, pacienteId) => {
    return prisma.fotoReceta.findMany({
      where: { pacienteId },
      orderBy: { fecha: "desc" },
    });
  });

  ipcMain.handle("fotos:crear", async (_, { pacienteId, foto, fechaOrden, observaciones }) => {
    return prisma.fotoReceta.create({
      data: {
        pacienteId,
        foto,
        fecha: fechaOrden ? new Date(fechaOrden + "T12:00:00") : new Date(),
        observaciones: observaciones || "",
      },
    });
  });

  ipcMain.handle("fotos:actualizar", async (_, { id, fechaOrden, observaciones }) => {
    return prisma.fotoReceta.update({
      where: { id },
      data: {
        fecha: new Date(fechaOrden + "T12:00:00"),
        observaciones: observaciones || "",
      },
    });
  });

  ipcMain.handle("fotos:eliminar", async (_, id) => {
    return prisma.fotoReceta.delete({ where: { id } });
  });
}

module.exports = { registerFotosHandlers };
