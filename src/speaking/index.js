import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function SpeakingModule() {
  const [dialog, setDialog] = useState([]);
  const [voices, setVoices] = useState([]);
  const [currentPromptIndex, setCurrentPromptIndex] = useState(0);

  useEffect(() => {
    function setVoiceList() {
      setVoices(window.speechSynthesis.getVoices());
    }

    setVoiceList();
    if (speechSynthesis.onvoiceschanged !== undefined) {
      speechSynthesis.onvoiceschanged = setVoiceList;
    }
  }, []);

  const prompts = [
    "Hast du das Buch gesehen, das auf dem Tisch liegt?",
    "Und was ist das auf dem Stuhl?",
    "Wegen wessen Abwesenheit wurde die Party abgesagt?",
    "Trotz wessen Bemühungen hat er die Prüfung nicht bestanden?",
  ];

  const speakPrompt = () => {
    if (currentPromptIndex < prompts.length) {
      speak(prompts[currentPromptIndex], "german");
    }
  };

  const handleRespond = (response) => {
    setDialog([...dialog, { prompt: prompts[currentPromptIndex], response }]);
    setCurrentPromptIndex(currentPromptIndex + 1);
  };

  const speak = (text, accent) => {
    let voice = null;
    switch (accent) {
      case "german":
        voice = voices.find((voice) => voice.lang.startsWith("de"));
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

  return (
    <div class="content" style={{ textAlign: "center", marginTop: "20px" }}>
      <div>
        {dialog.map((item, index) => (
          <div key={index}>
            <p>{`Paul: ${item.prompt}`}</p>
            <p>{`Anna: ${item.response}`}</p>
          </div>
        ))}
      </div>
      {currentPromptIndex < prompts.length && (
        <div>
          <button class="primary" onClick={speakPrompt}>
            Speak Prompt
          </button>
          <Link to="#" onClick={() => handleRespond("User's response")}>
            <button class="primary">Respond</button>
          </Link>
        </div>
      )}
      <Link to="/grammar">
        <button className="default">Back to grammar</button>
      </Link>
    </div>
  );
}

export default SpeakingModule;
