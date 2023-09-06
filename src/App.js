
import React, { useEffect, useState } from "react";
import "./App.css";
import logo from './logo.svg';


function App() {
  const [backgroundImageUrl, setBackgroundImageUrl] = useState("");

  useEffect(() => {
    // Fetch the background image URL
    fetch("https://api.val.town/v1/run/pasquale.labImageEndpoint")
      .then((response) => response.text())
      .then((imageUrl) => {
        // Remove quotes from the fetched image URL
        imageUrl = imageUrl.replace(/^"|"$/g, "");
        setBackgroundImageUrl(imageUrl);
      })
      .catch((error) => {
        console.error("An error occurred:", error);
      });
  }, []);

  return (
    <div className="App" style={{ backgroundImage: `url('${backgroundImageUrl}')` }}>
      {/* Rest of your App content here */}
      <div className="info">
        <img src={logo} className="logo" alt="logo" />
        <span>Lingonberry Intelligence</span> 
      </div>
    </div>
  );
}

export default App;
