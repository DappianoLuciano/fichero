const { ipcMain } = require("electron");
const { prisma }  = require("../db");

function registerPacientesLentesHandlers() {
  ipcMain.handle("pacientesLentes:listar", async () => {
    return prisma.pacienteLente.findMany({
      orderBy: { nombre: "asc" },
    });
  });

  ipcMain.handle("pacientesLentes:buscar", async (_, query) => {
    return prisma.pacienteLente.findMany({
      where: {
        nombre: { contains: query },
      },
      orderBy: { nombre: "asc" },
    });
  });

  ipcMain.handle("pacientesLentes:crear", async (_, { nombre }) => {
    const nombreTrimmed = (nombre || "").trim();
    if (!nombreTrimmed) throw new Error("El nombre es requerido");
    return prisma.pacienteLente.create({
      data: { nombre: nombreTrimmed },
    });
  });

  ipcMain.handle("pacientesLentes:actualizar", async (_, { id, nombre }) => {
    const nombreTrimmed = (nombre || "").trim();
    if (!nombreTrimmed) throw new Error("El nombre es requerido");
    return prisma.pacienteLente.update({
      where: { id },
      data: { nombre: nombreTrimmed },
    });
  });

  ipcMain.handle("pacientesLentes:eliminar", async (_, id) => {
    return prisma.pacienteLente.delete({ where: { id } });
  });
}

module.exports = { registerPacientesLentesHandlers };
