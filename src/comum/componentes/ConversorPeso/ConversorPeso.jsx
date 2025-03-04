import React, { useState } from 'react';
import "./ConversorPeso.css"
import { useNavigate } from 'react-router-dom';
const unidadesPeso = {
    gramas: 1,
    quilogramas: 0.001,
    libras: 0.00220462,
    onças: 0.035274,
};

const ConversorPeso = () => {
    const navigate = useNavigate();
    const [peso, setPeso] = useState('');
    const [unidadeDe, setUnidadeDe] = useState('gramas');
    const [unidadePara, setUnidadePara] = useState('quilogramas');
    const [pesoConvertido, setPesoConvertido] = useState('');

    const converterPeso = () => {
        const pesoEmGramas = peso / unidadesPeso[unidadeDe];
        const resultado = pesoEmGramas * unidadesPeso[unidadePara];
        setPesoConvertido(resultado);
    };

    const tratarPesoMudanca = (e) => {
        setPeso(e.target.value);
    };

    const tratarUnidadeDeMudanca = (e) => {
        setUnidadeDe(e.target.value);
    };

    const tratarUnidadeParaMudanca = (e) => {
        setUnidadePara(e.target.value);
    };

    return (
        <div>
            <h1>Conversor de Peso</h1>
            <input type="number" value={peso} onChange={tratarPesoMudanca} />
            <select value={unidadeDe} onChange={tratarUnidadeDeMudanca}>
                {Object.keys(unidadesPeso).map((unidade) => (
                    <option key={unidade} value={unidade}>
                        {unidade}
                    </option>
                ))}
            </select>
            <span> para </span>
            <select value={unidadePara} onChange={tratarUnidadeParaMudanca}>
                {Object.keys(unidadesPeso).map((unidade) => (
                    <option key={unidade} value={unidade}>
                        {unidade}
                    </option>
                ))}
            </select>
            <button onClick={converterPeso}>Converter</button>
            {pesoConvertido && (
                <div>
                    <h2>Peso Convertido: {pesoConvertido} {unidadePara}</h2>
                </div>
            )}
            <button className="back" onClick={() => { navigate("/") }}>voltar</button>
        </div>
    );
};

export default ConversorPeso;  