import { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
export const UrlLists = ({ data, setData }) => {
  useEffect(() => {
    if (data && Array.isArray(data)) {
      const newData = data?.map((item) => ({
        ...item,
        id: uuidv4(),
        isCopied: false,
      }));
      setData(newData);
    }
  }, []);
  const handleCopyUrl = (item) => {
    navigator.clipboard.writeText(item?.short_link);
    const newData = data?.map((element) => {
      if (element?.id === item?.id) {
        element.isCopied = true;
      }
      return element;
    });
    setData(newData);
  };
  return (
    <>
      {data &&
        data?.length > 0 &&
        data?.map((item) => (
          <div className="url-static-container" key={item?.id}>
            <div className="url-static-sub-container">
              <div className="url-original">
                <p>{item?.original_link}</p>
              </div>
              <div className="url-actions-div">
                <p>{item?.short_link}</p>
                <button
                  className="btn-shortner copy"
                  onClick={() => handleCopyUrl(item)}
                >
                  {item?.isCopied ? "Copied" : "Copy"}
                </button>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};
