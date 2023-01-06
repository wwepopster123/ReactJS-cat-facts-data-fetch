import load from "./load.svg";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [fact, setFact] = useState("");
  const [isLoad, setIsLoad] = useState(false);

  useEffect(() => {
    setIsLoad(false);
  }, [fact]);

  const handleNewFactClick = () => {
    setIsLoad(true);
    fetch("https://catfact.ninja/fact")
      .then((res) => res.json())
      .then((data) => {
        if (data?.fact !== null) setFact(data.fact);
      });
  };

  return (
    <div className="App">
      <div>Cat facts</div>
      <div className="button">
        <button onClick={handleNewFactClick}>New fact</button>
      </div>
      {isLoad ? (
        <div className="fact">
          <img className="load" src={load} />
        </div>
      ) : (
        <div className="fact">{fact}</div>
      )}
    </div>
  );
}

export default App;
