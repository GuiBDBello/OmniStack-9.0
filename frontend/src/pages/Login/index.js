import React, { useState } from 'react';
import api from '../../services/api';

export default function Login({ history }) {
    
    // Estado: qualquer informação armazenada dentro de um componente
    const [email, setEmail] = useState(''); // define que o valor de email é atualizado a cada alteração
    
    async function handleSubmit(event) {
        event.preventDefault();

        // Realiza uma requisição com a biblioteca 'axios'
        const response = await api.post('/sessions', { email });

        const { _id } = response.data;

        // Armazena localmente
        localStorage.setItem('user', _id);

        history.push('/dashboard');
    }
    
    return (
        <>
            <p>
                Ofereça <strong>spots</strong> para programadores e encontre <strong>talentos</strong> para sua empresa
            </p>
            
            <form onSubmit={handleSubmit}>
            <label htmlFor="email">E-MAIL *</label>
            <input
                type="email"
                id="email"
                placeholder="Seu melhor e-mail"
                value={email}
                onChange={event => setEmail(event.target.value)}
                />

                <button className="btn" type="submit">Entrar</button>
            </form>
        </>
    );
}