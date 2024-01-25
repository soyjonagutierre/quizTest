import React from 'react';

type PreguntaProps = {
    texto: String;
    
};


const Pregunta: React.FC<PreguntaProps> = ({ texto }) => {
    return (
        <div className='flex justify-center items-start pb-12'>
            <h1 className='text-4xl font-bold text-center'>{texto}</h1>
        </div>
    );
};

export default Pregunta;
