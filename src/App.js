import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import EducationPage from './pages/EducationPage';
import ExperiencePage from './pages/ExperiencePage';
import ProjectsPage from './pages/ProjectsPage';
import TimelinePage from './pages/TimelinePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/education' element={<EducationPage />} />
        <Route path='/experience' element={<ExperiencePage />} />
        <Route path='/projects' element={<ProjectsPage />} />
        <Route path='/timeline' element={<TimelinePage />} />
      </Routes>
    </Router>
  );
}

export default App;
