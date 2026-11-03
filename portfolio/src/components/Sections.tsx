import { Mail, Linkedin, Phone, MapPin, FileDown } from "lucide-react";
const metrics: [string, string][] = [["18%","Improvement in sprint velocity"],["2 days","Reduction in delivery cycle time"],["22%","Reduction in post-release defects"],["12","E-commerce features led"],["35+","Sprints with delivery-risk management"],["4","Releases with UAT and quality leadership"]];
export const Metrics = () => (
  <section id="impact"><div className="wrap"><h2>Impact at a glance</h2><p className="lead">Results from my roles at Accenture, as stated on my resume.</p>
    <div className="metrics">{metrics.map(([n, l]) => <div className="m" key={l}><strong>{n}</strong><span>{l}</span></div>)}</div></div></section>
);
export const About = () => (
  <section id="about"><div className="wrap about"><h2>From building products to shaping them</h2><div>
    <p>I started my career as a Software Engineer, where I learned how products are actually built. Working closely with product and design teams helped me understand that great products require more than clean code: they require customer understanding, prioritization, strategic thinking, and execution.</p>
    <p>That experience motivated my transition into Product Management.</p>
    <p>Today, I combine engineering knowledge with product strategy to make better decisions, align cross-functional teams, and deliver measurable outcomes.</p></div></div></section>
);
const approach: [string, string][] = [["Customer discovery","Turning customer needs and market insight into clear problem statements."],["Problem framing & strategy","Market and competitor research feeding a roadmap with short- and long-term balance."],["Prioritization","RICE scoring and Value vs. Complexity to decide what ships first."],["PRDs & user stories","Tighter requirements and definition-of-ready standards that cut cycle time by 2 days."],["Agile & stakeholders","Aligning engineering, design, and business on quarterly roadmap initiatives."],["Analytics, experiments & AI","Amplitude/Mixpanel, A/B testing, and evaluating AI recommendations and customer-insight opportunities."]];
export const Approach = () => (
  <section id="approach"><div className="wrap"><h2>Product thinking</h2><p className="lead">The skills I apply across the loop: Discover → Define → Prioritize → Build → Measure → Iterate.</p>
    <div className="grid3">{approach.map(([t, d]) => <div className="card" key={t}><h3>{t}</h3><p>{d}</p></div>)}</div></div></section>
);
const eng = ["React.js","JavaScript","HTML","CSS","Git & GitHub","REST API integration","Technical feasibility scoping"];
const tools = ["Jira","Figma","Productboard","Amplitude / Mixpanel","Agile / Scrum","Product requirements"];
const Chips = ({ items }: { items: string[] }) => <div className="chips" style={{ marginTop: 0 }}>{items.map(x => <span className="chip" key={x}>{x}</span>)}</div>;
export const Skills = () => (
  <section id="foundation"><div className="wrap"><h2>Technical foundation</h2><p className="lead">I shipped e-commerce features as an engineer before I owned a roadmap. That’s why I scope realistically and write requirements that survive a sprint.</p>
    <div className="panel"><div className="cols"><div><h4>Engineering</h4><Chips items={eng} /></div><div><h4>Product tooling</h4><Chips items={tools} /></div></div></div></div></section>
);
const creds: [string, string][] = [["Product Management with Generative & Agentic AI","Certificate of Excellence in Evaluation, BITSoM with Masai School, 2026."],["Star Performer Award","Accenture, for project execution and leadership."],["Spotlight Award","Accenture, for project execution and leadership."],["B.Tech, Electrical & Electronics","Lakshmi Narain College of Technology, 2022. SGPA 9.01."]];
export const Credentials = () => (
  <section id="credentials"><div className="wrap"><h2>Certifications &amp; achievements</h2>
    <div className="grid3" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(230px,1fr))" }}>{creds.map(([t, d]) => <div className="card" key={t}><h3>{t}</h3><p>{d}</p></div>)}</div></div></section>
);
export const Contact = () => (
  <section id="contact"><div className="wrap"><div className="contact"><h2>Have an interesting product problem to solve?</h2>
    <dl>
      <dt><Mail size={16} aria-label="Email" /></dt><dd><a href="mailto:hustlersbayro@gmail.com">hustlersbayro@gmail.com</a></dd>
      <dt><Linkedin size={16} aria-label="LinkedIn" /></dt><dd><a href="https://linkedin.com/in/roshanprajapati-pm/" target="_blank" rel="noopener noreferrer">linkedin.com/in/roshanprajapati-pm</a></dd>
      <dt><Phone size={16} aria-label="Phone" /></dt><dd><a href="tel:+917209539208">+91 7209539208</a></dd>
      <dt><MapPin size={16} aria-label="Location" /></dt><dd>Ranchi, Jharkhand, India</dd>
    </dl>
    <div className="ctas"><a className="btn p" href="mailto:hustlersbayro@gmail.com">Email Roshan</a><a className="btn" href="/Roshan_Prajapati_Resume.pdf" download><FileDown size={16} style={{ display: "inline", verticalAlign: "-3px" }} /> Download resume</a></div>
  </div></div></section>
);
export const Footer = () => <footer><div className="wrap">© 2026 Roshan Prajapati. Product Manager, Ranchi, India.</div></footer>;
