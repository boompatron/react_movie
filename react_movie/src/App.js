import Btn from "./Button";
import styles from "./App.module.css";
import React from "react";
import {useState, useEffect} from "react";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
    .then((response) => response.json())
    .then((json) => setCoins(json));
    setIsLoading(false);
  }, [])
  return (
    <div>
      <h1>Coins : {coins.length}</h1>
      {isLoading ? <strong>Loading...</strong> : null}
      <ul>
        {coins.map((coin) => (<li key={coin.id}>{coin.name} ({coin.symbol}) : {coin.quotes.USD.price}</li>))}
      </ul>
    </div>
  );
}

export default App;
