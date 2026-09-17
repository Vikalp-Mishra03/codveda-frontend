import Footer from "./component/footer/Footer";
import Hero from "./component/hero/Hero";
import Services from "./component/services/Services";
import WhereToBuy from "./component/wheretobuy/WhereToBuy";

const App = () => {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <Services />
      <WhereToBuy />
      <Footer />
    </div>
  );
};

export default App;
