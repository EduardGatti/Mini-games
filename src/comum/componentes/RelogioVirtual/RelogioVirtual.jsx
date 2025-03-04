import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const RelogioVirtual = () => {
    const navigate = useNavigate();
  const [hora, setHora] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const intervalo = setInterval(() => {
      setHora(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <div>
      <h2>Relógio Digital</h2>
      <p>{hora}</p>
      <button id='back' onClick={() => { navigate("/") }}>Voltar</button>

    </div>
  );
};

export default RelogioVirtual;
