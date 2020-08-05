import React, { useRef, useEffect } from 'react'
import { NotesAppBar } from './NotesAppBar'
import { useSelector, useDispatch } from 'react-redux'
import { useForm } from '../../hooks/useForm';
import { activeNote, startDeleteNote } from '../../actions/notesAction';

export const NoteScreen = () => {

    const {active:note} = useSelector(state => state.notes);
    const dispatch = useDispatch();

    const [inputValues,handChangeInput,reset] = useForm(note);

    const activeId =  useRef(note.id);


    const handleDeleteNote =  () => {
        const id = inputValues.id;
        dispatch( startDeleteNote(id));
    }


    useEffect(() => {

        if( note.id !== activeId.current ){
            reset(note);
            activeId.current = note.id
        }
       
    }, [note,reset]);

    useEffect(() => {
        dispatch( activeNote({...inputValues}) );

    }, [inputValues,dispatch]);


    return (
        <div className='note__main-content  animate__animated  animate__fadeIn'> 
            <NotesAppBar date={inputValues.date} />

            <div className='notes__content'>
                <input
                    type='text'
                    placeholder='Some awesome title'
                    className='notes__title-input'
                    autoComplete='off'
                    value={inputValues.title}
                    name='title'
                    onChange={handChangeInput}
                />
                <textarea 
                    placeholder='what happend today'
                    className='notes__textarea'
                    value={inputValues.body}
                    name='body'
                    onChange={handChangeInput}
                    >
                </textarea>

                <div className='notes__image'>
                    <img 
                        src={note.url}
                        alt={note.url}

                    />
                </div>
            </div>
            <button 
                className='btn btn-danger' 
                title='Eliminar'
                onClick={handleDeleteNote}
            >
                <i className='fas fa-trash-alt fa-2x'></i>
            </button>
        </div>
    )
}
