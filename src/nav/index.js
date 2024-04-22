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
            <button onClick={() => onLessonClick(1)}>Падежи</button>
          </div>
        </Link>
        <Link to="/grammar">
          <div className={`lessonLink ${activeLesson === 2 ? "active" : ""}`}>
            <button onClick={() => onLessonClick(2)}>Предлози за място</button>
          </div>
        </Link>
        <Link to="/grammar">
          <div className={`lessonLink ${activeLesson === 3 ? "active" : ""}`}>
            <button onClick={() => onLessonClick(3)}>Модални глаголи</button>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Navigation;
