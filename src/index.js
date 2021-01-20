import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyles from './styles/GlobalStyles';
import Layout from './components/Layout';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
        <Layout> 
          <App />
        </Layout>
  </React.StrictMode>,
  document.getElementById('root')
);


