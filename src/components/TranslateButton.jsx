function TranslateButton({ onClick, disabled }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        padding: "10px 20px",
        background: disabled ? "#ccc" : "#007bff",
        color: "white",
        border: "none",
        cursor: disabled ? "not-allowed" : "pointer",
      }}
    >
      Translate
    </button>
  );
}

export default TranslateButton;
