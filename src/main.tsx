import React from 'react';
import { createRoot } from 'react-dom/client';
import { createContext, useState } from 'react';

import App from './App';

const container = document.getElementById('root');
const root = createRoot(container!);

interface IUserInfo {
  nome: string | null,
  imagem: string | null
}

interface IUserContext {
  userInfo: IUserInfo,
  setUserInfo: React.Dispatch<React.SetStateAction<IUserInfo>>
}

export const UserContext = createContext<IUserContext | null>(null);

const Main = () => {
  const [userInfo, setUserInfo] = useState<IUserInfo>({nome: null, imagem: null});

  return (
    <React.StrictMode>
      <UserContext.Provider value={{userInfo, setUserInfo}}>
        <App />
      </UserContext.Provider>
    </React.StrictMode>
  )
}

root.render(<Main />);