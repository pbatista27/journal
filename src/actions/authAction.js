import Swal from 'sweetalert2';
import {types} from '../types/types';
import {firebase, googleAuthProvider} from '../firebase/firebaseConfig';
import { startLoading, finishLoading } from './uiAction';


export const startLoginEmailPassword = (email, password) =>{
    return (dispatch) => {

        dispatch(startLoading());

        firebase.auth().signInWithEmailAndPassword(email, password)
        .then( ({user}) => {
            dispatch( login(user.uid, user.displayName) );
            dispatch(finishLoading());
        }).catch(err => {
            console.log(err);
            dispatch(finishLoading());
            Swal.fire('Error', err.message,'error');
        });

    };
};

export const startGoogleLogin = () => {
    return (dispatch) =>{

        firebase.auth().signInWithPopup(googleAuthProvider)
            .then(({user}) => {
                dispatch( login(user.uid, user.displayName) );
            });
    };
};


export const startRegisterUserWithEmailPasswordName = (email, password, nombre) => {
    return (dispatch) => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then( async({user}) => {
            await user.updateProfile({displayName:nombre});
            dispatch( login(user.uid, user.displayName) );
            dispatch(finishLoading());
        }).catch( err => {
            console.log(err);
            Swal.fire('Error', err.message,'error');
        });
    };
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

export const startLogout = () => {
    return async(dispatch) => {
        await firebase.auth().signOut();
        dispatch( loguot() );
    }
};

export const loguot = () => {

    return {
        type: types.logout
    }

}
