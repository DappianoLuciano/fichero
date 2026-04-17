const { registerPacientesHandlers }      = require("./pacientes");
const { registerRecetasHandlers }        = require("./recetas");
const { registerPacientesLentesHandlers } = require("./pacientesLentes");
const { registerRecetasLentesHandlers }  = require("./recetasLentes");

function registerIpcHandlers() {
  registerPacientesHandlers();
  registerRecetasHandlers();
  registerPacientesLentesHandlers();
  registerRecetasLentesHandlers();
}

module.exports = { registerIpcHandlers };
