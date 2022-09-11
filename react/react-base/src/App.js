import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
// import { ToastContainer } from 'react-toastify';
import store from './store';
import history from './services/history';
import Header from './components/Header';
import Routes from './routes/index';
import GlobalStyle from './styles/GlobalStyles';

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Header />
        <Routes />
        <GlobalStyle />
      </Router>
    </Provider>
  );
}

export default App;
