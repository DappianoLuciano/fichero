import { useState, useEffect, useMemo } from "react";
import ConfirmModal from "./ConfirmModal";

export default function PacientesLentesPage({ onVerPaciente }) {
  const [pacientes, setPacientes] = useState([]);
  const [busqueda,  setBusqueda]  = useState("");
  const [toast,     setToast]     = useState("");

  const [modalOpen,   setModalOpen]   = useState(false);
  const [confirmId,   setConfirmId]   = useState(null);
  const [nombre,      setNombre]      = useState("");
  const [error,       setError]       = useState("");
  const [guardando,   setGuardando]   = useState(false);

  const [editId,      setEditId]      = useState(null);
  const [editNombre,  setEditNombre]  = useState("");
  const [editError,   setEditError]   = useState("");
  const [guardandoEd, setGuardandoEd] = useState(false);

  useEffect(() => { cargar(); }, []);

  async function cargar() {
    const data = await window.api.listarPacientesLentes();
    setPacientes(data);
  }

  function mostrarToast(msg) {
    setToast(msg);
    setTimeout(() => setToast(""), 2800);
  }

  function abrirModal() {
    setNombre("");
    setError("");
    setModalOpen(true);
  }

  function cerrarModal() {
    setModalOpen(false);
  }

  async function handleCrear(e) {
    e.preventDefault();
    const n = nombre.trim();
    if (!n) { setError("El nombre es requerido"); return; }
    setError("");
    setGuardando(true);
    try {
      await window.api.crearPacienteLente({ nombre: n });
      cerrarModal();
      mostrarToast("Paciente creado correctamente");
      cargar();
    } catch (err) {
      setError(err.message || "Error al crear paciente");
    } finally {
      setGuardando(false);
    }
  }

  function abrirEditar(e, p) {
    e.stopPropagation();
    setEditId(p.id);
    setEditNombre(p.nombre);
    setEditError("");
  }

  async function handleEditar(e) {
    e.preventDefault();
    const n = editNombre.trim();
    if (!n) { setEditError("El nombre es requerido"); return; }
    setGuardandoEd(true);
    try {
      await window.api.actualizarPacienteLente({ id: editId, nombre: n });
      setEditId(null);
      mostrarToast("Nombre actualizado");
      cargar();
    } catch (err) {
      setEditError(err.message || "Error al actualizar");
    } finally {
      setGuardandoEd(false);
    }
  }

  async function handleEliminar(id) {
    await window.api.eliminarPacienteLente(id);
    setConfirmId(null);
    mostrarToast("Paciente eliminado");
    cargar();
  }

  const filtrados = useMemo(() => {
    const q = busqueda.toLowerCase().trim();
    if (!q) return pacientes;
    return pacientes.filter((p) => p.nombre.toLowerCase().includes(q));
  }, [pacientes, busqueda]);

  return (
    <div className="page">
      <div className="pageHeaderRow">
        <div>
          <h2 className="pageTitle">Contactología (LDC)</h2>
          <p className="pageHint">{pacientes.length} paciente{pacientes.length !== 1 ? "s" : ""} registrado{pacientes.length !== 1 ? "s" : ""}</p>
        </div>
        <button className="btnPrimary" style={{ width: "auto" }} onClick={abrirModal}>
          + Nuevo paciente
        </button>
      </div>

      <div className="card">
        <input
          className="searchInput"
          placeholder="Buscar por nombre..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />

        {filtrados.length === 0 ? (
          <p className="empty">
            {busqueda ? "Sin resultados para esa búsqueda" : "Todavía no hay pacientes cargados"}
          </p>
        ) : (
          <div className="pacienteList" style={{ marginTop: 12 }}>
            {filtrados.map((p) => (
              <div
                key={p.id}
                className="pacienteRow"
                onClick={() => onVerPaciente(p)}
                style={{ cursor: "pointer" }}
              >
                <div>
                  <div className="pacienteNombre">{p.nombre}</div>
                </div>
                <div style={{ display: "flex", gap: 6 }}>
                  <button className="btnSmall" onClick={() => onVerPaciente(p)}>
                    Ver recetas
                  </button>
                  <button className="btnSmall" onClick={(e) => abrirEditar(e, p)}>
                    ✎ Editar
                  </button>
                  <button
                    className="btnDangerSmall"
                    onClick={(e) => { e.stopPropagation(); setConfirmId(p.id); }}
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {modalOpen && (
        <div className="modalOverlay" onClick={cerrarModal}>
          <div className="modalCard" style={{ width: "min(440px, calc(100vw - 36px))" }} onClick={(e) => e.stopPropagation()}>
            <div className="modalHeader">
              <span className="modalTitle">Nuevo paciente</span>
              <button className="modalClose" onClick={cerrarModal}>✕</button>
            </div>
            <form className="form" onSubmit={handleCrear}>
              <div className="field">
                <span>Nombre completo</span>
                <input
                  value={nombre}
                  onChange={(e) => { setNombre(e.target.value); setError(""); }}
                  placeholder="Ej: María García"
                  className={error ? "inputError" : ""}
                  autoFocus
                />
                {error && <span className="fieldError">{error}</span>}
              </div>
              <div className="modalActions">
                <button type="button" className="btnGhost" onClick={cerrarModal}>Cancelar</button>
                <button type="submit" className="btnPrimary" style={{ width: "auto" }} disabled={guardando}>
                  {guardando ? "Guardando..." : "Crear paciente"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {editId && (
        <div className="modalOverlay" onClick={() => setEditId(null)}>
          <div className="modalCard" style={{ width: "min(440px, calc(100vw - 36px))" }} onClick={(e) => e.stopPropagation()}>
            <div className="modalHeader">
              <span className="modalTitle">Editar paciente</span>
              <button className="modalClose" onClick={() => setEditId(null)}>✕</button>
            </div>
            <form className="form" onSubmit={handleEditar}>
              <div className="field">
                <span>Nombre completo</span>
                <input
                  value={editNombre}
                  onChange={(e) => { setEditNombre(e.target.value); setEditError(""); }}
                  placeholder="Ej: María García"
                  className={editError ? "inputError" : ""}
                  autoFocus
                />
                {editError && <span className="fieldError">{editError}</span>}
              </div>
              <div className="modalActions">
                <button type="button" className="btnGhost" onClick={() => setEditId(null)}>Cancelar</button>
                <button type="submit" className="btnPrimary" style={{ width: "auto" }} disabled={guardandoEd}>
                  {guardandoEd ? "Guardando..." : "Guardar cambios"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {confirmId && (
        <ConfirmModal
          titulo="Eliminar paciente"
          mensaje="¿Eliminás este paciente y todas sus recetas? Esta acción no se puede deshacer."
          onConfirmar={() => handleEliminar(confirmId)}
          onCancelar={() => setConfirmId(null)}
        />
      )}

      {toast && <div className="toast">{toast}</div>}
    </div>
  );
}
