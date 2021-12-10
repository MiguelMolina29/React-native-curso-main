import { useState } from 'react'

const useCounter = ( inicial: number = 10 ) => {
    
    const [valor, setValor] = useState(inicial);

    const aumentar = (numero: number) => {
        setValor(valor + numero)
    }

    return {
        aumentar, 
        valor,
        inicial
    }
}

export default useCounter
