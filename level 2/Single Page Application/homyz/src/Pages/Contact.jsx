import "../components/PageCss/contact.css";
import GetStarted from "../components/GetStarted/GetStarted";
import { ImPhone, ImBubble } from "react-icons/im";
import { FaMessage } from "react-icons/fa6";
const Contact = () => {
  return (
    <section className="c-wrapper">
      <div className="paddings center innerWidth c-container">
        <div className="flexColStart c-left">
          <span className="orangeText">Contact Us</span>
          <span className="primaryText">Easy to Contact Us</span>
          <span className="secondaryText">
            We always ready to help by providijng the best services for you. We
            beleive a good blace to live can make your life better
          </span>
          <div className="flexColStart contactModes">
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="center icon">
                    <ImPhone />
                  </div>
                  <div className="flexColStart detail">
                    <div className="contactText">Call</div>
                    <div className="secondaryText">12345 67890</div>
                  </div>
                </div>
                <div className="center button">Call Now</div>
              </div>
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="center icon">
                    <ImBubble />
                  </div>
                  <div className="flexColStart detail">
                    <div className="contactText">Chat</div>
                    <div className="secondaryText">12345 67890</div>
                  </div>
                </div>
                <div className="center button">Chat Now</div>
              </div>
            </div>
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="center icon">
                    <ImBubble />
                  </div>
                  <div className="flexColStart detail">
                    <div className="contactText">Video Call</div>
                    <div className="secondaryText">12345 67890</div>
                  </div>
                </div>
                <div className="center button">Video Call Now</div>
              </div>
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="center icon">
                    <FaMessage />
                  </div>
                  <div className="flexColStart detail">
                    <div className="contactText">Message</div>
                    <div className="secondaryText">12345 67890</div>
                  </div>
                </div>
                <div className="center button">Message Now</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flexEnd c-right">
          <div className="image-container">
            <img src="./contact.jpg" alt="" />
          </div>
        </div>
      </div>
      <GetStarted />
    </section>
  );
};

export default Contact;
