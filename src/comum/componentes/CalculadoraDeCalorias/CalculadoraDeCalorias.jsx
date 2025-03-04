import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CalculadoraDeCalorias = () => {
    const [atividade, setAtividade] = useState('');
    const [tempo, setTempo] = useState('');
    const [calorias, setCalorias] = useState(null);
    const navigate = useNavigate();

    const atividades = {
        correr: 10,
        pedalar: 8,
        nadar: 7,
        caminhar: 3,
    };

    const calcularCalorias = () => {
        const caloriasQueimadas = atividades[atividade] * tempo;
        setCalorias(caloriasQueimadas);
    };

    return (
        <div>
            <h2>Calculadora de Calorias</h2>
            <label>
                Atividade:
                <select onChange={(e) => setAtividade(e.target.value)} value={atividade}>
                    <option value="correr">Correr</option>
                    <option value="pedalar">Pedalar</option>
                    <option value="nadar">Nadar</option>
                    <option value="caminhar">Caminhar</option>
                </select>
            </label>
            <label>
                Tempo (em horas):
                <input type="number" value={tempo} onChange={(e) => setTempo(e.target.value)} />
            </label>
            <button onClick={calcularCalorias}>Calcular Calorias</button>
            {calorias !== null && <p>Calorias queimadas: {calorias}</p>}
            <button id='back' onClick={() => { navigate("/") }}>Voltar</button>

        </div>
    );
};

export default CalculadoraDeCalorias;
