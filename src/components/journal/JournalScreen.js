import React from 'react';
import { Sidebar } from './Sidebar';
import { useSelector } from 'react-redux';
import { NothingSelected } from './NothingSelected';
import {NoteScreen} from '../notes/NoteScreen'

export const JournalScreen = () => {


    const {active} = useSelector(state => state.notes);


    return (
        <div className='journal__main-content animate__animated  animate__fadeIn'>
            <Sidebar />

            <main>
                {
                    (active)
                    ? ( <NoteScreen /> )
                    :  (<NothingSelected />)
                }

            </main>
        </div>
    );
};
