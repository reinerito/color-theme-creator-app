import { useState, useEffect } from "react";
import "./CopyToClipboard.css";

export default function CopyToClipboard({ hexCode }) {
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    if (isCopied) {
      const timer = setTimeout(() => {
        setIsCopied(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isCopied]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(hexCode);
      setIsCopied(true);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <div className="copy-container">
      <button onClick={handleCopy} className="copy-button">
        Copy to Clipboard
      </button>
      {isCopied && <span className="copy-message">Copied to clipboard!</span>}
    </div>
  );
}
