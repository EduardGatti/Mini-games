import React, { useState } from 'react';
import "./ConversorDistancia.css";
import { useNavigate } from 'react-router-dom';

function ConversorDistancia() {
    const navigate = useNavigate();
    const [value, setValue] = useState('');
    const [fromUnit, setFromUnit] = useState('meters');
    const [convertedValues, setConvertedValues] = useState({});

    const units = {
        meters: 1,
        kilometers: 1000,
        miles: 1609.34,
        feet: 0.3048,
    };

    const convertDistance = () => {
        if (!value) {
            setConvertedValues({});
            return;
        }

        const baseValue = value * units[fromUnit];  

        setConvertedValues({
            meters: (baseValue / units.meters).toFixed(2),
            kilometers: (baseValue / units.kilometers).toFixed(2),
            miles: (baseValue / units.miles).toFixed(2),
            feet: (baseValue / units.feet).toFixed(2),
        });
    };

    const handleChange = (e) => {
        setValue(e.target.value);
        convertDistance();
    };

    const handleUnitChange = (e) => {
        setFromUnit(e.target.value);
        convertDistance();
    };

    return (
        <div className="container-distancia">
            <h2>Conversor de Distâncias</h2>
            <input
                id="distancia"
                type="number"
                value={value}
                onChange={handleChange}
                placeholder="Valor a converter"
            />
            <select id="distancia" value={fromUnit} onChange={handleUnitChange}>
                <option id="distancia" value="meters">Metros</option>
                <option id="distancia" value="kilometers">Quilômetros</option>
                <option id="distancia" value="miles">Milhas</option>
                <option id="distancia" value="feet">Pés</option>
            </select>

            <h3>Resultados:</h3>

            {value && (
                <>
                    {fromUnit !== 'meters' && <p>{convertedValues.meters} Metros</p>}
                    {fromUnit !== 'kilometers' && <p>{convertedValues.kilometers} Quilômetros</p>}
                    {fromUnit !== 'miles' && <p>{convertedValues.miles} Milhas</p>}
                    {fromUnit !== 'feet' && <p>{convertedValues.feet} Pés</p>}
                </>
            )}

            <button id="distancia" onClick={() => { navigate("/") }}>Voltar</button>
        </div>
    );
}

export default ConversorDistancia;
