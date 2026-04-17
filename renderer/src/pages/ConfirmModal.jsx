export default function ConfirmModal({ titulo, mensaje, onConfirmar, onCancelar, peligro = true }) {
  return (
    <div className="modalOverlay" onClick={onCancelar}>
      <div
        className="modalCard"
        style={{ width: "min(400px, calc(100vw - 36px))" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modalHeader">
          <span className="modalTitle">{titulo}</span>
          <button className="modalClose" onClick={onCancelar}>✕</button>
        </div>
        <p style={{ margin: "4px 0 20px", fontSize: 14, color: "var(--muted)", lineHeight: 1.5 }}>
          {mensaje}
        </p>
        <div className="modalActions">
          <button className="btnGhost" onClick={onCancelar}>Cancelar</button>
          <button
            onClick={onConfirmar}
            style={{
              border: peligro ? "1px solid rgba(255,77,77,0.5)" : "1px solid transparent",
              background: peligro ? "rgba(255,77,77,0.12)" : "var(--green-2)",
              color: peligro ? "#b91c1c" : "#fff",
              borderRadius: 12, padding: "10px 16px",
              fontWeight: 800, cursor: "pointer",
              fontFamily: "inherit", fontSize: 14,
            }}
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
}
