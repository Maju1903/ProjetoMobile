import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../main';

import './ExploreContainer.css';

interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {
    const context = useContext(UserContext);
    const history = useHistory();

    if (!context) {
        return <>Ocorreu um erro!</>;
    }

    const { userInfo, setUserInfo } = context;

    const changeName = (newName: string) => {
        setUserInfo({ ...userInfo, nome: newName });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        history.push("/Cadastro");
    };

    return (
        <div id="container" style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100vw', // Largura total da janela
            height: '100vh', // Altura total da janela
            backgroundColor: '#ffc1b6', // Fundo rosa
        }}>
            <strong style={{
                fontSize: '24px',
                color: '#a83256',
                marginBottom: '20px',
                display: 'block'
            }}>
                Login
            </strong>
            <form onSubmit={handleSubmit}>
                <label htmlFor="nome" style={{
                    fontSize: '14px',
                    color: '#ffffff',
                    display: 'block',
                    marginBottom: '8px'
                }}>
                    Usuário:
                </label>
                <input
                    type="text"
                    name="Usuário"
                    id="Usuário"
                    onChange={(e) => changeName(e.target.value)}
                    style={{
                        width: '90%',
                        padding: '10px',
                        marginBottom: '20px',
                        borderRadius: '8px',
                        border: 'none',
                        backgroundColor: '#fcd4d6',
                        color: '#a83256',
                        fontSize: '14px'
                    }}
                />
                <br />

{/* Campo Senha */}
<label htmlFor="senha" style={{
            fontSize: '14px',
            color: '#ffffff',
            display: 'block',
            marginBottom: '8px'
        }}>
            Senha:
        </label>
        <input
            type="password"
            name="senha"
            id="senha"
            style={{
                width: '90%',
                padding: '10px',
                marginBottom: '20px',
                borderRadius: '8px',
                border: 'none',
                backgroundColor: '#fcd4d6',
                color: '#a83256',
                fontSize: '14px'
            }}
        />
                
                <input
                    type="submit"
                    value="Cadastrar"
                    style={{
                        backgroundColor: '#e75480',
                        color: '#ffffff',
                        border: 'none',
                        padding: '10px 20px',
                        borderRadius: '8px',
                        fontSize: '16px',
                        cursor: 'pointer'
                    }}
                />
            </form>
        </div>
        
    );
};

export default ExploreContainer;
