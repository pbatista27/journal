import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import validator from 'validator';
import { useForm } from '../../hooks/useForm';
import { setError, RemoveError } from '../../actions/uiAction';
import { startRegisterUserWithEmailPasswordName } from '../../actions/authAction';


export const RegisterScreen = () => {


    const dispatch = useDispatch();
    const {msgError} = useSelector(state => state.ui);


    const[inputValues,handleChangeInput] = useForm({
        nombre : '',
        email:'',
        password:'',
        password_repeat: ''
    });

    const {nombre, email, password, password_repeat} = inputValues;

    const handleRegister = (e) => {
        e.preventDefault();
        if(  isFormValid() ){

            dispatch(RemoveError());

            dispatch(startRegisterUserWithEmailPasswordName(email,password, nombre));



        }

    }

    const isFormValid = () => {

        if( validator.isEmpty(nombre)){
            dispatch( setError('nombre no puede ser vacio'))
            return false;
        }else if( ! validator.isEmail(email) ){
            dispatch( setError('Correo es invalido'))
            return false;
        } else if(! validator.isLength(password,{min:6})){
            dispatch( setError('password debe ser mayor a 6 digito'))
            return false;
        }else if(! validator.equals(password, password_repeat) ) {
            dispatch( setError('la confirmacion del password no coincide'))
            return false;
        }

        
        return true;
    };


    return (
        <div>
            <h3 className='auth__title'>Register</h3>
            <form onSubmit={handleRegister}>

                {
                    msgError && 
                    (
                        <div className='auth__alert-error'>{msgError}</div>
                    )
                }

                <input
                    type='text'
                    placeholder='nombre'
                    name='nombre'
                    className='auth__input'
                    value={nombre}
                    onChange={handleChangeInput}

                />


                <input
                    type='text'
                    placeholder='email'
                    name='email'
                    className='auth__input'
                    value={email}
                    onChange={handleChangeInput}

                />

                <input
                    type='password'
                    placeholder='contraseña'
                    name='password'
                    className='auth__input'
                    value={password}
                    onChange={handleChangeInput}
                />


                <input
                    type='password'
                    placeholder='confirme la contraseña'
                    name='password_repeat'
                    className='auth__input'
                    value={password_repeat}
                    onChange={handleChangeInput}
                />

                <button
                    type='submit'
                    className='btn btn-primary btn-block mb-5'
                > Entrar </button>

                <hr />

                <Link className='link' to='/auth/login' >
                    Already register?
                </Link>
            </form>
        </div>
    )
}
