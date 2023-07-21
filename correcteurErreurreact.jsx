import React, { useState } from "react";
import axios from "axios";

const SpellingCorrector = () => {
  const [inputText, setInputText] = useState("");
  const [correctedText, setCorrectedText] = useState("");
  const [loading, setLoading] = useState(false);

  const grammarBotApiKey = "YOUR_GRAMMARBOT_API_KEY"; // Remplacez par votre clé d'API GrammarBot

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const correctSpelling = () => {
    setLoading(true);

    // Appeler l'API GrammarBot pour la correction d'orthographe
    axios
      .post("https://grammarbot.p.rapidapi.com/check", {
        text: inputText,
        language: "en-US", // Modifier si nécessaire pour d'autres langues
      }, {
        headers: {
          "x-rapidapi-key": grammarBotApiKey,
          "x-rapidapi-host": "grammarbot.p.rapidapi.com",
        },
      })
      .then((response) => {
        const { matches } = response.data;
        let correctedText = inputText;

        // Remplacer les erreurs par les suggestions de correction
        for (const match of matches) {
          const { message, replacements } = match;
          const suggestion = replacements.length > 0 ? replacements[0].value : "[CORRECTION]";
          correctedText = correctedText.replace(message, suggestion);
        }

        setCorrectedText(correctedText);
      })
      .catch((error) => {
        console.error("Erreur lors de la correction d'orthographe :", error);
        setCorrectedText("[ERREUR DE CORRECTION]");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    correctSpelling();
  };

  return (
    <div>
      <h2>Correcteur d'orthographe</h2>
      <form onSubmit={handleFormSubmit}>
        <textarea
          rows={5}
          value={inputText}
          onChange={handleInputChange}
          placeholder="Entrez votre texte avec des erreurs d'orthographe ici"
        />
        <button type="submit">Corriger</button>
      </form>
      {loading ? <p>Correction en cours...</p> : <div>{correctedText}</div>}
    </div>
  );
};

export default SpellingCorrector;
