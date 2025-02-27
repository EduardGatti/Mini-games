import React from 'react'
import "./Body.css"
import { useNavigate } from 'react-router-dom'
function Body() {
    const navigate = useNavigate();
    function mensagem(){
        alert("Celulares e jogos são proibidos no laboratório. Cada vez que alguém fizer isso a equipe perde um ponto na sprint corrente da SA.")
      }

  return (
    <div className="componente-body">
        <button id="body" onClick={mensagem}>Aviso</button>
        <button id="body" onClick={() => navigate("/conversor")}>Conversor Temperatura</button>
        <button id="body" onClick={() => navigate("/moeda")}>Conversor Moeda</button>
        <button id="body" onClick={() => navigate("/distancia")}>Conversor Distancia</button>
        <button id="body" onClick={() => navigate("/imc")}>Calculadora IMC</button>
        <button id="body" onClick={() => navigate("/cronometro")}>Cronometro</button>
    </div>
  )
}

export default Body