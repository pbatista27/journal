import React from 'react';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { startUpdateNote, startUploadFile } from '../../actions/notesAction';


export const NotesAppBar = ({date}) => {

    const fecha = moment(date);

    const dispatch = useDispatch();
    const {active} = useSelector(state => state.notes)

    const handleNoteSave = () => {
        dispatch( startUpdateNote(active));
    };

    const handledPictureChange = (e) => {
        const file = e.target.files[0];
        if( file ){
            dispatch( startUploadFile(file));
        }
    };


    const handlePictureUpload = () => {
        document.querySelector('#inputUpload').click();
    }

    return (
        <div className='notes__appbar animate__animated  animate__fadeIn'>
            <span>{fecha.format('MMMM Do YYYY')}</span>

            <input 
                type='file' 
                id='inputUpload' 
                name='file' 
                style={{display:'none'}}
                onChange={handledPictureChange}
            />
            
            <div>

                <button 
                    className='btn'
                    onClick={handlePictureUpload}
                    title='subir imagen'
                >
                    <i className='fas fa-image fa-2x'></i> 
                </button>
                <button 
                className='btn'
                onClick = {handleNoteSave}
                title='Guardar'
                >
                    <i className='fas fa-save fa-2x'></i> 
                </button>
            </div>
        </div>
    )
}
