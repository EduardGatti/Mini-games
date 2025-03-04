import React, { useState } from 'react';
import "./CalculadoraJuroSimples.css"
import { useNavigate } from 'react-router-dom';
const CalculadoraJuroSimples = () => {
    const navigate = useNavigate();
    const [capitalInicial, setCapitalInicial] = useState('');
    const [taxaJuros, setTaxaJuros] = useState('');
    const [tempo, setTempo] = useState('');
    const [montante, setMontante] = useState(null);

    const calcularMontante = () => {
        const capital = parseFloat(capitalInicial);
        const taxa = parseFloat(taxaJuros) / 100;
        const t = parseFloat(tempo);
        const resultado = capital + (capital * taxa * t);
        setMontante(resultado);
    };

    return (
        <div>
            <h1>Calculadora de Juros Simples</h1>
            <div>
                <label>
                    Capital Inicial:
                    <input
                        type="number"
                        value={capitalInicial}
                        onChange={(e) => setCapitalInicial(e.target.value)}
                    />
                </label>
            </div>
            <div>
                <label>
                    Taxa de Juros (% ao ano):
                    <input
                        type="number"
                        value={taxaJuros}
                        onChange={(e) => setTaxaJuros(e.target.value)}
                    />
                </label>
            </div>
            <div>
                <label>
                    Tempo (anos):
                    <input
                        type="number"
                        value={tempo}
                        onChange={(e) => setTempo(e.target.value)}
                    />
                </label>
            </div>
            <button onClick={calcularMontante}>Calcular Montante</button>
            {montante !== null && (
                <div>
                    <h2>Montante Final: R$ {montante.toFixed(2)}</h2>
                </div>
            )}
            <button className="back" onClick={() => { navigate("/") }}>voltar</button> 
    </div >  
  );  
};

export default CalculadoraJuroSimples;  