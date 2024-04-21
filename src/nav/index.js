import React from "react";
import { Link } from "react-router-dom";
import logo1 from "../logo1.png";

function Navigation({ activeLesson, onLessonClick }) {
  return (
    <nav id="navigator" className="navigator open" aria-label="Navigator">
      <div className="header-logo">
        <img src={logo1} alt="SprichSprach Logo" />
      </div>
      <div className="lessonsList">
        <Link to="/grammar">
          <div className={`lessonLink ${activeLesson === 1 ? "active" : ""}`}>
            <button onClick={() => onLessonClick(1)}>Lesson 1</button>
          </div>
        </Link>
        <Link to="/grammar">
          <div className={`lessonLink ${activeLesson === 2 ? "active" : ""}`}>
            <button onClick={() => onLessonClick(2)}>Lesson 2</button>
          </div>
        </Link>
        <Link to="/grammar">
          <div className={`lessonLink ${activeLesson === 3 ? "active" : ""}`}>
            <button onClick={() => onLessonClick(3)}>Lesson 3</button>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Navigation;
