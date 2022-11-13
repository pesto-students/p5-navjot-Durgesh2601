import { useState } from "react";
export const UrlShortner = () => {
  const [urlValue, setUrlValue] = useState("");
  const handleUrlShortner = () => {
    if (urlValue === "") {
      return window.alert(`Url can't be empty!`);
    }
  };
  return (
    <>
      <div className="url-action-container">
        <input
          className="url-input"
          placeholder="Shorten a link here..."
          onChange={(e) => setUrlValue(e?.target?.value)}
        />
        <button className="btn-shortner" onClick={handleUrlShortner}>
          Shorten it!
        </button>
      </div>
    </>
  );
};
