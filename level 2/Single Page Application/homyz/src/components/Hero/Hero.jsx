import "./hero.css";
import { HiLocationMarker } from "react-icons/hi";


const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth  center hero-container">
        <div className="flexColStart left">
          <div className="hero-title">
            <div className="orange-circle" />
            <h1>
              Discover <br />
              Most Suitable <br /> Property
            </h1>
          </div>
          <div className="flexColStart  hero-des">
            <span>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. fugiat,
              voluptates
            </span>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
              corrupti.
            </span>
          </div>
          <div className="center search-bar ">
            <HiLocationMarker color="var(--blue)" size={25} />
            <input type="text" />
            <div className="button">Search</div>
          </div>
        </div>
        <div className="center right">
          <div className="image-container">
            <img src="./hero-image.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
