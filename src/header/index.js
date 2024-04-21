import React, { useState } from "react";
import userIcon from "../user.jpeg";

function Header() {
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const [showLanguageModal, setShowLanguageModal] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("bg");

  function changeLanguage(event) {
    setSelectedLanguage(event.target.value);
    if (event.target.value === "en") {
      // Redirect to the English version of the page or switch content dynamically
      alert("English version not available yet."); // Placeholder alert
      // You can redirect to an English version of the page or switch content dynamically here
    }
  }

  function toggleUserDropdown() {
    setShowUserDropdown(!showUserDropdown);
  }

  function toggleLanguageModal() {
    setShowLanguageModal(!showLanguageModal);
  }

  return (
    <header className="header">
      <div className="header-logo"></div>
      <div className="header-user">
        <div className="dropdown">
          <button className="user-icon" onClick={toggleUserDropdown}>
            <img src={userIcon} alt="User Icon" />
          </button>
          {showUserDropdown && (
            <div className="dropdown-content">
              <a href="#">Profile</a>
              <a href="#" onClick={toggleLanguageModal}>
                Settings
              </a>
              <a href="#">Logout</a>
            </div>
          )}
        </div>
      </div>
      {showLanguageModal && (
        <div className="modal">
          <div className="modal-content">
            <button className="close" onClick={toggleLanguageModal}>
              X
            </button>
            <h2>Change Language</h2>
            <form>
              <div class="form-group">
                <label htmlFor="language-select">Select Language</label>
                <select
                  id="language-select"
                  value={selectedLanguage}
                  onChange={changeLanguage}
                >
                  <option value="bg">Български</option>
                  <option value="en">English</option>
                </select>
              </div>
              <div class="form-group">
                <button className="default" onClick={toggleLanguageModal}>
                  Cancel
                </button>
                <button className="primary">Save</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
