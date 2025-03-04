import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const CalculadoraDeGorjeta = () => {
    const navigate = useNavigate();

    const [valorConta, setValorConta] = useState('');
    const [porcentagemGorjeta, setPorcentagemGorjeta] = useState(15);
    const [gorjeta, setGorjeta] = useState(0);
    const [contaTotal, setContaTotal] = useState(0);

    const calcularGorjeta = () => {
        const valor = parseFloat(valorConta);
        const gorjetaCalculada = (valor * porcentagemGorjeta) / 100;
        const total = valor + gorjetaCalculada;
        setGorjeta(gorjetaCalculada);
        setContaTotal(total);
    };

    return (
        <div>
            <h1>Calculadora de Gorjeta</h1>
            <input
                type="number"
                placeholder="Valor da Conta"
                value={valorConta}
                onChange={(e) => setValorConta(e.target.value)}
            />
            <input
                type="number"
                placeholder="Porcentagem de Gorjeta"
                value={porcentagemGorjeta}
                onChange={(e) => setPorcentagemGorjeta(e.target.value)}
            />
            <button onClick={calcularGorjeta}>Calcular</button>
            <h2>Gorjeta: R$ {gorjeta.toFixed(2)}</h2>
            <h2>Conta Total: R$ {contaTotal.toFixed(2)}</h2>
            <button id='back' onClick={() => { navigate("/") }}>Voltar</button>

        </div>
    );
};

export default CalculadoraDeGorjeta;  