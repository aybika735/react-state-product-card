import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
const products = [
  {
    id: 1,
    name: "Nike Sneaker",
    price: 120,
    left: 31,
    image:
      "https://basket-02.wb.ru/vol236/part23696/23696486/images/big/2.jpg",
  },
];
root.render(
  <React.StrictMode>
    <App products = {products}/>
  </React.StrictMode>
);



