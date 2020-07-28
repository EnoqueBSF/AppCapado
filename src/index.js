import React from 'react';
import { StatusBar } from 'react-native';

// import AppProvider from './Contexts/AppContext';

import Routes from './routes';

function App() {
  return (
    <>
      {/* <AppProvider> */}
      <StatusBar barStyle="light-content" backgroundColor="#222" />
      <Routes />
      {/* </AppProvider> */}
    </>
  );
}

export default App;
