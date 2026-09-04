import './header.css'
const Header = () => {
  return (
    <section className="h-wrapper">
      <section className="h-container center innerWidth paddings">
        <img src="./logo.png" alt="logo" width={100} />
        <section className="center h-menu">
          <a href="">Residencies</a>
          <a href="">Our Value</a>
          <a href="">Contact Us</a>
          <a href="">Get Started</a>
          <a href="">Contact</a>
          <button className="button">Contact Us</button>
        </section>
      </section>
    </section>
  );
};

export default Header;
