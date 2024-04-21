import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function SpeakingModule() {
  const [text, setText] = useState("");
  const [voices, setVoices] = useState([]);

  useEffect(() => {
    function setVoiceList() {
      setVoices(window.speechSynthesis.getVoices());
    }

    setVoiceList();
    if (speechSynthesis.onvoiceschanged !== undefined) {
      speechSynthesis.onvoiceschanged = setVoiceList;
    }
  }, []);

  const speak = (accent) => {
    let voice = null;
    switch (accent) {
      case "english":
        voice = voices.find(
          (voice) =>
            voice.lang.startsWith("en-GB") || voice.lang.startsWith("en-US")
        );
        break;
      case "indian":
        voice = voices.find((voice) => voice.lang.startsWith("en-IN"));
        break;
      case "funny":
        voice = voices[Math.floor(Math.random() * voices.length)];
        break;
      default:
        break;
    }

    if (voice && text !== "") {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.voice = voice;
      window.speechSynthesis.speak(utterance);
    } else {
      console.log("Voice not found or no text available.");
    }
  };

  const handleSpeech = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("Speech recognition not available. Please use Google Chrome.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = false;

    recognition.onresult = (event) => {
      setText(event.results[0][0].transcript);
    };

    recognition.start();
  };

  const buttonStyle = {
    margin: "10px",
    padding: "10px 20px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
    backgroundColor: "#4CAF50",
    color: "white",
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <button style={buttonStyle} onClick={handleSpeech}>
        Talk
      </button>
      <button style={buttonStyle} onClick={() => speak("english")}>
        Repeat in English
      </button>
      <button style={buttonStyle} onClick={() => speak("indian")}>
        Repeat in Indian
      </button>
      <button style={buttonStyle} onClick={() => speak("funny")}>
        Repeat in Funny Voice
      </button>
      <p style={{ marginTop: "20px" }}>{text}</p>

      <Link to="/grammar">
        <button className="default">Back to grammar</button>
      </Link>
    </div>
  );
}

export default SpeakingModule;
