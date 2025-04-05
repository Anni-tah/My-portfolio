import { motion } from "framer-motion"; 
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Projects from "./Components/projects";
import Stats from "./Components/Stats";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";



function App() {
  return(
    <motion.div className="z-[-2] w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      <Navbar />
      <Home />
      <About/>
      <Stats/>
      <Projects/>
      <Contact/>
      <Footer/>
    </motion.div>
  );
}

export default App;
