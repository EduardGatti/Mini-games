import React, { useState } from 'react';  
import "./IMC.css";  
import { useNavigate } from 'react-router-dom';  

function IMC() {  
    const navigate = useNavigate();  
    const [peso, setPeso] = useState('');  
    const [altura, setAltura] = useState('');  
    const [total, setTotal] = useState(null);  
    const [situacao, setSituacao] = useState('');  

    const calcularIMC = () => {  
        if (peso && altura) {  
            const resultado = peso / (altura ** 2);  
            setTotal(resultado.toFixed(2));  
            
            if (resultado < 19.1) {  
                setSituacao('Abaixo do Peso');  
            } else if (resultado >= 19.1 && resultado < 25.8) {  
                setSituacao('Peso Normal');  
            } else if (resultado >= 25.9 && resultado < 27.3) {  
                setSituacao('Pouco Acima do Peso');  
            } else if (resultado >= 27.4 && resultado < 32.3) {  
                setSituacao('Acima do Peso');  
            } else {  
                setSituacao('Obesidade');  
            }  

        } else {  
            setTotal(null);  
            setSituacao('');  
        }  
    };  

    return (  
        <div className="container-imc">  
            <h1>Calculadora IMC</h1>  
            <input   
            id='imc'
                type="number"   
                value={peso}   
                placeholder='Digite seu peso (em kg):'   
                onChange={(e) => setPeso(e.target.value)}   
            />  
            <input   
            id='imc'
                type="number"   
                value={altura}   
                placeholder='Digite sua altura (em metros):'   
                onChange={(e) => setAltura(e.target.value)}   
            />  
            <button onClick={calcularIMC}>Calcular IMC</button>  
            {total !== null && <p>Seu IMC é: {total}</p>}  
            {situacao && <p>Situação: {situacao}</p>}  
            <button onClick={() => { navigate("/") }}>Voltar</button>  
        </div>  
    );  
}  

export default IMC;  