import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
const links = ["impact", "about", "experience", "salespulse", "approach", "contact"];
export default function Navbar() {
  const [dark, setDark] = useState(() => {
    try { const t = localStorage.getItem("theme"); if (t) return t === "dark"; } catch { /* ignore */ }
    return matchMedia("(prefers-color-scheme:dark)").matches;
  });
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
    try { localStorage.setItem("theme", dark ? "dark" : "light"); } catch { /* ignore */ }
  }, [dark]);
  return (
    <header><div className="wrap"><nav aria-label="Primary">
      <a className="logo" href="#top">Roshan Prajapati</a>
      {links.map(l => <a key={l} className="l" href={`#${l}`}>{l === "salespulse" ? "SalesPulse" : l[0].toUpperCase() + l.slice(1)}</a>)}
      <button id="theme" onClick={() => setDark(!dark)} aria-label="Toggle light and dark theme">{dark ? <Sun size={16} /> : <Moon size={16} />}</button>
    </nav></div></header>
  );
}
