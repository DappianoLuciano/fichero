import { useState, useEffect, useRef } from "react";
import ConfirmModal from "./ConfirmModal";

export default function VerPacienteLentesPage({ paciente, onVolver, onPacienteActualizado }) {
  const [recetas, setRecetas] = useState([]);

  const [editandoNombre,   setEditandoNombre]   = useState(false);
  const [nuevoNombre,      setNuevoNombre]      = useState("");
  const [guardandoNombre,  setGuardandoNombre]  = useState(false);

  const [modalOpen,       setModalOpen]       = useState(false);
  const [modalStep,       setModalStep]       = useState("camera");
  const [fotosCapturadas, setFotosCapturadas] = useState([]);
  const [currentFoto,     setCurrentFoto]     = useState(null);
  const [currentObs,      setCurrentObs]      = useState("");
  const [fechaOrden,      setFechaOrden]      = useState("");
  const [guardando,       setGuardando]       = useState(false);
  const [errorCam,        setErrorCam]        = useState("");
  const [stream,          setStream]          = useState(null);
  const videoRef = useRef(null);

  const [lightboxReceta,  setLightboxReceta]  = useState(null);
  const [lightboxIdx,     setLightboxIdx]     = useState(0);
  const [zoom,            setZoom]            = useState(1);
  const [pan,             setPan]             = useState({ x: 0, y: 0 });
  const [dragging,        setDragging]        = useState(false);
  const dragStart = useRef(null);

  const [editandoReceta,  setEditandoReceta]  = useState(null);
  const [editFecha,       setEditFecha]       = useState("");
  const [editFotos,       setEditFotos]       = useState([]);
  const [guardandoEdit,   setGuardandoEdit]   = useState(false);

  const [confirmReceta,   setConfirmReceta]   = useState(null);
  const [toast,           setToast]           = useState("");

  const streamRef      = useRef(null);
  const modalOpenRef   = useRef(false);
  const modalStepRef   = useRef("camera");
  const lightboxRef    = useRef(null);
  const lightboxIdxRef = useRef(0);

  useEffect(() => { streamRef.current = stream; }, [stream]);
  useEffect(() => { modalOpenRef.current = modalOpen; }, [modalOpen]);
  useEffect(() => { modalStepRef.current = modalStep; }, [modalStep]);
  useEffect(() => { lightboxRef.current = lightboxReceta; }, [lightboxReceta]);
  useEffect(() => { lightboxIdxRef.current = lightboxIdx; }, [lightboxIdx]);

  useEffect(() => { if (paciente) cargarRecetas(); }, [paciente]);
  useEffect(() => () => detenerStreamDirecto(), []);

  useEffect(() => {
    function onKey(e) {
      if (modalOpenRef.current && modalStepRef.current === "camera" && streamRef.current) {
        if (e.code === "Enter" || e.code === "Space") { e.preventDefault(); capturarFotoTeclado(); }
      }
      if (lightboxRef.current) {
        if (e.code === "ArrowLeft")  { e.preventDefault(); moverLightboxDelta(-1); }
        if (e.code === "ArrowRight") { e.preventDefault(); moverLightboxDelta(1); }
        if (e.code === "Escape")     { setLightboxReceta(null); setZoom(1); setPan({ x: 0, y: 0 }); }
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  async function cargarRecetas() {
    const data = await window.api.listarRecetasLentes(paciente.id);
    setRecetas(data);
  }

  function mostrarToast(msg) {
    setToast(msg);
    setTimeout(() => setToast(""), 2800);
  }

  function hoyISO() {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}`;
  }

  function formatFecha(iso) {
    return new Date(iso).toLocaleDateString("es-AR", {
      day: "2-digit", month: "2-digit", year: "numeric",
      timeZone: "America/Argentina/Buenos_Aires",
    });
  }

  function abrirEditNombre() {
    setNuevoNombre(paciente.nombre);
    setEditandoNombre(true);
  }

  async function guardarNombre() {
    const n = nuevoNombre.trim();
    if (!n || n === paciente.nombre) { setEditandoNombre(false); return; }
    setGuardandoNombre(true);
    try {
      const updated = await window.api.actualizarPacienteLente({ id: paciente.id, nombre: n });
      onPacienteActualizado && onPacienteActualizado(updated);
      mostrarToast("Nombre actualizado");
      setEditandoNombre(false);
    } catch {
      mostrarToast("Error al actualizar nombre");
    } finally {
      setGuardandoNombre(false);
    }
  }

  function detenerStreamDirecto() {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((t) => t.stop());
      streamRef.current = null;
    }
    setStream(null);
  }

  async function iniciarCamara() {
    detenerStreamDirecto();
    setErrorCam("");
    try {
      const s = await navigator.mediaDevices.getUserMedia({
        video: { width: { ideal: 1920 }, height: { ideal: 1080 } },
        audio: false,
      });
      setStream(s);
      streamRef.current = s;
      if (videoRef.current) {
        videoRef.current.srcObject = s;
        videoRef.current.play();
      }
    } catch {
      setErrorCam("No se pudo acceder a la cámara. Verificá que esté conectada y con permiso.");
    }
  }

  async function abrirModal() {
    setFotosCapturadas([]);
    setCurrentFoto(null);
    setCurrentObs("");
    setFechaOrden(hoyISO());
    setErrorCam("");
    setModalStep("camera");
    setModalOpen(true);
    setTimeout(iniciarCamara, 120);
  }

  function doCapturarFoto() {
    if (!videoRef.current) return;
    const v = videoRef.current;
    const canvas = document.createElement("canvas");
    canvas.width  = v.videoWidth  || 1280;
    canvas.height = v.videoHeight || 720;
    canvas.getContext("2d").drawImage(v, 0, 0, canvas.width, canvas.height);
    const dataUrl = canvas.toDataURL("image/jpeg", 0.95);
    setCurrentFoto(dataUrl);
    setCurrentObs("");
    setModalStep("preview");
    detenerStreamDirecto();
  }

  function capturarFoto() { doCapturarFoto(); }
  function capturarFotoTeclado() { doCapturarFoto(); }

  function repetirFoto() {
    setCurrentFoto(null);
    setCurrentObs("");
    setModalStep("camera");
    iniciarCamara();
  }

  function agregarOtraFoto() {
    setFotosCapturadas((prev) => [...prev, { foto: currentFoto, observaciones: currentObs }]);
    setCurrentFoto(null);
    setCurrentObs("");
    setModalStep("camera");
    iniciarCamara();
  }

  async function guardarReceta() {
    const todasFotos = [...fotosCapturadas, { foto: currentFoto, observaciones: currentObs }];
    setGuardando(true);
    try {
      await window.api.crearRecetaLente({ pacienteLenteId: paciente.id, fechaOrden, fotos: todasFotos });
      mostrarToast("Receta guardada correctamente");
      setModalOpen(false);
      setFotosCapturadas([]);
      setCurrentFoto(null);
      cargarRecetas();
    } catch {
      mostrarToast("Error al guardar la receta");
    } finally {
      setGuardando(false);
    }
  }

  function cerrarModal() {
    detenerStreamDirecto();
    setModalOpen(false);
    setFotosCapturadas([]);
    setCurrentFoto(null);
  }

  async function eliminarReceta(id) {
    await window.api.eliminarRecetaLente(id);
    setConfirmReceta(null);
    if (lightboxReceta?.id === id) { setLightboxReceta(null); setZoom(1); setPan({ x: 0, y: 0 }); }
    mostrarToast("Receta eliminada");
    cargarRecetas();
  }

  function abrirEdicion(e, r) {
    e.stopPropagation();
    const iso = new Date(r.fecha).toLocaleDateString("es-AR", {
      timeZone: "America/Argentina/Buenos_Aires",
      year: "numeric", month: "2-digit", day: "2-digit",
    }).split("/").reverse().join("-");
    setEditFecha(iso);
    setEditFotos(r.fotos.map((f) => ({ id: f.id, observaciones: f.observaciones || "" })));
    setEditandoReceta(r);
  }

  async function guardarEdicion() {
    setGuardandoEdit(true);
    try {
      await window.api.actualizarRecetaLente({ id: editandoReceta.id, fechaOrden: editFecha, fotos: editFotos });
      mostrarToast("Receta actualizada");
      setEditandoReceta(null);
      cargarRecetas();
    } catch {
      mostrarToast("Error al actualizar");
    } finally {
      setGuardandoEdit(false);
    }
  }

  function abrirLightbox(receta, idx) {
    setLightboxReceta(receta);
    setLightboxIdx(idx);
    setZoom(1);
    setPan({ x: 0, y: 0 });
  }

  function cerrarLightbox() {
    setLightboxReceta(null);
    setZoom(1);
    setPan({ x: 0, y: 0 });
  }

  function moverLightboxDelta(dir) {
    const receta = lightboxRef.current;
    if (!receta) return;
    const len = receta.fotos.length;
    const nuevoIdx = Math.max(0, Math.min(len - 1, lightboxIdxRef.current + dir));
    setLightboxIdx(nuevoIdx);
    setZoom(1);
    setPan({ x: 0, y: 0 });
  }

  function moverLightbox(dir) {
    if (!lightboxReceta) return;
    const len = lightboxReceta.fotos.length;
    setLightboxIdx((i) => Math.max(0, Math.min(len - 1, i + dir)));
    setZoom(1);
    setPan({ x: 0, y: 0 });
  }

  function handleWheel(e) {
    e.preventDefault();
    const rect = e.currentTarget.getBoundingClientRect();
    const mx = e.clientX - rect.left - rect.width / 2;
    const my = e.clientY - rect.top - rect.height / 2;
    setZoom((z) => {
      const newZ = Math.min(8, Math.max(1, z - e.deltaY * 0.001 * z));
      if (newZ === 1) {
        setPan({ x: 0, y: 0 });
      } else {
        const scale = newZ / z;
        setPan((p) => ({ x: mx + (p.x - mx) * scale, y: my + (p.y - my) * scale }));
      }
      return newZ;
    });
  }

  function handleMouseDown(e) {
    if (zoom <= 1) return;
    setDragging(true);
    dragStart.current = { x: e.clientX - pan.x, y: e.clientY - pan.y };
  }
  function handleMouseMove(e) {
    if (!dragging || !dragStart.current) return;
    setPan({ x: e.clientX - dragStart.current.x, y: e.clientY - dragStart.current.y });
  }
  function handleMouseUp() { setDragging(false); dragStart.current = null; }

  if (!paciente) return null;

  const totalFotos = recetas.reduce((s, r) => s + r.fotos.length, 0);
  const nFotos     = fotosCapturadas.length + 1;

  return (
    <div className="page">
      <div className="pageHeaderRow">
        <div style={{ flex: 1 }}>
          <button className="btnGhost" onClick={onVolver} style={{ marginBottom: 10 }}>← Volver</button>
          <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
            {editandoNombre ? (
              <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                <input
                  value={nuevoNombre}
                  onChange={(e) => setNuevoNombre(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") guardarNombre();
                    if (e.key === "Escape") setEditandoNombre(false);
                  }}
                  style={{ fontSize: 20, fontWeight: 800, padding: "4px 10px", borderRadius: 8, border: "1px solid var(--border)", background: "var(--input-bg)", color: "var(--text)", minWidth: 200 }}
                  autoFocus
                />
                <button className="btnSmall" onClick={guardarNombre} disabled={guardandoNombre}>
                  {guardandoNombre ? "..." : "✓"}
                </button>
                <button className="btnGhost" style={{ padding: "4px 10px", fontSize: 13 }} onClick={() => setEditandoNombre(false)}>✕</button>
              </div>
            ) : (
              <>
                <h2 className="pageTitle" style={{ margin: 0 }}>{paciente.nombre}</h2>
                <button className="btnSmall" onClick={abrirEditNombre} title="Editar nombre">✎ Editar</button>
              </>
            )}
          </div>
          <p className="pageHint">
            {recetas.length} receta{recetas.length !== 1 ? "s" : ""} · {totalFotos} foto{totalFotos !== 1 ? "s" : ""}
          </p>
        </div>
        <button className="btn" onClick={abrirModal}>+ Nueva receta</button>
      </div>

      {recetas.length === 0 ? (
        <div className="card">
          <p className="empty">
            Todavía no hay recetas para este paciente.<br />
            <span className="hint">Usá el botón "Nueva receta" para agregar la primera.</span>
          </p>
        </div>
      ) : (
        <div className="fotoGrid">
          {recetas.map((r) => (
            <div key={r.id} className="fotoCard" onClick={() => abrirLightbox(r, 0)} style={{ cursor: "pointer" }}>
              <div className="fotoIconWrap">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--green-2)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                  <polyline points="14 2 14 8 20 8"/>
                  <line x1="16" y1="13" x2="8" y2="13"/>
                  <line x1="16" y1="17" x2="8" y2="17"/>
                  <polyline points="10 9 9 9 8 9"/>
                </svg>
              </div>
              <div className="fotoMeta">
                <div style={{ minWidth: 0 }}>
                  <div className="fotoFecha">
                    {paciente.nombre} — {formatFecha(r.fecha)}
                    {r.fotos.length > 1 && (
                      <span style={{ marginLeft: 8, fontSize: 11, opacity: 0.7, fontWeight: 600 }}>
                        {r.fotos.length} fotos
                      </span>
                    )}
                  </div>
                  {r.fotos[0]?.observaciones && (
                    <div style={{ fontSize: 12, color: "var(--muted)", marginTop: 2, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                      {r.fotos[0].observaciones}
                    </div>
                  )}
                </div>
                <div style={{ display: "flex", gap: 6, flexShrink: 0 }}>
                  <button className="btnSmall" onClick={(e) => abrirEdicion(e, r)}>Editar</button>
                  <button className="btnDangerSmall" onClick={(e) => { e.stopPropagation(); setConfirmReceta(r.id); }}>Eliminar</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {modalOpen && (
        <div className="modalOverlay" onClick={cerrarModal}>
          <div className="modalCard" style={{ width: "min(680px, calc(100vw - 36px))" }} onClick={(e) => e.stopPropagation()}>
            <div className="modalHeader">
              <span className="modalTitle">
                {modalStep === "camera" ? "Tomar foto" : "Vista previa"}
                {fotosCapturadas.length > 0 && (
                  <span style={{ marginLeft: 8, fontSize: 12, opacity: 0.65, fontWeight: 500 }}>
                    · {fotosCapturadas.length} foto{fotosCapturadas.length !== 1 ? "s" : ""} capturada{fotosCapturadas.length !== 1 ? "s" : ""}
                  </span>
                )}
              </span>
              <button className="modalClose" onClick={cerrarModal}>✕</button>
            </div>

            {fotosCapturadas.length > 0 && (
              <div style={{ display: "flex", gap: 8, marginBottom: 14, flexWrap: "wrap" }}>
                {fotosCapturadas.map((f, i) => (
                  <div key={i} style={{ position: "relative" }}>
                    <img src={f.foto} alt={`Foto ${i+1}`} style={{ width: 72, height: 54, objectFit: "cover", borderRadius: 8, border: "2px solid var(--green-2)" }} />
                    <span style={{ position: "absolute", bottom: 2, right: 4, fontSize: 10, color: "#fff", fontWeight: 700, textShadow: "0 1px 3px #000" }}>{i+1}</span>
                  </div>
                ))}
              </div>
            )}

            {errorCam ? (
              <div>
                <p style={{ color: "#b91c1c", fontSize: 13, margin: "0 0 14px" }}>{errorCam}</p>
                <div className="modalActions">
                  <button className="btnGhost" onClick={cerrarModal}>Cancelar</button>
                  <button className="btn" onClick={iniciarCamara}>Reintentar</button>
                </div>
              </div>
            ) : modalStep === "camera" ? (
              <div>
                <video ref={videoRef} className="webcamVideo" autoPlay playsInline muted />
                <div style={{ display: "flex", gap: 10, alignItems: "center", marginTop: 10 }}>
                  <div className="field" style={{ flexShrink: 0, margin: 0 }}>
                    <span style={{ fontSize: 12 }}>Fecha de la orden</span>
                    <input type="date" value={fechaOrden} max={hoyISO()} onChange={(e) => setFechaOrden(e.target.value)}
                      style={{ width: 160, minHeight: 34, padding: "4px 10px", fontSize: 13 }} />
                  </div>
                  <div style={{ flex: 1 }} />
                  <button
                    className="btnGhost"
                    style={{ fontSize: 12, padding: "6px 12px" }}
                    onClick={iniciarCamara}
                    title="Refrescar cámara si se pone negra"
                  >
                    ↺ Refrescar cámara
                  </button>
                </div>
                <div className="modalActions" style={{ marginTop: 10 }}>
                  <button className="btnGhost" onClick={cerrarModal}>Cancelar</button>
                  <button className="btn" onClick={capturarFoto} disabled={!stream}>
                    Capturar foto
                    {stream && <span style={{ opacity: 0.6, fontSize: 11, marginLeft: 6 }}>(Enter / Space)</span>}
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <img src={currentFoto} alt="Captura" className="capturaPreview" />
                <div className="field" style={{ marginTop: 12 }}>
                  <span>Observaciones de esta foto</span>
                  <input
                    type="text"
                    value={currentObs}
                    onChange={(e) => setCurrentObs(e.target.value)}
                    placeholder="Ej: Renovación, urgente..."
                    style={{ minHeight: 36, padding: "6px 10px", fontSize: 13 }}
                    autoFocus
                  />
                </div>
                <div className="modalActions">
                  <button className="btnGhost" onClick={repetirFoto}>Repetir foto</button>
                  <button className="btnGhost" onClick={agregarOtraFoto}>+ Agregar otra foto</button>
                  <button
                    className="btnPrimary"
                    style={{ width: "auto" }}
                    onClick={guardarReceta}
                    disabled={guardando || !fechaOrden}
                  >
                    {guardando ? "Guardando..." : `Guardar receta (${nFotos} foto${nFotos !== 1 ? "s" : ""})`}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {editandoReceta && (
        <div className="modalOverlay" onClick={() => setEditandoReceta(null)}>
          <div className="modalCard" style={{ width: "min(520px, calc(100vw - 36px))" }} onClick={(e) => e.stopPropagation()}>
            <div className="modalHeader">
              <span className="modalTitle">Editar receta</span>
              <button className="modalClose" onClick={() => setEditandoReceta(null)}>✕</button>
            </div>
            <div className="field">
              <span>Fecha de la orden</span>
              <input type="date" value={editFecha} max={hoyISO()} onChange={(e) => setEditFecha(e.target.value)}
                style={{ width: 180, minHeight: 36, padding: "6px 10px", fontSize: 13 }} />
            </div>
            {editFotos.map((ef, i) => (
              <div key={ef.id} className="field">
                <span>Observaciones — foto {i + 1}</span>
                <input
                  type="text"
                  value={ef.observaciones}
                  onChange={(e) => setEditFotos((prev) => prev.map((f, j) => j === i ? { ...f, observaciones: e.target.value } : f))}
                  placeholder="Sin observaciones"
                  style={{ minHeight: 36, padding: "6px 10px", fontSize: 13 }}
                />
              </div>
            ))}
            <div className="modalActions">
              <button className="btnGhost" onClick={() => setEditandoReceta(null)}>Cancelar</button>
              <button className="btnPrimary" style={{ width: "auto" }} onClick={guardarEdicion} disabled={guardandoEdit || !editFecha}>
                {guardandoEdit ? "Guardando..." : "Guardar cambios"}
              </button>
            </div>
          </div>
        </div>
      )}

      {confirmReceta && (
        <ConfirmModal
          titulo="Eliminar receta"
          mensaje="¿Eliminás esta receta y todas sus fotos? Esta acción no se puede deshacer."
          onConfirmar={() => eliminarReceta(confirmReceta)}
          onCancelar={() => setConfirmReceta(null)}
        />
      )}

      {lightboxReceta && (() => {
        const fotos      = lightboxReceta.fotos;
        const fotoActual = fotos[lightboxIdx];
        if (!fotoActual) return null;
        const esFirst = lightboxIdx === 0;
        const esLast  = lightboxIdx === fotos.length - 1;

        const btnNav = {
          width: 44, height: 44, borderRadius: 14,
          border: "1px solid rgba(255,255,255,0.25)",
          color: "#fff", fontSize: 24, cursor: "pointer",
          backdropFilter: "blur(6px)", display: "flex", alignItems: "center", justifyContent: "center",
        };

        return (
          <div
            className="lightboxOverlay"
            style={{ cursor: zoom > 1 ? (dragging ? "grabbing" : "grab") : "default" }}
            onWheel={handleWheel}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            <button onClick={cerrarLightbox} style={{
              ...btnNav, position: "absolute", top: 16, right: 16,
              background: "rgba(255,255,255,0.15)", zIndex: 10, fontSize: 18, fontWeight: 900,
            }}>✕</button>

            {fotos.length > 1 && (
              <button
                onClick={(e) => { e.stopPropagation(); moverLightbox(-1); }}
                disabled={esFirst}
                style={{
                  ...btnNav,
                  position: "absolute", left: 16, top: "50%", transform: "translateY(-50%)",
                  background: esFirst ? "rgba(255,255,255,0.05)" : "rgba(255,255,255,0.18)",
                  opacity: esFirst ? 0.3 : 1, zIndex: 10,
                }}
              >‹</button>
            )}

            {fotos.length > 1 && (
              <button
                onClick={(e) => { e.stopPropagation(); moverLightbox(1); }}
                disabled={esLast}
                style={{
                  ...btnNav,
                  position: "absolute", right: 16, top: "50%", transform: "translateY(-50%)",
                  background: esLast ? "rgba(255,255,255,0.05)" : "rgba(255,255,255,0.18)",
                  opacity: esLast ? 0.3 : 1, zIndex: 10,
                }}
              >›</button>
            )}

            <div style={{
              position: "absolute", bottom: 20, left: "50%", transform: "translateX(-50%)",
              background: "rgba(0,0,0,0.55)", backdropFilter: "blur(6px)",
              borderRadius: 12, padding: "8px 18px", color: "#fff", fontSize: 13,
              textAlign: "center", zIndex: 10, pointerEvents: "none",
            }}>
              {fotos.length > 1 && <div style={{ fontWeight: 700, marginBottom: 2 }}>{lightboxIdx + 1} de {fotos.length}</div>}
              <div style={{ opacity: 0.85 }}>{formatFecha(lightboxReceta.fecha)}</div>
              {fotoActual.observaciones && <div style={{ opacity: 0.7, marginTop: 3, fontSize: 12 }}>{fotoActual.observaciones}</div>}
            </div>

            <img
              src={fotoActual.foto}
              alt="Receta ampliada"
              className="lightboxImg"
              draggable={false}
              style={{
                transform: `scale(${zoom}) translate(${pan.x / zoom}px, ${pan.y / zoom}px)`,
                transition: dragging ? "none" : "transform 0.1s ease",
                userSelect: "none",
              }}
            />
          </div>
        );
      })()}

      {toast && <div className="toast">{toast}</div>}
    </div>
  );
}
