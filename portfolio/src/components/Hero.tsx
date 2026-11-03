import { useState } from "react";
const steps: [string, string][] = [["Discover","Customer needs, market insight"],["Define","Problem framing, PRD, user stories"],["Prioritize","RICE, value vs. complexity"],["Build","Agile delivery, UAT, quality"],["Measure","Product analytics, A/B testing"],["Iterate","Feed learning back into the roadmap"]];
export default function Hero() {
  const [on, setOn] = useState(0);
  return (
    <section className="hero"><div className="wrap hero-grid">
      <div>
        <div className="avail"><i />Based in India · Available for Product Management opportunities</div>
        <h1>Building products at the intersection of technology, business &amp; AI.</h1>
        <p className="sub">I’m Roshan Prajapati, a Product Manager with an engineering background. I turn complex problems into clear product strategies, actionable roadmaps, and measurable outcomes.</p>
        <p className="tags">Product Manager | Technical Product Thinker | AI Enthusiast</p>
        <div className="ctas">
          <a className="btn p" href="#experience">Explore my work</a>
          <a className="btn" href="/Roshan_Prajapati_Resume.pdf" download>Download resume</a>
          <a className="btn" href="#contact">Let’s connect</a>
          <a className="btn" href="https://linkedin.com/in/roshanprajapati-pm/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
      <aside className="loop" aria-label="Product development framework">
        <h3>How I run a product loop</h3><p>Hover or focus a step to see what it means in practice.</p>
        <ol className="steps">
          {steps.map(([n, d], i) => (
            <li key={n} tabIndex={0} className={on === i ? "on" : ""} onMouseEnter={() => setOn(i)} onFocus={() => setOn(i)}>
              <b>{i + 1}</b>{n}<span>{d}</span>
            </li>))}
        </ol>
      </aside>
    </div></section>
  );
}
