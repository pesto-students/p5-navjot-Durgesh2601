import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import Button from "react-bootstrap-button-loader";
import "react-toastify/dist/ReactToastify.css";
export const UrlShortner = ({ data, setData }) => {
  const [urlValue, setUrlValue] = useState("");
  const [loading, setLoading] = useState(false);
  const handleUrlShortner = () => {
    if (urlValue === "") {
      return toast(`Url can't be empty!`);
    }
    setLoading(true);
    axios
      .post(`https://api.shrtco.de/v2/shorten?url=${urlValue}`)
      .then((res) => {
        if (res?.status === 201) {
          setLoading(false);
          toast(`Url shortened successfully!`);
          const result = res?.data?.result;
          setData([result, ...data]);
          setUrlValue("");
        }
      })
      .catch((err) => {
        setLoading(false);
        toast(err?.message);
        setUrlValue("");
        console.error(err);
      });
  };
  return (
    <>
      <div className="url-action-container">
        <input
          className="url-input"
          placeholder="Shorten a link here..."
          value={urlValue}
          onChange={(e) => setUrlValue(e?.target?.value)}
        />
        <Button
          loading={loading}
          className="btn-shortner"
          onClick={handleUrlShortner}
        >
          Shorten it!
        </Button>
        <ToastContainer />
      </div>
    </>
  );
};
