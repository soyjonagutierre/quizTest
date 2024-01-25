import React, { useEffect, useState } from 'react';
import Boton from '../components/Boton';
import Preguntaa from '../components/Pregunta';
import Respuestas from '../components/Respuesta';
import { useNavigate } from 'react-router-dom';

interface Pregunta {
    pregunta: string;
    opciones: string[];
    respuesta_correcta: string;
  }

const GameStart: React.FC = () => {
    const [pregunta, setPregunta] = useState<{pregunta:String, opciones:String[], respuesta_correcta:String}>({pregunta: "", opciones: [], respuesta_correcta: ""});
    const [seleccion, setSeleccion] = useState<String>('');
    const [allPreguntas, setAllPreguntas] = useState<Pregunta[]>([]);
    const [position, setPosition] = useState(0)
    const [respuestaCorrecta, setRespuestaCorrecta]= useState<String>('');
    const [seleccionEstado, setSeleccionEstado] = useState<{ seleccionada: String | null, esCorrecta: boolean }>({ seleccionada: null, esCorrecta: false });
    const [score, setScore]= useState(0);
    //const opciones = ['Nada', 'Algo', 'Mucho'];
    const navigate = useNavigate();
    const handleButtonClick = () => {
        navigate('/');
    };
 
    const handleCardClick = (respuesta: String) => {
        //alert(`Respuesta seleccionada: ${respuesta} y respuesta correcta: ${respuestaCorrecta}`);
        evaluarPregunta(respuesta);
    };
    useEffect(() => {
        const manejarAntesDeCarga = (e: BeforeUnloadEvent) => {
            
            e.preventDefault(); 
            e.returnValue = ''; 
        };

       
        window.addEventListener('beforeunload', manejarAntesDeCarga);

       
        return () => {
            window.removeEventListener('beforeunload', manejarAntesDeCarga);
        };
    }, []);

    useEffect(() => {
        const getApi = async () => {
            try {
                const respuesta = await fetch('https://qalogisticsback.boxai.mx/app/ws/questions/');
                const preguntasArray = await respuesta.json();
                setAllPreguntas(preguntasArray.preguntas);
            } catch (error) {
                console.error(error);
            }
        };
        getApi(); 
    }, []);
    
    useEffect(() => {
        if (allPreguntas.length > 0) {
            const nuevaPregunta= allPreguntas[position];
            setPregunta(nuevaPregunta);
            setRespuestaCorrecta(nuevaPregunta.respuesta_correcta);
        }
    }, [allPreguntas, position]);
    
    const evaluarPregunta = (respuestadada: String) => {
        const totalPreguntas = allPreguntas.length;
        const esCorrecta = respuestaCorrecta === respuestadada;
        setSeleccionEstado({ seleccionada: respuestadada, esCorrecta });
        console.log(seleccion);

        
        if(respuestaCorrecta === respuestadada){
            setScore(score+1);
        }
        
        setTimeout(() => {
            const nextPosition = position + 1;
            if (nextPosition < totalPreguntas) {
                setPosition(nextPosition);
                setSeleccionEstado({ seleccionada: null, esCorrecta: false });
            } else {
                let puntuacionFinal = (score*10)/allPreguntas.length;
                navigate('/score', { state: { puntuacionFinal } })
            }
        }, 500);
    };

  return (
    <div>
        <div className='flex justify-center'>
            <img src="https://i.pinimg.com/originals/92/60/dd/9260dd459aa4566cfa25e86a3f10ea1b.png" alt="python" className='w-1/12'/>
        </div>
        <Preguntaa texto={pregunta.pregunta}/>
        <Respuestas opciones={pregunta.opciones} onSeleccion={setSeleccion} onCardClick={handleCardClick} seleccionEstado={seleccionEstado} />
        <Boton label="Salir" onClick={handleButtonClick}/>
        
    </div>
  );
};

export default GameStart;
