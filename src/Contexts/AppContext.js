import React, { createContext, useState, useContext, useEffect } from 'react';
// import { connect, onPulish } from '../services/autobahn';
import { connect } from '../services/SocketIOClient';

export const AppContext = createContext();

export default function AppProvider({ children }) {
  const [hubConnect, setHubConnect] = useState();

  const sep = String.fromCharCode(30);

  const subscribe = (channel) => {
    hubConnect.subscribe(channel, (uri, payload) => {
      const mensagem = payload.split(sep);
      console.log(mensagem);
    });
  };

  // const publish = (channel, body) => {
  //   onPulish(hubConnect, channel, body);
  // };

  useEffect(() => {
    async function connectHub() {
      const ihubConnect = await connect();
      console.log('conectar no socket');
      console.log(ihubConnect);
      setHubConnect(ihubConnect);
    }
    connectHub();
  }, []);

  useEffect(() => {
    console.log('Initializing AppContext');
  }, []);

  return (
    <AppContext.Provider
      value={{
        hubConnect,
        subscribe,
        // publish,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  return context;
}
