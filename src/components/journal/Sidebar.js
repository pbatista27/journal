import React from 'react'
import { JournalEntries } from './JournalEntries';
import { useDispatch, useSelector } from 'react-redux';
import { startLogout } from '../../actions/authAction';
import { startNewNote } from '../../actions/notesAction';

export const Sidebar = () => {

    const dispatch = useDispatch();
    const {name} = useSelector(store => store.auth);


    const handleLogout = () => {
        dispatch( startLogout() );
    };

    const handleAddNew = () => {
        dispatch( startNewNote() );
    }

    return (
        <div>
            <aside className='journal__sidebar'>
                <div className='journal__sidebar-navbar'>
                    <h3 className='far fa-moon'>
                        <span>{name}</span>
                    </h3>

                    <button 
                        className='btn'
                        onClick={handleLogout}

                    >
                        Logout
                    </button>
                </div>

                <div className='journal__rew-entry'
                    onClick = {handleAddNew}
                >
                    <i className="fas fa-calendar-plus fa-5x"></i>
                    <p className='mt-5'>
                        new entry
                    </p>
                </div>

                <JournalEntries />


            </aside>
        </div>
    );
};
