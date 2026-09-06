import "./Footer.css";

const Footer = () => {
  return (
    <div className="f-wrapper">
      <div className="paddings innerWidth center f-container">
        <div className="flexColStart f-left">
          <img src="./logo2.png" alt="logo" width={100} />
          <span className="secondaryText">
            Our vision is to make all people <br />
            the best place to live for them.
          </span>
        </div>
        <div className="flexColStart f-right">
            <span className="primaryText">Information</span>
            <span className="secondaryText">145 New Delhi, India</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
