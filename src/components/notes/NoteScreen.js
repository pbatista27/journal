import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
    return (
        <div className='note__main-content'> 
            <NotesAppBar />

            <div className='notes__content'>
                <input
                    type='text'
                    placeholder='Some awesome title'
                    className='notes__title-input'
                    autoComplete='off'
                />
                <textarea 
                    placeholder='what happend today'
                    className='notes__textarea'
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
