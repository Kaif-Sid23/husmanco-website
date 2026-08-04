import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Founder from "./components/Founder/Founder";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";
import Stats from "./components/Stats/Stats";
import Industries from "./components/Industries/Industries";
import ComplianceCalendar from "./components/ComplianceCalendar/ComplianceCalendar";
import FAQ from "./components/FAQ/FAQ";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import FloatingButtons from "./components/FloatingButtons/FloatingButtons";

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Founder />
        <About />
        <Services />
        <WhyChooseUs />
        <Stats />
        <Industries />
        <ComplianceCalendar />
        
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}

export default App;