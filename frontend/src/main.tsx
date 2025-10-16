import React from "react";
import { createRoot } from "react-dom/client";

function App() {
  const [msg, setMsg] = React.useState<string>("(loading)");
  React.useEffect(() => {
    fetch("/api/hello")
      .then(r => r.text())
      .then(setMsg)
      .catch(() => setMsg("❌ backend not reachable"));
  }, []);
  return (
    <div style={{ fontFamily: "sans-serif", padding: 24 }}>
      <h1>Frontend + Backend Monorepo</h1>
      <p>Backend says: <b>{msg}</b></p>
    </div>
  );
}

createRoot(document.getElementById("root")!).render(<App />);