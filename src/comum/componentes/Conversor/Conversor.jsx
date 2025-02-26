import React, { useState } from 'react';  
import './Conversor.css';   
import { useNavigate } from 'react-router-dom';

function Conversor() {  
    const navigate = useNavigate();
    const [valorEntrada, setValorEntrada] = useState("");  
    const [unidadeEntrada, setUnidadeEntrada] = useState("Celsius");  
    const [unidadeSaida, setUnidadeSaida] = useState("Fahrenheit");  
    const [valorSaida, setValorSaida] = useState("");  

    const tratarMudancaEntrada = (e) => {  
        const valor = e.target.value;  
        const regex = /^\d*(\.\d{0,2})?$/;  

        if (regex.test(valor)) {  
            setValorEntrada(valor);  
        }  
    };  

    const converterTemperatura = () => {  
        let valorCelsius;  

        if (unidadeEntrada === "Celsius") {  
            valorCelsius = parseFloat(valorEntrada);  
        } else if (unidadeEntrada === "Fahrenheit") {  
            valorCelsius = (parseFloat(valorEntrada) - 32) * 5 / 9;  
        } else if (unidadeEntrada === "Kelvin") {  
            valorCelsius = parseFloat(valorEntrada) - 273.15;  
        }  

        let resultado;  
        if (unidadeSaida === "Celsius") {  
            resultado = valorCelsius;  
        } else if (unidadeSaida === "Fahrenheit") {  
            resultado = (valorCelsius * 9 / 5) + 32;  
        } else if (unidadeSaida === "Kelvin") {  
            resultado = valorCelsius + 273.15;  
        }  

        setValorSaida(resultado.toFixed(2));  
    };  

    const tratarConversao = () => {  
        if (valorEntrada) {  
            converterTemperatura();  
        } else {  
            setValorSaida("");  
        }  
    };  

    return (  
        <div className="componente-conversor">  
            <h1>Conversor de Temperatura:</h1>  
            <input 
                id='conversor' 
                type="text"  
                value={valorEntrada}  
                onChange={tratarMudancaEntrada}  
                placeholder="Digite a temperatura"  
            />  
            <select id='conversor' value={unidadeEntrada} onChange={(e) => setUnidadeEntrada(e.target.value)}>  
                <option value="Celsius">Celsius</option>  
                <option value="Fahrenheit">Fahrenheit</option>  
                <option value="Kelvin">Kelvin</option>  
            </select>  
            <h2>Converter Para:</h2>  
            <select id='conversor' value={unidadeSaida} onChange={(e) => setUnidadeSaida(e.target.value)}>  
                <option value="Celsius">Celsius</option>  
                <option value="Fahrenheit">Fahrenheit</option>  
                <option value="Kelvin">Kelvin</option>  
            </select>  
            <button id='conversor' onClick={tratarConversao}>Converter</button>  
            {valorSaida && (  
                <p>  
                    Temperatura convertida: {valorSaida}° {unidadeSaida}  
                </p>  
            )}  
            <button id='conversor' onClick={() => {navigate("/")}}>voltar</button>
        </div>  
    );  
}  

export default Conversor;