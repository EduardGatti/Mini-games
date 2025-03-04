import React, { useState } from 'react';  
import "./ContadorDePalavras.css";  
import { useNavigate } from 'react-router-dom';  

const ContadorDePalavras = () => {  
  const [texto, setTexto] = useState('');  
  const navigate = useNavigate();

  const contarPalavras = (texto) => {  
    return texto.trim() ? texto.trim().split(/\s+/).length : 0;  
  };  

  return (  
    <div className='container'>  
      <textarea  
        value={texto}  
        onChange={(e) => setTexto(e.target.value)}  
        placeholder="Digite seu texto aqui"  
      />  
      <p>Número de palavras: {contarPalavras(texto)}</p>  
      <button id='back' onClick={() => navigate("/")}>Voltar</button>  
    </div>  
  );  
};  

export default ContadorDePalavras;  