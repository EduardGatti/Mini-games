import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const JogoDaVelha = () => {
    const [tabuleiro, setTabuleiro] = useState(Array(9).fill(null));
    const [jogadorAtual, setJogadorAtual] = useState("X");
    const navigate = useNavigate();

    const calcularVencedor = (tabuleiro) => {
        const combinacoesVitoria = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];
        for (let [a, b, c] of combinacoesVitoria) {
            if (tabuleiro[a] && tabuleiro[a] === tabuleiro[b] && tabuleiro[a] === tabuleiro[c]) {
                return tabuleiro[a];
            }
        }
        return null;
    };

    const vencedor = calcularVencedor(tabuleiro);
    const empate = !tabuleiro.includes(null) && !vencedor;

    const aoClicar = (index) => {
        if (tabuleiro[index] || vencedor) return;
        const novoTabuleiro = [...tabuleiro];
        novoTabuleiro[index] = jogadorAtual;
        setTabuleiro(novoTabuleiro);
        setJogadorAtual(jogadorAtual === "X" ? "O" : "X");
    };

    const reiniciarJogo = () => {
        setTabuleiro(Array(9).fill(null));
        setJogadorAtual("X");
    };

    return (
        <div style={{ textAlign: "center", fontFamily: "Arial" }}>
            <h1>Jogo da Velha</h1>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 60px)", gap: "5px", margin: "20px auto", width: "180px" }}>
                {tabuleiro.map((valor, index) => (
                    <button
                        key={index}
                        style={{ width: "60px", height: "60px", fontSize: "24px" }}
                        onClick={() => aoClicar(index)}
                    >
                        {valor}
                    </button>
                ))}
            </div>
            {vencedor && <h2>Vencedor: {vencedor}</h2>}
            {empate && <h2>Empate!</h2>}
            <button onClick={reiniciarJogo}>Reiniciar Jogo</button>
            <button id='back' onClick={() => { navigate("/") }}>Voltar</button>

        </div>
    );
};

export default JogoDaVelha;
