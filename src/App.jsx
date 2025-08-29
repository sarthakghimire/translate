import { useState } from "react";
import InputField from "./components/InputField";
import LanguageSelector from "./components/LanguageSelector";
import TranslateButton from "./components/TranslateButton";
import OutputDisplay from "./components/OutputDisplay";
import { useTranslation } from "./hooks/useTranslation";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [targetLanguage, setTargetLanguage] = useState("");
  const [shouldFetch, setShouldFetch] = useState(false);
  const { data, isLoading, error } = useTranslation(
    shouldFetch ? text : "",
    shouldFetch ? targetLanguage : ""
  );

  const handleTranslate = () => {
    setShouldFetch(true); // Trigger query on button click
  };

  return (
    <div className="app">
      <h1>Translation App</h1>
      <InputField onTextChange={setText} />
      <LanguageSelector onLanguageChange={setTargetLanguage} />
      <TranslateButton
        onClick={handleTranslate}
        disabled={!text || !targetLanguage}
      />
      {isLoading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>Error: {error.message}</p>}
      <OutputDisplay translatedText={data} />
    </div>
  );
}

export default App;
