import React from 'react'

// Para decirle a ts como funcionan nuestros objetos
interface Persona { // una vacia no marca un error de validacion
    nombreCompleto: string;
    edad: number; 
    direccion: Direccion;
} 

interface Direccion { // Se puede inferir este tipo de interfaz para el objeto
    pais: string;
    casaNo: number; 
}

const ObjetosLiterales = () => {

    const persona: Persona = {
        nombreCompleto: 'Miguel',
        edad: 35,
        direccion: {
            pais: 'México',
            casaNo: 30
        }
    }

    return (
        <>
            <h3>Objetos Literales</h3>  
            <code>
                <pre>
                    { JSON.stringify(persona, null, 2) } 
                </pre>
            </code>
        </>
    )
}

export default ObjetosLiterales
