import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ConversorVelocidade = () => {
    const navigate = useNavigate();
    const [valor, setValor] = useState('');
    const [unidadeEntrada, setUnidadeEntrada] = useState('km/h');
    const [unidadeSaida, setUnidadeSaida] = useState('m/s');
    const [resultado, setResultado] = useState(null);

    const converterVelocidade = () => {
        const valorNumerico = parseFloat(valor);
        if (isNaN(valorNumerico)) {
            setResultado(null);
            return;
        }

        let valorConvertido;
        const kmhToMps = valorNumerico / 3.6;
        const kmhToMph = valorNumerico / 1.60934;
        const mpsToKmh = valorNumerico * 3.6;
        const mpsToMph = valorNumerico * 2.23694;
        const mphToKmh = valorNumerico * 1.60934;
        const mphToMps = valorNumerico / 2.23694;

        if (unidadeEntrada === 'km/h') {
            if (unidadeSaida === 'm/s') valorConvertido = kmhToMps;
            if (unidadeSaida === 'mph') valorConvertido = kmhToMph;
        }
        if (unidadeEntrada === 'm/s') {
            if (unidadeSaida === 'km/h') valorConvertido = mpsToKmh;
            if (unidadeSaida === 'mph') valorConvertido = mpsToMph;
        }
        if (unidadeEntrada === 'mph') {
            if (unidadeSaida === 'km/h') valorConvertido = mphToKmh;
            if (unidadeSaida === 'm/s') valorConvertido = mphToMps;
        }

        console.log("Resultado convertido:", valorConvertido);
        setResultado(valorConvertido);
    };

    const unidades = ['km/h', 'm/s', 'mph'];

    return (
        <div>
            <h1>Conversor de Velocidade</h1>
            <input
                type="number"
                value={valor}
                onChange={(e) => setValor(e.target.value)}
            />
            <select onChange={(e) => setUnidadeEntrada(e.target.value)} value={unidadeEntrada}>
                {unidades.map((unidade) => (
                    <option key={unidade} value={unidade}>
                        {unidade}
                    </option>
                ))}
            </select>
            <span> para </span>
            <select onChange={(e) => setUnidadeSaida(e.target.value)} value={unidadeSaida}>
                {unidades.filter((unidade) => unidade !== unidadeEntrada).map((unidade) => (
                    <option key={unidade} value={unidade}>
                        {unidade}
                    </option>
                ))}
            </select>
            <button onClick={converterVelocidade}>Converter</button>
            {resultado !== null && <h2>Resultado: {resultado.toFixed(2)}</h2>}
            <button className="back" onClick={() => {navigate("/")}}>Voltar</button>

        </div>
    );
};

export default ConversorVelocidade;
