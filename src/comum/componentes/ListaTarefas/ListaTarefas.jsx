import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ListaTarefas = () => {
    const navigate = useNavigate();
    const [tarefas, setTarefas] = useState([]);
    const [novaTarefa, setNovaTarefa] = useState('');

    const adicionarTarefa = () => {
        if (novaTarefa.trim() === '') return;
        setTarefas([...tarefas, { id: Date.now(), texto: novaTarefa, concluida: false }]);
        setNovaTarefa('');
    };

    const removerTarefa = (id) => {
        setTarefas(tarefas.filter(tarefa => tarefa.id !== id));
    };

    const marcarConcluida = (id) => {
        setTarefas(tarefas.map(tarefa =>
            tarefa.id === id ? { ...tarefa, concluida: !tarefa.concluida } : tarefa
        ));
    };

    return (
        <div style={{ maxWidth: '400px', margin: 'auto', textAlign: 'center' }}>
            <h2>Lista de Tarefas</h2>
            <input
                type="text"
                value={novaTarefa}
                onChange={(e) => setNovaTarefa(e.target.value)}
                placeholder="Digite uma tarefa"
            />
            <button onClick={adicionarTarefa}>Adicionar</button>
            <ul>
                {tarefas.map(tarefa => (
                    <li key={tarefa.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '8px 0', padding: '10px', borderRadius: '5px'}}>
                        <span style={{ textDecoration: tarefa.concluida ? 'line-through' : 'none' }}>{tarefa.texto}</span>
                        <div>
                            <button onClick={() => marcarConcluida(tarefa.id)}>{tarefa.concluida ? 'Desfazer' : 'Concluir'}</button>
                            <button onClick={() => removerTarefa(tarefa.id)} style={{ marginLeft: '5px', color: 'red' }}>Remover</button>
                        </div>
                    </li>
                ))}
            </ul>
            <button className="back" onClick={() => {navigate("/")}}>voltar</button>
        </div>
    );
};

export default ListaTarefas;
