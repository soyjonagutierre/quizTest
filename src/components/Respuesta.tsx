import React from 'react';

type SeleccionEstado = {
    seleccionada: String | null; // 'string | null' significa que puede ser un string o null
    esCorrecta: boolean;
};


type RespuestasProps = {
    opciones: String[];
    onSeleccion: (seleccion: String) => void; 
    onCardClick: (seleccion: String) => void;
    seleccionEstado: SeleccionEstado;
};

const Respuestas: React.FC<RespuestasProps> = ({ opciones, onCardClick, seleccionEstado}) => {
    

    return (
        <div className='flex justify-center'>
            <div className="flex flex-wrap justify-center items-center bg-purple-500 p-4 rounded-lg mt-4">
                {opciones.map((opcion, index) => (
                    <div 
                        key={index} 
                        className={`bg-white m-2 p-2 rounded-lg shadow-lg cursor-pointer w-2/5 text-center transform transition-transform duration-300 overflow-hidden
                            ${seleccionEstado.seleccionada === opcion 
                                ? (seleccionEstado.esCorrecta ? 'bg-green-500' : 'bg-red-500') 
                                : ''}`}
                        onClick={() => onCardClick(opcion)}
                    >
                        <span className="font-bold text-xl text-black">{opcion}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Respuestas;
