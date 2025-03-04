import React, { useState } from 'react';  
import "./GeradorDeSenhas.css"
import { useNavigate } from 'react-router-dom';
const GeradorDeSenhas = () => {  
  const navigate = useNavigate();
  const [comprimento, setComprimento] = useState(12);  
  const [maiusculas, setMaiusculas] = useState(false);  
  const [numeros, setNumeros] = useState(false);  
  const [especiais, setEspeciais] = useState(false);  
  const [senhaGerada, setSenhaGerada] = useState('');  

  const gerarSenha = () => {  
    const letrasMinusculas = 'abcdefghijklmnopqrstuvwxyz';  
    const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';  
    const numerosString = '0123456789';  
    const caracteresEspeciais = '!@#$%^&*()_+[]{}|;:,.<>?';  

    let conjuntoDeCaracteres = letrasMinusculas;  

    if (maiusculas) {  
      conjuntoDeCaracteres += letrasMaiusculas;  
    }  
    if (numeros) {  
      conjuntoDeCaracteres += numerosString;  
    }  
    if (especiais) {  
      conjuntoDeCaracteres += caracteresEspeciais;  
    }  

    let senha = '';  
    for (let i = 0; i < comprimento; i++) {  
      const indiceAleatorio = Math.floor(Math.random() * conjuntoDeCaracteres.length);  
      senha += conjuntoDeCaracteres[indiceAleatorio];  
    }  

    setSenhaGerada(senha);  
  };  

  return (  
    <div>  
      <h1>Gerador de Senhas</h1>  
      <div>  
        <label>  
          Comprimento da senha:  
          <input  
            type="number"  
            value={comprimento}  
            onChange={(e) => setComprimento(e.target.value)}  
            min="1"  
          />  
        </label>  
      </div>  
      <div>  
        <label>  
          Incluir letras maiúsculas  
          <input  
            type="checkbox"  
            checked={maiusculas}  
            onChange={() => setMaiusculas(prev => !prev)}  
          />  
        </label>  
      </div>  
      <div>  
        <label>  
          Incluir números  
          <input  
            type="checkbox"  
            checked={numeros}  
            onChange={() => setNumeros(prev => !prev)}  
          />  
        </label>  
      </div>  
      <div>  
        <label>  
          Incluir caracteres especiais  
          <input  
            type="checkbox"  
            checked={especiais}  
            onChange={() => setEspeciais(prev => !prev)}  
          />  
        </label>  
      </div>  
      <button onClick={gerarSenha}>Gerar Senha</button>  
      {senhaGerada && (  
        <div>  
          <h2>Senha Gerada:</h2>  
          <p>{senhaGerada}</p>  
        </div>  
      )}  
      <button id='back' onClick={() => {navigate("/")}}>voltar</button>
    </div>  
  );  
};  

export default GeradorDeSenhas;  