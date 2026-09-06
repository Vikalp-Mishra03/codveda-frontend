import "./Residencies.css";
import data from "../../utilis/residencies.json";

const Residencies = () => {
  return (
    <section className="c-wrapper">
      <div className="paddings innerWidth">
        <div className="orangeText">Best Choices</div>

        <div className="primaryText">Popular Residencies</div>

        <div className="center mainCard">
          {data.map((item, index) => (
            <div className="flexColStart r-card miniCard" key={index}>
              <img className="r-image" src={item.image} alt={item.name} />

              <div className="secondaryText  cardInfo">
                <div className="price">
                  <span className="color">$</span>
                  {item.price}
                </div>

                <div className="primaryText cardTitle">{item.name}</div>

                <div className="secondaryText cardDetail">{item.detail}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Residencies;
