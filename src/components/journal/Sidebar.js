import React from 'react'
import { JournalEntries } from './JournalEntries';
import { useDispatch } from 'react-redux';
import { startLogout } from '../../actions/authAction';

export const Sidebar = () => {

    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch( startLogout() );
    };

    return (
        <div>
            <aside className='journal__sidebar'>
                <div className='journal__sidebar-navbar'>
                    <h3 className='far fa-moon'>
                        <span>Pedro</span>
                    </h3>

                    <button 
                        className='btn'
                        onClick={handleLogout}

                    >
                        Logout
                    </button>
                </div>

                <div className='journal__rew-entry'>
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
