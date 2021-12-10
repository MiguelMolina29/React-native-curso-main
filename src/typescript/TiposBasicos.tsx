import React from 'react'

const TiposBasicos = () => {

    let nombre: string= "Miguel";
    const edad: number = 35; // Sabe que la edad siempre será 35 por ser "const"
    const estaActivo: boolean = false;

    const poderes: string[] = ['Velocidad', 'Volar', 'Respirar en el agua'];
    
    
    return (
        <>
            <h3>Tipos Basicoss</h3>   
            {nombre}, {edad}, { (estaActivo) ? "Si" : "No" }
            <br />
            {poderes.join(', ')}
        </>
    )
}

export default TiposBasicos
