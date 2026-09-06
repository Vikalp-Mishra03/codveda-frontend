import "./../components/PageCss/ourValue.css";
import data from "../utilis/accordion";
import { useState } from "react";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";

const OurValue = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const handleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <section className="v-wrapper">
      <div className="paddings center innerWidth v-container">
        <div className="v-left">
          <div className="image-container">
            <img src="./value.png" alt="" />
          </div>
        </div>
        <div className="flexColStart v-right">
          <span className="orangeText">Our Value</span>
          <span className="primaryText">Value We Give To You</span>
          <span className="secondaryText">
            We always ready to help by providijng the best services for you.
            <br />
            We beleive a good blace to live can make your life better
          </span>
          <div className="accordion">
            {data.map((item, index) => (
              <div className="accordionItem expanded" key={index}>
                <div
                  className="accordionButton"
                  onClick={() => handleAccordion(index)}
                >
                  <div className="accordionIcon">{item.icon}</div>

                  <span className="primaryText head">{item.heading}</span>

                  <span className="accordionArrow icon">
                    {openIndex === index ? <HiChevronUp/> : <HiChevronDown/>}
                  </span>
                </div>

                {openIndex === index && (
                  <div className="secondaryText accordionPanel ">{item.detail}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurValue;
