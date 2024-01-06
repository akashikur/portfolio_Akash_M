import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.scss";
import Contact from "./Component/Contact/Contact.jsx";
import LandingPage from "./Component/LandingPage/LandingPage.jsx";
import Project from "./Component/Project/Project.jsx";
import Navbar from "./Component/navbar/Navbar.jsx";
import Skills from "./Component/skills/Skills.jsx";
function App() {
  return (
    <div className="app">
      <ToastContainer />

      <section id="Home">
        <Navbar />
        <LandingPage />
      </section>
      <section id="Skills">
        <Skills />
      </section>
      <Project />
      <section id="Hire Me">
        <Contact />
      </section>
    </div>
  );
}

export default App;
