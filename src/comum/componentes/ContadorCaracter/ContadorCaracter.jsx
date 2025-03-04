import React, { useState } from 'react';
import "./Contadorcaracter.css"
import { useNavigate } from 'react-router-dom';

const ContadorCaracteres = () => {
    const navigate = useNavigate();
    const [texto, setTexto] = useState('');

    const contagem = (e) => {
        setTexto(e.target.value);
    };

    return (
        <div className='container-caracter'>
            <textarea value={texto} onChange={contagem} maxLength="200" placeholder="Digite aqui..." />
            <p>{texto.length} / 200</p>
            <button id='back' onClick={() => { navigate("/") }}>Voltar</button>

        </div>
    );
};

export default ContadorCaracteres;