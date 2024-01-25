import React from 'react';
import Boton from '../components/Boton';
import Pregunta from '../components/Pregunta';
import { useNavigate } from 'react-router-dom';

const Inicio: React.FC = () => {
    const pregunta= '¿Que tanto sabes acerca de PYTHON?';
    const navigate = useNavigate();
   

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
                <img src="https://cdn-icons-png.flaticon.com/256/3067/3067287.png" alt="pc" className='w-1/4'/>
            </div>
        </div>
        <Boton label="Comenzar" onClick={handleButtonClick}/>
    </div>
  );
};

export default Inicio;
