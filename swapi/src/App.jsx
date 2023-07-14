import { useState, useEffect } from "react";
import Card from "./components/Card";

function App() {
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    getData("the hangover");
  }, []);

  const getData = async input => {
    try {
      const url = "https://swapi.dev/api/starships/";
      const response = await fetch(url);
      const data = await response.json();
      setStarships(data.results);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  return (
    <>
      <Card starships={starships} />
    </>
  );
}

export default App;
