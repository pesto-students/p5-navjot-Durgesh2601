import "./Homepage.css";
import img from "../../assets/imageStatic.png";
import { UrlShortner } from "./UrlShortner";
export const Homepage = () => {
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
      <UrlShortner />
    </div>
  );
};
