import ball from "./8ball.png";
import React from "react";


import triangle from "./triangle.png";
import { useEffect, useState } from 'react';
import "./styles.scss";

function Ball() {
    const [ballResponse, setResponse] = useState("Posez une question");
    const [buttonMode, setButtonMode] = useState("Questionner")
    const [first, setFirst] = useState(true);

    const possibleResponses = [
      "Essaye plus tard",
      "Essaye encore",
      "Pas d'avis",
      "C'est ton destin",
      "Le sort en est jeté",
      "Une chance sur deux",
      "Repose ta question",
      "D'après moi oui",
      "C'est certain",
      "Oui absolument ",
      "Compte là-dessus",
      "Sans aucun doute",
      "Très probable",
      "C'est bien parti",
      "C'est non",
      "Peu probable",
      "Faut pas rêver",
      "N'y compte pas",
      "Impossible",
      "Improbable",
      "Je pense que non",
    ];

    const calcul = Math.floor(Math.random()*possibleResponses.length);
    const responseValue = possibleResponses[calcul];

    function rotate(){

         if (first ===true) {
            const rotate = document.querySelector(".triangleContener") ;
            rotate.classList.toggle("testContainer");
            setResponse("");
            setTimeout(prediction, 2000); 
            
        } else { 
            setResponse("Posez une question");
            setFirst(true);
            setButtonMode("Questionner");
            const rotate = document.querySelector(".triangleContener") ;
            rotate.classList.toggle("testContainer");
        };
    }

    
    function prediction(){
        setResponse(responseValue);
        setButtonMode("Recommencer");
        setFirst(false);
    }
    console.log(process.env.NODE_ENV);

  return (
    <div className="container">
     
        <div className="ballContainer">
          <img className="picture" src={ball} alt="8 ball" />
          <div className="triangleContener">
            <img className="picture" src={triangle} alt="des de reponse" />
            <div className="response">
              <p>{ballResponse}</p>
            </div>
          </div>
     
        </div>
      <div>
        <button className="answerButton"  onClick={rotate}>{buttonMode}</button>
      </div>
     
    </div>



  );
}

export default Ball;
