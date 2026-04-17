const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("api", {
  // =========================
  // PACIENTES
  // =========================
  listarPacientes:   ()           => ipcRenderer.invoke("pacientes:listar"),
  crearPaciente:     (p)          => ipcRenderer.invoke("pacientes:crear", p),
  buscarPacientes:   (query)      => ipcRenderer.invoke("pacientes:buscar", query),
  actualizarPaciente:(p)          => ipcRenderer.invoke("pacientes:actualizar", p),
  eliminarPaciente:  (id)         => ipcRenderer.invoke("pacientes:eliminar", id),

  // =========================
  // RECETAS (grupos de fotos)
  // =========================
  listarRecetas:   (pacienteId)  => ipcRenderer.invoke("recetas:listar", pacienteId),
  crearReceta:     (p)           => ipcRenderer.invoke("recetas:crear", p),
  actualizarReceta:(p)           => ipcRenderer.invoke("recetas:actualizar", p),
  eliminarReceta:  (id)          => ipcRenderer.invoke("recetas:eliminar", id),

  // =========================
  // FOTOS INDIVIDUALES
  // =========================
  eliminarFoto:    (id)          => ipcRenderer.invoke("fotos:eliminarUna", id),

  // =========================
  // PACIENTES LENTES DE CONTACTO
  // =========================
  listarPacientesLentes:    ()      => ipcRenderer.invoke("pacientesLentes:listar"),
  crearPacienteLente:       (p)     => ipcRenderer.invoke("pacientesLentes:crear", p),
  buscarPacientesLentes:    (query) => ipcRenderer.invoke("pacientesLentes:buscar", query),
  actualizarPacienteLente:  (p)     => ipcRenderer.invoke("pacientesLentes:actualizar", p),
  eliminarPacienteLente:    (id)    => ipcRenderer.invoke("pacientesLentes:eliminar", id),

  // =========================
  // RECETAS LENTES
  // =========================
  listarRecetasLentes:    (pacienteLenteId) => ipcRenderer.invoke("recetasLentes:listar", pacienteLenteId),
  crearRecetaLente:       (p)               => ipcRenderer.invoke("recetasLentes:crear", p),
  actualizarRecetaLente:  (p)               => ipcRenderer.invoke("recetasLentes:actualizar", p),
  eliminarRecetaLente:    (id)              => ipcRenderer.invoke("recetasLentes:eliminar", id),

  // =========================
  // FOTOS LENTES INDIVIDUALES
  // =========================
  eliminarFotoLente: (id) => ipcRenderer.invoke("fotosLentes:eliminarUna", id),

  // =========================
  // UPDATER
  // =========================
  checkForUpdates:  ()   => ipcRenderer.invoke("updater:check"),
  downloadUpdate:   ()   => ipcRenderer.invoke("updater:download"),
  installUpdate:    ()   => ipcRenderer.invoke("updater:install"),
  getAppVersion:    ()   => ipcRenderer.invoke("updater:version"),
  onUpdaterStatus:  (cb) => {
    const handler = (_e, data) => cb(data);
    ipcRenderer.on("updater:status", handler);
  },
  offUpdaterStatus: () => ipcRenderer.removeAllListeners("updater:status"),
});
