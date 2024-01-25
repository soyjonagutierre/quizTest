import React from 'react';

type ButtonProps = {
    label: string;
    onClick: () => void
};


const Boton: React.FC<ButtonProps> = ({ label, onClick }) => {
    return (
        <div className="flex justify-center pt-20">
            <button
                onClick={onClick}               
                className="bg-[#A03A55] text-white px-4 py-2 rounded-full font-bold hover:bg-pink-700 focus:outline-none focus:ring w-1/6 h-14">  
                {label}
            </button>
        </div>
    );
};

export default Boton;
