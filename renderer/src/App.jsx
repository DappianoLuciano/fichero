import { useEffect, useState } from "react";
import "./styles/base.css";
import "./styles/components.css";

function UpdateBanner() {
  const [status, setStatus] = useState(null);
  const [info,   setInfo]   = useState({});

  useEffect(() => {
    window.api?.onUpdaterStatus?.((data) => {
      switch (data.event) {
        case "available":
          setStatus("available");
          setInfo({ version: data.version });
          break;
        case "progress":
          setStatus("downloading");
          setInfo((p) => ({ ...p, percent: data.percent }));
          break;
        case "downloaded":
          setStatus("downloaded");
          setInfo((p) => ({ ...p, version: data.version }));
          break;
        case "error": {
          const msg = data.message ?? "";
          const noVersions = msg.includes("No published versions") || msg.includes("404");
          if (!noVersions) {
            setStatus("error");
            setInfo({ message: "No se pudo verificar actualizaciones." });
          }
          break;
        }
        default: break;
      }
    });
    return () => window.api?.offUpdaterStatus?.();
  }, []);

  if (!status) return null;

  const s = {
    position: "fixed", bottom: 16, right: 16, zIndex: 9999,
    background: "#0c5a55", color: "#fff",
    borderRadius: 10, padding: "12px 16px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.25)",
    maxWidth: 320, fontSize: 13,
    display: "flex", flexDirection: "column", gap: 8,
  };

  if (status === "available") return (
    <div style={s}>
      <strong>Nueva versión disponible: v{info.version}</strong>
      <button
        onClick={() => { setStatus("downloading"); window.api.downloadUpdate(); }}
        style={{ background: "#7ad8b0", color: "#0c5a55", border: "none", borderRadius: 6, padding: "6px 12px", cursor: "pointer", fontWeight: 700 }}
      >
        Descargar actualización
      </button>
    </div>
  );

  if (status === "downloading") return (
    <div style={s}>
      <strong>Descargando actualización... {info.percent ?? 0}%</strong>
      <div style={{ background: "rgba(255,255,255,0.2)", borderRadius: 4, height: 6 }}>
        <div style={{ width: `${info.percent ?? 0}%`, background: "#7ad8b0", borderRadius: 4, height: 6, transition: "width 0.3s" }} />
      </div>
    </div>
  );

  if (status === "downloaded") return (
    <div style={s}>
      <strong>Actualización lista: v{info.version}</strong>
      <button
        onClick={() => window.api.installUpdate()}
        style={{ background: "#7ad8b0", color: "#0c5a55", border: "none", borderRadius: 6, padding: "6px 12px", cursor: "pointer", fontWeight: 700 }}
      >
        Instalar y reiniciar
      </button>
    </div>
  );

  if (status === "error") return (
    <div style={{ ...s, background: "#c0392b" }}>
      <span>{info.message}</span>
      <button onClick={() => setStatus(null)} style={{ background: "rgba(255,255,255,0.2)", color: "#fff", border: "none", borderRadius: 6, padding: "4px 10px", cursor: "pointer" }}>
        Cerrar
      </button>
    </div>
  );

  return null;
}

import PacientesPage        from "./pages/PacientesPage";
import VerPacientePage     from "./pages/VerPacientePage";
import PacientesLentesPage from "./pages/PacientesLentesPage";
import VerPacienteLentesPage from "./pages/VerPacienteLentesPage";

const UI_KEY = "fichero:ui";

const MODES = [
  {
    key: "clasico",
    label: "Clásico",
    vars: {
      "--bg": "#f6f7f8", "--card": "#ffffff", "--text": "#0f172a",
      "--muted": "rgba(15,23,42,0.65)", "--border": "rgba(15,23,42,0.10)",
      "--shadow": "0 10px 30px rgba(2,6,23,0.08)", "--input-bg": "#ffffff",
      "--green": "#7ad8b0", "--green-2": "#55c99a", "--green-soft": "rgba(122,216,176,0.22)",
      "--sidebar": "#0c5a55", "--sidebar-border": "rgba(255,255,255,0.10)",
    },
  },
  {
    key: "oscuro",
    label: "Oscuro",
    vars: {
      "--bg": "#0f172a", "--card": "#1e293b", "--text": "#e2e8f0",
      "--muted": "rgba(226,232,240,0.55)", "--border": "rgba(255,255,255,0.10)",
      "--shadow": "0 10px 30px rgba(0,0,0,0.40)", "--input-bg": "#293548",
      "--green": "#7ad8b0", "--green-2": "#55c99a", "--green-soft": "rgba(122,216,176,0.15)",
      "--sidebar": "#050d1a", "--sidebar-border": "rgba(255,255,255,0.08)",
    },
  },
];

function loadUi() {
  try {
    const raw = localStorage.getItem(UI_KEY);
    if (!raw) return { themeKey: "clasico" };
    const p = JSON.parse(raw);
    const key = String(p?.themeKey ?? "clasico");
    return { themeKey: MODES.some((m) => m.key === key) ? key : "clasico" };
  } catch { return { themeKey: "clasico" }; }
}

function applyTheme(key) {
  const mode = MODES.find((m) => m.key === key) ?? MODES[0];
  const r = document.documentElement;
  for (const [prop, val] of Object.entries(mode.vars)) r.style.setProperty(prop, val);
  if (key === "oscuro") r.setAttribute("data-theme", "dark");
  else r.removeAttribute("data-theme");
}

const NAV = [
  { section: "Pacientes", key: "pacientes", label: "Pacientes" },
  { section: "Contactología", key: "pacientesLentes", label: "LDC" },
];

export default function App() {
  const [tab, setTab]                             = useState("pacientes");
  const [ui, setUi]                               = useState(() => loadUi());
  const [selectedPaciente, setSelectedPaciente]   = useState(null);
  const [selectedLente, setSelectedLente]         = useState(null);

  useEffect(() => { applyTheme(ui.themeKey); }, [ui.themeKey]);

  function verPaciente(p) {
    setSelectedPaciente(p);
    setTab("verPaciente");
  }

  function volverAPacientes() {
    setSelectedPaciente(null);
    setTab("pacientes");
  }

  function verPacienteLente(p) {
    setSelectedLente(p);
    setTab("verPacienteLente");
  }

  function volverAPacientesLentes() {
    setSelectedLente(null);
    setTab("pacientesLentes");
  }

  function toggleTheme() {
    const next = ui.themeKey === "clasico" ? "oscuro" : "clasico";
    const newUi = { themeKey: next };
    setUi(newUi);
    localStorage.setItem(UI_KEY, JSON.stringify(newUi));
  }

  let lastSection = null;

  return (
    <div className="appLayout">
      <aside className="sidebar">
        <div className="sidebarHeader">
          <div className="sidebarBrand">Fichero</div>
          <div className="sidebarSub">Gestión de fichas</div>
        </div>

        <nav className="sideNav">
          {NAV.map(({ section, key, label }) => {
            const showDivider = section && section !== lastSection;
            if (showDivider) lastSection = section;
            const isActive = tab === key
              || (key === "pacientes" && tab === "verPaciente")
              || (key === "pacientesLentes" && tab === "verPacienteLente");
            return (
              <div key={key}>
                {showDivider && (
                  <div style={{
                    fontSize: 10, fontWeight: 900, opacity: 0.5,
                    letterSpacing: "0.08em", padding: "6px 4px 2px",
                    textTransform: "uppercase",
                  }}>
                    {section}
                  </div>
                )}
                <button
                  className={`sideItem ${isActive ? "active" : ""}`}
                  onClick={() => { setSelectedPaciente(null); setTab(key); }}
                >
                  <span className="dot" />
                  {label}
                </button>
              </div>
            );
          })}
        </nav>

        <div className="sidebarFooter">
          <button className="themeToggle" onClick={toggleTheme}>
            <span>{ui.themeKey === "oscuro" ? "☀" : "☾"}</span>
            {ui.themeKey === "oscuro" ? "Modo clásico" : "Modo oscuro"}
          </button>
        </div>
      </aside>

      <main className="main">
        <div className="mainContent">
          <div className="container">
            {tab === "pacientes"        && <PacientesPage        onVerPaciente={verPaciente} />}
            {tab === "verPaciente"     && <VerPacientePage      paciente={selectedPaciente} onVolver={volverAPacientes} onPacienteActualizado={(p) => setSelectedPaciente(p)} />}
            {tab === "pacientesLentes" && <PacientesLentesPage  onVerPaciente={verPacienteLente} />}
            {tab === "verPacienteLente" && <VerPacienteLentesPage paciente={selectedLente} onVolver={volverAPacientesLentes} onPacienteActualizado={(p) => setSelectedLente(p)} />}
          </div>
        </div>
      </main>

      <UpdateBanner />
    </div>
  );
}
