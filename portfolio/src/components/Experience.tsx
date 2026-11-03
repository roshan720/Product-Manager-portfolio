import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { roles, Role } from "../data";
const List = ({ items }: { items: string[] }) => <ul>{items.map(x => <li key={x}>{x}</li>)}</ul>;
export default function Experience() {
  const [i, setI] = useState(0);
  const x: Role = roles[i];
  return (
    <section id="experience"><div className="wrap">
      <h2>Professional experience</h2><p className="lead">Four years of progression from frontend intern to Product Manager. Select a role.</p>
      <div className="tabs" role="tablist">
        {roles.map((r, j) => <button key={r.id} role="tab" aria-selected={i === j} onClick={() => setI(j)}>{r.co} · {r.id.replace(" (Frontend, React)", "")}</button>)}
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={i} className="panel" role="tabpanel" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
          <h3>{x.id}, {x.co}</h3><div className="when">{x.when}</div>
          <div className="cols">
            <div><h4>Responsibilities</h4><List items={x.r} /><br /><h4>Technical collaboration</h4><List items={x.t} /></div>
            <div><h4>Key achievements</h4><List items={x.a} /><br /><h4>Business impact</h4><List items={x.b} /></div>
          </div>
          <div className="chips">{x.m.map(k => <span key={k} className="chip">{k}</span>)}</div>
        </motion.div>
      </AnimatePresence>
    </div></section>
  );
}
