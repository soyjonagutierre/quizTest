import React from 'react';
import { Route, Routes  } from 'react-router-dom';
import GameStart from './views/GameStart';
import Inicio from './views/Inicio';
import './App.css';
import Score from './views/Score';

const App: React.FC = () => {
  return (
    <div className='Fondo'>
      <Routes >
        <Route path="/" element={<Inicio />} />
        <Route path="/start" element={<GameStart />} />
        <Route path="/score" element={<Score />} />
      </Routes >
    </div>
  );
}

export default App;
