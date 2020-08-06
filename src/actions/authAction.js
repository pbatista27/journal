
import {types} from '../types/types';
import { startLoading, finishLoading } from './uiAction';
import { 
    loginEmailPasswordService, 
    googleLoginService, 
    loguotService, 
    registerUserWithEmailPasswordNameService 
    } from '../services/authService';


export const startLoginEmailPassword = (email, password) =>{
    return async(dispatch) => {
        
        try {

            dispatch(startLoading());
            const {user} = await loginEmailPasswordService(email, password);
            dispatch( login(user.uid, user.displayName) );
            dispatch( finishLoading() );

        } catch (error) {
            dispatch(finishLoading());
        }

    };
};

export const startGoogleLogin = () => {
    return async(dispatch) =>{

        try {
            
            const {user} = await  googleLoginService();
            dispatch( login(user.uid, user.displayName) );

        } catch (error) {
            
        }
    };
};


export const startRegisterUserWithEmailPasswordName = (email, password, nombre) => {
    return async(dispatch) => {
        const {uid,displayName} = await registerUserWithEmailPasswordNameService(email,password, nombre);
        dispatch( login(uid,displayName) );
        dispatch(finishLoading());
    };
};

export const startLogout = () => {
    return async(dispatch) => {
        await loguotService();
        dispatch( loguot() );
    }
};


export const login = (uid, displayName) => {
    
    return {
        type: types.login,
        payload : {
            uid,
            displayName
        }
    };
};


export const loguot = () => {

    return {
        type: types.logout
    }

}
