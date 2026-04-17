const { autoUpdater } = require("electron-updater");
const { ipcMain }     = require("electron");

let mainWindow = null;

function send(event, data) {
  if (mainWindow && !mainWindow.isDestroyed()) {
    mainWindow.webContents.send("updater:status", { event, ...data });
  }
}

function setupUpdater(win) {
  mainWindow = win;

  autoUpdater.logger = {
    info:  (msg) => console.log("[updater]", msg),
    warn:  (msg) => console.warn("[updater]", msg),
    error: (msg) => console.error("[updater]", msg),
    debug: () => {},
  };

  autoUpdater.autoDownload = false;
  autoUpdater.autoInstallOnAppQuit = false;

  autoUpdater.on("checking-for-update", () => send("checking"));

  autoUpdater.on("update-available", (info) => {
    send("available", { version: info.version, releaseNotes: info.releaseNotes ?? null });
  });

  autoUpdater.on("update-not-available", () => send("not-available"));

  autoUpdater.on("download-progress", (progress) => {
    send("progress", { percent: Math.round(progress.percent) });
  });

  autoUpdater.on("update-downloaded", (info) => {
    send("downloaded", { version: info.version });
  });

  autoUpdater.on("error", (err) => {
    send("error", { message: err?.message ?? String(err) });
  });

  ipcMain.handle("updater:check", async () => {
    if (!autoUpdater.isUpdaterActive()) return { active: false };
    try {
      await autoUpdater.checkForUpdates();
      return { active: true };
    } catch (e) {
      return { active: true, error: e?.message };
    }
  });

  ipcMain.handle("updater:download", async () => {
    autoUpdater.downloadUpdate();
    return { ok: true };
  });

  ipcMain.handle("updater:install", async () => {
    autoUpdater.quitAndInstall(false, true);
    return { ok: true };
  });

  ipcMain.handle("updater:version", async () => {
    const { app } = require("electron");
    return { version: app.getVersion() };
  });

  const { app } = require("electron");
  if (app.isPackaged) {
    setTimeout(() => {
      autoUpdater.checkForUpdates().catch(() => {});
    }, 3000);
  }
}

module.exports = { setupUpdater };
