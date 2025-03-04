import React, { useState } from 'react';  
import './ConversorDeTempo.css';  
import { useNavigate } from 'react-router-dom';

const ConversorDeTempo = () => {  
    const navigate = useNavigate();
  const [horas, setHoras] = useState('');  
  const [minutos, setMinutos] = useState('');  
  const [segundos, setSegundos] = useState('');  

  const lidarMudancaHoras = (e) => {  
    const valor = e.target.value;  
    setHoras(valor);  
    setMinutos(valor ? valor * 60 : '');  
    setSegundos(valor ? valor * 3600 : '');  
  };  

  const lidarMudancaMinutos = (e) => {  
    const valor = e.target.value;  
    setMinutos(valor);  
    setHoras(valor ? valor / 60 : '');  
    setSegundos(valor ? valor * 60 : '');  
  };  

  const lidarMudancaSegundos = (e) => {  
    const valor = e.target.value;  
    setSegundos(valor);  
    setHoras(valor ? valor / 3600 : '');  
    setMinutos(valor ? valor / 60 : '');  
  };  

  return (  
    <div className="conversor">  
      <input type="number" value={horas} onChange={lidarMudancaHoras} placeholder="Horas" />  
      <input type="number" value={minutos} onChange={lidarMudancaMinutos} placeholder="Minutos" />  
      <input type="number" value={segundos} onChange={lidarMudancaSegundos} placeholder="Segundos" /> 
      <button id='back' onClick={() => {navigate("/")}}>Voltar</button> 
    </div>  
  );  
};  

export default ConversorDeTempo;  