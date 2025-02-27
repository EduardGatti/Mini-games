import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Cronometro.css"

function Cronometro() {
  const navigate = useNavigate();
  

  const [segundos, setSegundos] = useState(0);
  const [minutos, setMinutos] = useState(0);
  const [horas, setHoras] = useState(0);
  const [iniciar, setIniciar] = useState(false); 
  const [intervalId, setIntervalId] = useState(null);

  const cronometrar = () => {
    if (!iniciar) {
      const id = setInterval(() => {
        setSegundos((prevSegundos) => {
          if (prevSegundos === 59) {
            setMinutos((prevMinutos) => {
              if (prevMinutos === 59) {
                setHoras((prevHoras) => prevHoras + 1);
                return 0;
              }
              return prevMinutos + 1;
            });
            return 0;
          }
          return prevSegundos + 1;
        });
      }, 1000);
      setIntervalId(id); 
      setIniciar(true); 
    }
  };


  const pausar = () => {
    clearInterval(intervalId);
    setIniciar(false); 
  };

  
  const resetar = () => {
    clearInterval(intervalId);
    setSegundos(0);
    setMinutos(0);
    setHoras(0);
    setIniciar(false); 
  };


  const formatarTempo = (tempo) => {
    return tempo < 10 ? `0${tempo}` : tempo;
  };

  return (
    <div className="container-cronometro">
      <h1>Cronômetro</h1>
      <p>{formatarTempo(horas)}:{formatarTempo(minutos)}:{formatarTempo(segundos)}</p>
      <div>
        <button onClick={cronometrar} disabled={iniciar}>Iniciar</button>

        <button onClick={pausar} disabled={!iniciar}>Pausar</button>

        <button id='reset' onClick={resetar}>Resetar</button>

        <button id='back' onClick={() => {navigate("/")}}>Voltar</button>

      </div>
    </div>
  );
}

export default Cronometro;
