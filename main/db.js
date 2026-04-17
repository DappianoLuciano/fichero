const fs   = require("fs");
const path = require("path");
const { PrismaClient } = require("./prisma-client");

let _prisma = null;

// Se llama la primera vez que se usa prisma (dentro de app.whenReady, donde el app ya está listo)
async function getPrisma() {
  if (_prisma) return _prisma;
  const { app } = await import("electron");
  let dbPath;
  if (app.isPackaged) {
    const dir = app.getPath("userData");
    fs.mkdirSync(dir, { recursive: true });
    dbPath = path.join(dir, "recetario.db");
  } else {
    dbPath = path.join(__dirname, "..", "recetario.db");
  }
  const url = "file:" + dbPath.replace(/\\/g, "/");
  _prisma = new PrismaClient({ datasources: { db: { url } } });
  return _prisma;
}

// Proxy async: soporta prisma.$metodo(...) y prisma.modelo.metodo(...)
const prisma = new Proxy({}, {
  get(_, prop) {
    if (typeof prop === "string" && prop.startsWith("$")) {
      return (...args) => getPrisma().then((p) => p[prop](...args));
    }
    return new Proxy({}, {
      get(_, method) {
        return (...args) => getPrisma().then((p) => p[prop][method](...args));
      },
    });
  },
});

module.exports = { prisma, getPrisma };
