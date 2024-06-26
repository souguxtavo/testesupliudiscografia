import React, { useState } from 'react';

const CadastroAlbuns = () => {
  const [nome, setNome] = useState('');
  const [ano, setAno] = useState('');
  const [cadastroSucesso, setCadastroSucesso] = useState(false); // Estado para controlar a exibição da mensagem de sucesso

  async function enviarDados() {
    try {
      const data = { nome: nome, ano: ano };
      const response = await fetch('http://localhost:8000/api/album', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          console.log(response);
          return response.json();
        })
        .then((data) => {
          console.log(data);
          // Verifica se o cadastro foi bem-sucedido
          if (data.success) {
            setCadastroSucesso(true);
          }
        })
        .catch((error) => console.error('Erro:', error));
    } catch (error) {
      console.error('Error', error);
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    enviarDados();
  };

  return (
    <div>
      <h2>Cadastrar Álbuns</h2>
      {cadastroSucesso ? (
        <p style={{ color: 'green' }}>Cadastro realizado com sucesso!</p>
      ) : null}
      <form onSubmit={handleSubmit}>
        <label>
          Nome:
          <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
        </label>
        <label>
          Ano:
          <input type="number" value={ano} onChange={(e) => setAno(e.target.value)} />
        </label>
        <button type="submit">Cadastrar</button>
      </form>
      <button onClick={() => window.location.href = 'http://localhost:3000/pages/consultaalbums'}>
        Voltar para Álbuns
      </button>
    </div>
  );
};

export default CadastroAlbuns;
