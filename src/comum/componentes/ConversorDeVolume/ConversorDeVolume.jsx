import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ConversorDeVolume = () => {
    const navigate = useNavigate();
    const [valor, setValor] = useState('');
    const [de, setDe] = useState('litros');
    const [para, setPara] = useState('mililitros');
    const [resultado, setResultado] = useState(null);

    const converterVolume = () => {
        let convertido = 0;
        if (de === 'litros' && para === 'mililitros') {
            convertido = valor * 1000;
        } else if (de === 'mililitros' && para === 'litros') {
            convertido = valor / 1000;
        } else if (de === 'litros' && para === 'galoes') {
            convertido = valor * 0.264172;
        } else if (de === 'galoes' && para === 'litros') {
            convertido = valor / 0.264172;
        } else if (de === 'litros' && para === 'metrosCubicos') {
            convertido = valor / 1000;
        } else if (de === 'metrosCubicos' && para === 'litros') {
            convertido = valor * 1000;
        }
        setResultado(convertido);
    };

    return (
        <div>
            <h2>Conversor de Volume</h2>
            <input type="number" value={valor} onChange={(e) => setValor(e.target.value)} placeholder="Digite o valor" />
            <select onChange={(e) => setDe(e.target.value)} value={de}>
                <option value="litros">Litros</option>
                <option value="mililitros">Mililitros</option>
                <option value="galoes">Galões</option>
                <option value="metrosCubicos">Metros Cúbicos</option>
            </select>
            para
            <select onChange={(e) => setPara(e.target.value)} value={para}>
                <option value="litros">Litros</option>
                <option value="mililitros">Mililitros</option>
                <option value="galoes">Galões</option>
                <option value="metrosCubicos">Metros Cúbicos</option>
            </select>
            <button onClick={converterVolume}>Converter</button>
            {resultado !== null && <p>Resultado: {resultado}</p>}
            <button id='back' onClick={() => { navigate("/") }}>Voltar</button>

        </div>
    );
};

export default ConversorDeVolume;
