import { Route, Routes } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Home from '../components/Home';
import Projects from '../components/Projects';
import About from '../components/About';
import Contact from '../components/Contact';
import Education from '../components/Education';
import WorkExperience from '../components/Work_experience'; // Corrected to PascalCase

function Root() {
  return(
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/education" element={<Education />} />
        <Route path="/work_experience" element={<WorkExperience />} /> {/* Corrected */}
      </Routes>
    </>
  )
}

export default Root;
