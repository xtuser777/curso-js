import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
// import { ToastContainer } from 'react-toastify';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from './store';
import history from './services/history';
import Header from './components/Header';
import Routes from './routes/index';
import GlobalStyle from './styles/GlobalStyles';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter history={history}>
          <Header />
          <Routes />
          <GlobalStyle />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
