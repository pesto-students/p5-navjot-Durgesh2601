import "./Homepage.css";
import img from "../../assets/imageStatic.png";
import { UrlShortner } from "./UrlShortner";
import { UrlLists } from "./UrlLists";
import { useState } from "react";
const defaultData = [
  {
    code: "KCveN",
    short_link: "shrtco.de/KCveN",
    full_short_link: "https://shrtco.de/KCveN",
    short_link2: "9qr.de/KCveN",
    full_short_link2: "https://9qr.de/KCveN",
    share_link: "shrtco.de/share/KCveN",
    full_share_link: "https://shrtco.de/share/KCveN",
    original_link: "http://example.org/very/long/link.html",
  },
];
export const Homepage = () => {
  const [data, setData] = useState(defaultData);
  return (
    <div className="main-conatiner">
      <section className="sub-container">
        <div className="homepage-sub-section">
          <p className="homepage-main-text">More than just shorter Links</p>
          <p>
            Build your brand's recognition and get detailed insights on how your
            links are performing
          </p>
        </div>
        <div className="homepage-sub-section-sub">
          <img src={img} alt="img" height={300} width={400} />
        </div>
      </section>
      <UrlShortner data={data} setData={setData} />
      <UrlLists data={data} setData={setData} />
    </div>
  );
};
