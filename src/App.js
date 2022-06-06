import "./styles.css";
import Header from "./components/Header";
import Card from "./components/Card";
import cardData from "./cardData";

const cardElements = cardData.map((card) => {
  return <Card card={card} />;
});

function App() {
  return (
    <div className="App">
      <Header />
      {cardElements}
    </div>
  );
}

export default App;
