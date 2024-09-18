import "./App.css";
import Carta from "./components/Card";

function App() {
  const frontImage = "/images/front.png";
  const backImage = "/images/back.png";

  return (
    <div className="App">
      <Carta frontImage={frontImage} backImage={backImage} />
    </div>
  );
}

export default App;
