import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import Headers from './header';
import S from './Sidebar';
// import Footers from './Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <>
  <S name="rishabh jain" age="1234556"/>
  <S name="ayush jain" age="22222222222222222222222"/>
    </>
  </React.StrictMode>
);
