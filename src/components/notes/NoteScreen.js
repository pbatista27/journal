import React, { useRef, useEffect } from 'react'
import { NotesAppBar } from './NotesAppBar'
import { useSelector, useDispatch } from 'react-redux'
import { useForm } from '../../hooks/useForm';
import { activeNote } from '../../actions/notesAction';

export const NoteScreen = () => {

    const {active:note} = useSelector(state => state.notes);
    const dispatch = useDispatch();

    const [inputValues,handChangeInput,reset] = useForm({note});

    const activeId =  useRef(note.id);


    useEffect(() => {

        if( note.id !== activeId.current ){
            reset(note);
            activeId.current = note.id
        }
       
    }, [note,reset]);

    useEffect(() => {
        console.log(inputValues);
        dispatch( activeNote({...inputValues}) );

    }, [inputValues,dispatch]);



    const {body, title} = inputValues;

    return (
        <div className='note__main-content'> 
            <NotesAppBar date={note.date} />

            <div className='notes__content'>
                <input
                    type='text'
                    placeholder='Some awesome title'
                    className='notes__title-input'
                    autoComplete='off'
                    value={title}
                    name='title'
                    onChange={handChangeInput}
                />
                <textarea 
                    placeholder='what happend today'
                    className='notes__textarea'
                    value={body}
                    name='body'
                    onChange={handChangeInput}
                    >
                </textarea>

                <div className='notes__image'>
                    <img 
                        src='http://2.bp.blogspot.com/-r_Fe-81ABgY/UTqwvuDJmkI/AAAAAAABsoo/_KgCxjVZfbU/s1600/fotos-de-playas-paradisiacas-palmeras-y-arena-junto-al-mar-azul-5.jpg'
                        alt='algo'

                    />
                </div>
            </div>
        </div>
    )
}
