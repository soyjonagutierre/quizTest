import React from 'react';
import Boton from '../components/Boton';
import Pregunta from '../components/Pregunta';
import { useNavigate, useLocation } from 'react-router-dom';


const Score: React.FC = () => {
    const pregunta= 'Gracias por contestar nuestro Quiz, esta es tu puntuacion:';
    const navigate = useNavigate();
    const location = useLocation();
    const score = location.state?.puntuacionFinal;

    const handleButtonClick = () => {
        navigate('/start');
    };
  return (
    <div>
        <div className='flex justify-center'>
            <img src="https://i.pinimg.com/originals/92/60/dd/9260dd459aa4566cfa25e86a3f10ea1b.png" alt="python" className='w-1/12'/>
        </div>
        <div className='flex justify-center'>
            <div className="flex flex-wrap justify-center items-center bg-[#1D1A39] p-2 rounded-lg  w-1/2 rotating-light-effect relative">
                <Pregunta texto={pregunta}/>
                <Pregunta texto={parseFloat(score.toFixed(2)).toString()}/>
                
            </div>
        </div>
        <Boton label="Volver a jugar" onClick={handleButtonClick}/>
    </div>
  );
};

export default Score;
