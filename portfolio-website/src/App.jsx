import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
} from "react-router-dom";

import styles from "./App.module.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/hero";
import Experience from "./components/Experience/Experience";
import Activities from "./components/Activities/Activities";
import Education from "./components/Education/Education";
import Projects from "./components/Projects/Projects";
import Message from "./components/Message/Message";
import Skills from "./components/Skills/Skills";
import Competitions from "./components/Competitions/Competitions";

function App() {
  return (
    <Router>
      <div className={styles.App}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/education" element={<Education />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/message" element={<Message />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/competitions" element={<Competitions />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
