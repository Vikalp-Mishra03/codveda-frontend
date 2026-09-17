import Hero from "./component/hero/Hero";
import Services from "./component/services/Services";
import WhereToBuy from "./component/wheretobuy/WhereToBuy";

const App = () => {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <Services />
      <WhereToBuy />
    </div>
  );
};

export default App;
