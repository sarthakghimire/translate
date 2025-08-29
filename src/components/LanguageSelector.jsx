import { languageCodes } from "../utils/constants";

function LanguageSelector({ onLanguageChange }) {
  return (
    <select
      onChange={(e) => onLanguageChange(e.target.value)}
      defaultValue=""
      style={{ padding: "8px", margin: "10px 0" }}
    >
      <option value="" disabled>
        Select target language
      </option>
      {Object.entries(languageCodes).map(([code, name]) => (
        <option key={code} value={code}>
          {name}
        </option>
      ))}
    </select>
  );
}

export default LanguageSelector;
