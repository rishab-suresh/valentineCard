import "./App.css";
import React, { useState, useEffect } from "react";
import saanvi1 from "./assets/saanvi1.jpg";
import saanvi2 from "./assets/saanvi2.jpg";
import saanvi3 from "./assets/saanvi3.jpg";

function App() {
  const [cardState, setCardState] = useState("");
  const [showAdditionalContent, setShowAdditionalContent] = useState(false);

  useEffect(() => {
    const openCard = () => {
      setCardState("open-half");
      setTimeout(() => {
        setCardState("open-fully");
        setTimeout(() => {
          setShowAdditionalContent(true);
        }, 1500);
      }, 1000);
    };

    const closeCard = () => {
      setCardState("close-half");
      setTimeout(() => {
        setCardState("");
        setTimeout(() => {
          setShowAdditionalContent(true);
        }, 1500);
      }, 1000);
    };

    document.getElementById("open").addEventListener("click", openCard);
    document.getElementById("close").addEventListener("click", closeCard);

    return () => {
      document.getElementById("open").removeEventListener("click", openCard);
      document.getElementById("close").removeEventListener("click", closeCard);
    };
  }, []);

  const additionalContent = showAdditionalContent && (
    <div id="card-inside-left-open-fully">
      {/* Add your additional content here */}
      <div className="w-full h-full px-2 py-2 ">
        <img
          src={saanvi1}
          className="w-[150px] h-[150px] absolute top-10 left-6 -rotate-[25deg] "
          alt="xyz"
        />
        <img
          src={saanvi3}
          className="w-[150px] h-[150px] absolute top-[200px] left-[250px] rotate-[25deg] "
          alt="xyz"
        />
        <img
          src={saanvi2}
          className="w-[150px] h-[150px] absolute top-[300px] left-6 -rotate-[25deg] "
          alt="xyz"
        />
      </div>
    </div>
  );

  return (
    <div id="card" className={cardState}>
      {cardState === "open-fully" && additionalContent}

      <div id="card-inside" className="flex flex-col px-5 justify-between py-5">
        Happy Valentines To My Baby I am sorry it took so long but the fact you
        have to work took my original Ideas of the boat. So here is a card for
        you Asking you To be My Valentine
        <div
          className="flex flex-col justify-center"
          data-aos="fade-up"
          data-aos-duration="6000"
        >
          <p className="signed"> Will You Be My Valentine? </p>
          <div className="flex flex-row justify-around">
            <button className="w-[100px] h-[40px] bg-red-500 text-white rounded-full">
              Yes
            </button>
            <button className="w-[100px] h-[40px] bg-red-500 text-white rounded-full">
              Yes
            </button>
          </div>
        </div>
        <div>
          <p className="italic font-serif flex flex-row justify-start font-thin">
            PS I LOVE YOU
          </p>
        </div>
      </div>

      <div id="card-front">
        <div className="wrap">
          <h1>To My Baby</h1>
        </div>

        <button id="open">&gt;</button>
        <button id="close">&lt;</button>
      </div>
    </div>
  );
}

export default App;
