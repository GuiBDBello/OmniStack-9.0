// useState: utilizado para a criação de Estados na aplicação
import React, { useState } from 'react';
import api from './services/api';
import './App.css';

import logo from './assets/logo.svg';

// Componente: é uma função que retorna um HTML
function App() {
  // Estado: qualquer informação armazenada dentro de um componente
  const [email, setEmail] = useState(''); // define que o valor de email é atualizado a cada alteração

  async function handleSubmit(event) {
    event.preventDefault();

    // Realiza uma requisição com a biblioteca 'axios'
    const response = await api.post('/sessions', { email });

    console.log(response);
  }

  return (
    <div className="container">
      <img src={logo} alt="AirCnC" />

      <div className="content">
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
            onChange={event => setEmail(event.target.value)} />

            <button className="btn" type="submit">Entrar</button>
        </form>
      </div>
    </div>
  );
}

export default App;
