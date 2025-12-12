import Header from "./components/Header/Header.tsx";
import Hero from "./components/Hero/Hero.tsx";
import Problems from "./components/Problems/Problems.tsx";
import Solution from "./components/Solution/Solution.tsx";
import Technology from "./components/Technology/Technology.tsx";
import Dashboard from "./components/Dashboard/Dashboard.tsx";
import Benefits from "./components/Benefits/Benefits.tsx";
import Industries from "./components/Industries/Industries.tsx";
import { CTA } from "./components/CTA/CTA.tsx";
import Footer from "./components/Footer/Footer.tsx";
import ContactForm from "./components/ContactForm/ContactForm.tsx";
import "./styles/global.css";
import "./styles/variables.css";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Problems />
      <Solution />
      <Technology />
      <Dashboard />
      <Benefits />
      <Industries />
      <CTA />
      <ContactForm />
      <Footer />
    </>
  );
}

export default App;
