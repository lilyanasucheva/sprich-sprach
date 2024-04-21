import React, { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import GrammarModule from "./grammar/index";
import Header from "./header/index";
import HomePage from "./home/index";
import Navigation from "./nav/index";
import SpeakingModule from "./speaking/index";

function App() {
  const [activeLesson, setActiveLesson] = useState(null);

  const handleLessonClick = (lesson) => {
    setActiveLesson(lesson);
  };

  return (
    <Router>
      <div>
        <Header />
        <Navigation
          activeLesson={activeLesson}
          onLessonClick={handleLessonClick}
        />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/grammar"
            element={<GrammarModule activeLesson={activeLesson} />}
          />
          <Route path="/speaking" element={<SpeakingModule />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
