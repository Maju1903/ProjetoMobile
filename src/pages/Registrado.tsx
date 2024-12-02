import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom'; // Importa o useHistory para navegação
import { UserContext } from '../main';
import Bolo1 from '../pages/imgs/Bolo1.png';
import Bolo2 from '../pages/imgs/Bolo2.png';

const Registrado: React.FC = () => {
    const context = useContext(UserContext);
    const history = useHistory(); // Instância do useHistory para navegação

    if (!context) {
        return <h1>Erro!</h1>;
    }

    const { userInfo } = context;

    return (
        <div
            id="container"
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'center',
                width: '100vw',
                height: '100vh',
                backgroundColor: '#f8d7e2',
            }}
        >
            {/* Título */}
            <h2
                style={{
                    fontSize: '24px',
                    fontWeight: 'bold',
                    color: '#000',
                    marginBottom: '20px',
                }}
            >
                Lista de Sobremesas
            </h2>

            {/* Barra de busca */}
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    marginBottom: '20px',
                    width: '100%',
                    maxWidth: '400px',
                }}
            >
                <input
                    type="text"
                    placeholder="Pesquise"
                    style={{
                        flex: 1,
                        padding: '10px',
                        borderRadius: '5px',
                        border: '1px solid #ddd',
                        backgroundColor: '#fcd4d6',
                    }}
                />
                <button
                    style={{
                        backgroundColor: '#e75480',
                        color: '#fff',
                        padding: '10px',
                        borderRadius: '50%',
                        border: 'none',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '40px',
                        height: '40px',
                    }}
                >
                    ⚙️
                </button>
            </div>

            {/* Lista de produtos */}
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
                    gap: '16px',
                    width: '100%',
                    maxWidth: '600px',
                }}
            >
                {/* Produto 1 */}
                <div
                    style={{
                        backgroundColor: '#fff',
                        borderRadius: '8px',
                        padding: '12px',
                        textAlign: 'center',
                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                    }}
                >
                    <img
                        src={Bolo1}
                        alt="Bolo Floresta Negra"
                        style={{
                            width: '100%',
                            borderRadius: '4px',
                            marginBottom: '10px',
                        }}
                    />
                    <h3
                        style={{
                            fontSize: '16px',
                            color: '#333',
                            margin: '8px 0',
                        }}
                    >
                        Bolo Floresta Negra
                    </h3>
                    <p
                        style={{
                            fontSize: '14px',
                            color: '#666',
                            marginBottom: '10px',
                        }}
                    >
                        R$70,00
                    </p>
                    <button
                        style={{
                            backgroundColor: '#e75480',
                            color: '#fff',
                            padding: '5px 15px',
                            borderRadius: '5px',
                            border: 'none',
                            cursor: 'pointer',
                        }}
                    >
                        +
                    </button>
                </div>

                {/* Produto 2 */}
                <div
                    style={{
                        backgroundColor: '#fff',
                        borderRadius: '8px',
                        padding: '12px',
                        textAlign: 'center',
                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                    }}
                >
                    <img
                        src={Bolo2}
                        alt="Bolo Mousse de Chocolate"
                        style={{
                            width: '100%',
                            borderRadius: '4px',
                            marginBottom: '10px',
                        }}
                    />
                    <h3
                        style={{
                            fontSize: '16px',
                            color: '#333',
                            margin: '8px 0',
                        }}
                    >
                        Bolo Mousse de Chocolate
                    </h3>
                    <p
                        style={{
                            fontSize: '14px',
                            color: '#666',
                            marginBottom: '10px',
                        }}
                    >
                        R$80,00
                    </p>
                    <button
                        style={{
                            backgroundColor: '#e75480',
                            color: '#fff',
                            padding: '5px 15px',
                            borderRadius: '5px',
                            border: 'none',
                            cursor: 'pointer',
                        }}
                    >
                        +
                    </button>
                </div>
            </div>

            {/* Botão "Voltar" */}
            <button
                onClick={() => history.push('/Cadastro')}
                style={{
                    marginTop: '20px',
                    backgroundColor: '#e75480',
                    color: '#fff',
                    padding: '10px 20px',
                    borderRadius: '8px',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '16px',
                }}
            >
                Voltar
            </button>
        </div>
    );
};

export default Registrado;
