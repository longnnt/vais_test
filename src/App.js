import "./App.css";
import { AdvancedStatistic } from "./components/Advanced Statistic/AdvancedStatistic";
import { BoostYourLinks } from "./components/BoostYourLinks/BoostYourLinks";
import { Container } from "./layout/Container";
import { Footer } from "./layout/Footer";
import { Header } from "./layout/Header";
import { Menu } from "./layout/Menu";

function App() {
  return (
    <div className="App">
      <Header />
      <Container />
      <AdvancedStatistic />
      <BoostYourLinks />
      <Footer />
    </div>
  );
}

export default App;
