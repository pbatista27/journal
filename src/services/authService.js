import {firebase, googleAuthProvider} from '../firebase/firebaseConfig';
import Swal from 'sweetalert2';



export const loginEmailPasswordService = async(email, password) => {

    try {
        const user = await firebase.auth().signInWithEmailAndPassword(email, password);
        
        return user;

    } catch (error) {
        console.log(error);
        Swal.fire('Error en Login',error.message,'error');
    }

}

export const googleLoginService = async() => {

    try {

        const user = await firebase.auth().signInWithPopup(googleAuthProvider);
        return user;
    } catch (error) {
        console.log(error);
        Swal.fire('Error en Login',error.message,'error');
    }
};

export const registerUserWithEmailPasswordNameService = async (email, password, nombre) => {

    
    try {
        const userCred = await firebase.auth().createUserWithEmailAndPassword(email, password);
        const user =  await userCred.user;
    
        await user.updateProfile({displayName:nombre});
        const {uid, displayName} = user;
        return {uid, displayName};   
        
    } catch (error) {
        console.log(error);
        Swal.fire('Error al registrarse',error.message,'error');
    }
}

export const loguotService = async() => {
    await firebase.auth().signOut();
}