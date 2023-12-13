// function double(number) {
//   return number * 2;
// }

// const me = {
//   name: "james",
//   age: 45,
// };

// console.log("me", me);

// document.addEventListener('DOMContentLoaded', () => {
//   document.getElementById("root").textContent = `Age: ${double(me.age)}`;
// })

import React from 'react';
import { createRoot } from 'react-dom/client';
import Hello from './components/Hello';

import "./styles/index.css";
import chessImg from './assets/chess.jpg'

function App() {
  return (
    <div>
      <img src={chessImg} alt="chess" width="500" />
      <Hello />
    </div>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(<App />);
