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
        <button id="body" onClick={() => navigate("/palavras")}>Contador de Palavras</button>
        <button id="body" onClick={() => navigate("/gerador")}>Gerador de Senhas </button>
        <button id="body" onClick={() => navigate("/conversortempo")}>Conversor de Tempo</button>
        <button id="body" onClick={() => navigate("/jurosimples")}>Juros simples</button>
        <button id="body" onClick={() => navigate("/conversorpeso")}>Conversor de Peso</button>
        <button id="body" onClick={() => navigate("/contadorcaracter")}>Contador de Caracter</button>
        <button id="body" onClick={() => navigate("/calculadoragorjeta")}>Calculadora de Gorjeta</button>
        <button id="body" onClick={() => navigate("/conversorvelocidade")}>Conversor de Velocidae</button>
        <button id="body" onClick={() => navigate("/listatarefas")}>Lista de Tarefas</button>
        <button id="body" onClick={() => navigate("/calculadoraArea")}>Calculadora de Area</button>
        <button id="body" onClick={() => navigate("/conversorvolume")}>Conversor de Volume</button>
        <button id="body" onClick={() => navigate("/relogiovirtual")}>Relogio Virtual</button>
        <button id="body" onClick={() => navigate("/calculadoracalorias")}>Calculadora de Calorias</button>
        <button id="body" onClick={() => navigate("/jogodavelha")}>Jogo da Velha</button>
    </div>
  )
}

export default Body