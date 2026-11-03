import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { Metrics, About, Approach, Skills, Credentials, Contact, Footer } from "./components/Sections";
import Experience from "./components/Experience";
import CaseStudy from "./components/CaseStudy";
export default function App() {
  return (<>
    <Navbar />
    <main id="top"><Hero /><Metrics /><About /><Experience /><CaseStudy /><Approach /><Skills /><Credentials /><Contact /></main>
    <Footer />
  </>);
}
