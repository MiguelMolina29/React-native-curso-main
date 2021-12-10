import React from 'react';
import useCounter from '../hooks/useCounter';

const ContadorConHook = () => {

    const {valor, aumentar} = useCounter();

    return (
        <>
            <h3>Contador con Hook <small>{ valor }</small> </h3>

            <button className="btn btn-primary" onClick={() => aumentar(1)}>+1</button>
            &nbsp;
            <button className="btn btn-danger" onClick={() => aumentar(-1)}>-1</button>

        </>
    )
}

export default ContadorConHook