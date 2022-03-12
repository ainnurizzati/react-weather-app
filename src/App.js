import './App.css';
import React, { useEffect, useState } from "react";

function App() {

  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);

  useEffect(()=> {
    navigator.geolocation.getCurrentPosition(function(position) {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });

    // await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid={API key}`)
    //   .then (response => console.log(response));

  }, [lat, long]);



  return (
    <div className="App">
      <p>Hello</p>
    </div>
  );
}

export default App;
