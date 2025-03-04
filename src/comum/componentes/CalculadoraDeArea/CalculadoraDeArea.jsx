import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CalculadoraDeArea = () => {
    const navigate = useNavigate();
    const [forma, setForma] = useState('quadrado');
    const [valor1, setValor1] = useState('');
    const [valor2, setValor2] = useState('');
    const [resultado, setResultado] = useState(null);

    const calcularArea = () => {
        let area = 0;
        switch (forma) {
            case 'quadrado':
                area = valor1 * valor1;
                break;
            case 'retangulo':
                area = valor1 * valor2;
                break;
            case 'circulo':
                area = Math.PI * (valor1 * valor1);
                break;
            case 'triangulo':
                area = (valor1 * valor2) / 2;
                break;
            default:
                break;
        }
        setResultado(area);
    };

    return (
        <div>
            <h2>Calculadora de Área</h2>
            <label>
                Escolha a forma:
                <select onChange={(e) => setForma(e.target.value)} value={forma}>
                    <option value="quadrado">Quadrado</option>
                    <option value="retangulo">Retângulo</option>
                    <option value="circulo">Círculo</option>
                    <option value="triangulo">Triângulo</option>
                </select>
            </label>
            <div>
                <label>
                    Valor 1:
                    <input type="number" value={valor1} onChange={(e) => setValor1(e.target.value)} />
                </label>
                {forma !== 'quadrado' && (
                    <label>
                        Valor 2:
                        <input type="number" value={valor2} onChange={(e) => setValor2(e.target.value)} />
                    </label>
                )}
            </div>
            <button onClick={calcularArea}>Calcular</button>
            {resultado !== null && <p>Resultado da área: {resultado}</p>}
            <button className="back" onClick={() => {navigate("/")}}>Voltar</button>
        </div>
    );
};

export default CalculadoraDeArea;
