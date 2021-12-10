import { useEffect, useReducer } from "react";

interface AuthState {
    validando: boolean;
    token: string | null;
    username: string;
    nombre: string;
}

const initialState: AuthState = {
    validando: true,
    token: null,
    username: '',
    nombre: ''
};

type AuthAction = {type: 'logout'};

const authReducer = (state: AuthState, action: AuthAction): AuthState => {

    switch ( action.type ) {
        case 'logout':
            return {
                validando: false,
                token: null,
                username: '',
                nombre: ''
            }
    
        default:
            return state;
    }

};

const Login = () => {

    // Reducer: Funcion que regresa un nuevo estado
    const [{validando, token}, dispatch] = useReducer(authReducer, initialState,);

    useEffect(() => {
        setTimeout(() => {
            dispatch({type: 'logout'});
        }, 1500)
    }, []);

    if( validando ) {
        return(
            <>
                <h3>Login</h3>

                <div className="alert alert-info">
                    Validando...
                </div>
            </>
        )
    }

    return (
        <>
            <h3>Login</h3>

            {
                ( token )
                    ? <div className="alert alert-success"> Autenticado </div>
                    : <div className="alert alert-danger"> No autenticado </div>
            
            }



            <button className="btn btn-primary">
                Login
            </button>

            <button className="btn btn-danger">
                Logout
            </button>

        </>
    )
}

export default Login
