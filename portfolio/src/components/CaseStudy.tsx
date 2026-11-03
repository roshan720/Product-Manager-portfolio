import { cs } from "../data";
export default function CaseStudy() {
  return (
    <section id="salespulse"><div className="wrap">
      <h2>Featured case study: SalesPulse</h2>
      <div className="flag">Independent product case study and concept. Not a launched product; no customer interviews, revenue, or adoption are claimed.</div>
      <p className="lead"><b>Problem:</b> Sales representatives spend considerable time researching companies before meetings, gathering information from financial data, news, and social platforms. <b>Opportunity:</b> an AI-powered sales intelligence assistant that automatically curates and delivers contextual company insights before customer meetings.</p>
      {cs.map(([t, html], i) => (
        <details key={t} open={i === 0}><summary>{t}</summary><div dangerouslySetInnerHTML={{ __html: html }} /></details>))}
      <p className="note">Personas, scores, and metrics above are illustrative planning assumptions from my concept work, not measured data.</p>
    </div></section>
  );
}
