function OutputDisplay({ translatedText }) {
  return (
    <div
      style={{ marginTop: "20px", padding: "10px", border: "1px solid #ccc" }}
    >
      <h3>Translated Text:</h3>
      <p>{translatedText || "No translation yet"}</p>
    </div>
  );
}

export default OutputDisplay;
