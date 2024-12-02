import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../main';

import './Home.css';

const Cadastro: React.FC = () => {
    const context = useContext(UserContext);
    const history = useHistory();

    if (!context) {
        return <h1>Erro!</h1>;
    }

    const { userInfo, setUserInfo } = context;

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Evita o reload da página
        history.push("/Registrado"); // Redireciona para a página "registrado"
    };

    return (
        <div
            id="container"
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100vw',
                height: '100vh',
                backgroundColor: '#ffc1b6',
            }}
        >
            <h2
                style={{
                    fontSize: '24px',
                    fontWeight: 'bold',
                    color: '#000',
                    marginBottom: '20px',
                }}
            >
                Registre o doce
            </h2>

            {/* Formulário */}
            <form
                onSubmit={handleSubmit}
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: '100%',
                    maxWidth: '400px',
                }}
            >
                {/* Nome do Produto */}
                <label style={{ width: '100%', marginBottom: '10px' }}>
                    <input
                        type="text"
                        placeholder="Nome Produto"
                        style={{
                            width: '100%',
                            padding: '10px',
                            borderRadius: '5px',
                            border: '1px solid #ddd',
                            backgroundColor: '#fcd4d6',
                            marginBottom: '15px',
                        }}
                    />
                </label>

                {/* Ingredientes */}
                <label style={{ width: '100%', marginBottom: '10px' }}>
                    <input
                        type="text"
                        placeholder="Ingredientes"
                        style={{
                            width: '100%',
                            padding: '10px',
                            borderRadius: '5px',
                            border: '1px solid #ddd',
                            backgroundColor: '#fcd4d6',
                            marginBottom: '15px',
                        }}
                    />
                </label>

                {/* Valor */}
                <label style={{ width: '100%', marginBottom: '10px' }}>
                    <input
                        type="text"
                        placeholder="Valor"
                        style={{
                            width: '100%',
                            padding: '10px',
                            borderRadius: '5px',
                            border: '1px solid #ddd',
                            backgroundColor: '#fcd4d6',
                            marginBottom: '15px',
                        }}
                    />
                </label>

                {/* Quantidade em Estoque */}
                <label style={{ width: '100%', marginBottom: '10px' }}>
                    <input
                        type="text"
                        placeholder="Qtd. em estoque"
                        style={{
                            width: '100%',
                            padding: '10px',
                            borderRadius: '5px',
                            border: '1px solid #ddd',
                            backgroundColor: '#fcd4d6',
                            marginBottom: '15px',
                        }}
                    />
                </label>

                {/* Incluir Imagem */}
                <label style={{ width: '100%', marginBottom: '10px' }}>
                    <textarea
                        placeholder="Inclua uma imagem"
                        style={{
                            width: '100%',
                            padding: '10px',
                            borderRadius: '5px',
                            border: '1px solid #ddd',
                            backgroundColor: '#fcd4d6',
                            resize: 'none',
                            height: '80px',
                            marginBottom: '20px',
                        }}
                    ></textarea>
                </label>

                {/* Botões */}
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        width: '100%',
                    }}
                >
                    <button
                        type="button"
                        onClick={() => history.push("/")} // Redireciona para a home ao cancelar
                        style={{
                            backgroundColor: '#e75480',
                            color: '#fff',
                            padding: '10px 20px',
                            borderRadius: '5px',
                            border: 'none',
                            cursor: 'pointer',
                            width: '48%',
                        }}
                    >
                        Cancelar
                    </button>
                    <button
                        type="submit"
                        style={{
                            backgroundColor: '#e75480',
                            color: '#fff',
                            padding: '10px 20px',
                            borderRadius: '5px',
                            border: 'none',
                            cursor: 'pointer',
                            width: '48%',
                        }}
                    >
                        Registrar
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Cadastro;
