const { ipcMain } = require("electron");
const { prisma }  = require("../db");

function registerPacientesHandlers() {
  ipcMain.handle("pacientes:listar", async () => {
    return prisma.paciente.findMany({
      orderBy: { nombre: "asc" },
    });
  });

  ipcMain.handle("pacientes:buscar", async (_, query) => {
    return prisma.paciente.findMany({
      where: {
        nombre: { contains: query },
      },
      orderBy: { nombre: "asc" },
    });
  });

  ipcMain.handle("pacientes:crear", async (_, { nombre }) => {
    const nombreTrimmed = (nombre || "").trim();
    if (!nombreTrimmed) throw new Error("El nombre es requerido");
    return prisma.paciente.create({
      data: { nombre: nombreTrimmed },
    });
  });

  ipcMain.handle("pacientes:actualizar", async (_, { id, nombre }) => {
    const nombreTrimmed = (nombre || "").trim();
    if (!nombreTrimmed) throw new Error("El nombre es requerido");
    return prisma.paciente.update({
      where: { id },
      data: { nombre: nombreTrimmed },
    });
  });

  ipcMain.handle("pacientes:eliminar", async (_, id) => {
    return prisma.paciente.delete({ where: { id } });
  });
}

module.exports = { registerPacientesHandlers };
