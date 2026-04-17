const path = require("path");

const { registerIpcHandlers } = require("./ipc");
const { setupDatabase }       = require("./setup-db");
const { prisma }              = require("./db");
const { setupUpdater }        = require("./updater");

async function main() {
  // import() dinámico: resuelve correctamente el módulo built-in de Electron
  // (a diferencia de require("electron") que puede resolver a node_modules/electron)
  const { app, BrowserWindow, session } = await import("electron");

  registerIpcHandlers();

  await app.whenReady();

  await setupDatabase(prisma);

  // Permitir acceso a la cámara desde el renderer
  session.defaultSession.setPermissionRequestHandler((webContents, permission, callback) => {
    callback(permission === "media");
  });
  session.defaultSession.setPermissionCheckHandler((webContents, permission) => {
    return permission === "media";
  });

  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      contextIsolation: true,
      nodeIntegration: false,
    },
  });

  if (app.isPackaged) {
    win.loadFile(path.join(__dirname, "../renderer/dist/index.html"));
  } else {
    win.loadURL("http://localhost:5173");
  }

  setupUpdater(win);

  app.on("window-all-closed", () => {
    if (process.platform !== "darwin") app.quit();
  });
}

main().catch(console.error);
