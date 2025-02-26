import React, { useState } from 'react';  
import "./ConversorMoeda.css";  
import { useNavigate } from 'react-router-dom';

function ConversorMoeda() {  
   const navigate = useNavigate();
  const taxasDeCambio = {  
    BRL: { USD: 0.19, EUR: 0.18 },  
    USD: { BRL: 5.27, EUR: 0.94 },  
    EUR: { BRL: 5.61, USD: 1.06 },  
  };  

  const [valor, setValor] = useState('');  
  const [moedaBR, setMoedaDe] = useState('BRL');  
  const [moedaUsd, setMoedaPara] = useState('USD');  
  const [valorConvertido, setValorConvertido] = useState(null);  

  const converterMoeda = () => {  
    const taxa = taxasDeCambio[moedaBR][moedaUsd];  
    const resultado = (valor * taxa).toFixed(2);  
    setValorConvertido(resultado);  
  };  

  return (  
    <div className="container-moeda">  
      <h1>Conversor de Moedas</h1>  
      <input 
        id="valor" 
        type="number"  
        value={valor}  
        onChange={(e) => setValor(e.target.value)}  
        placeholder="Valor"  
      />  
      <select id="moeda" value={moedaBR} onChange={(e) => setMoedaDe(e.target.value)}>  
        <option value="BRL">Real</option>  
        <option value="USD">Dolar</option>  
        <option value="EUR">Euro</option>  
      </select>  
      <select id="moeda" value={moedaUsd} onChange={(e) => setMoedaPara(e.target.value)}>  
        <option value="BRL">Real</option>  
        <option value="USD">Dolar</option>  
        <option value="EUR">Euro</option>  
      </select>  
      <button onClick={converterMoeda}>Converter</button>  
      
      {valorConvertido !== null && (  
        <h2>  
          {valor} {moedaBR} = {valorConvertido} {moedaUsd}  
        </h2>  
      )}  
      <button id='moeda' onClick={() => {navigate("/")}}>voltar</button>
    </div>  
  );  
}  

export default ConversorMoeda;