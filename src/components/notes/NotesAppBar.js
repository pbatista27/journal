import React from 'react';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { startUpdateNote } from '../../actions/notesAction';


export const NotesAppBar = ({date}) => {

    const fecha = moment(date);

    const dispatch = useDispatch();
    const {active} = useSelector(state => state.notes)

    const handleNoteSave = () => {
        dispatch( startUpdateNote(active));
    };

    return (
        <div className='notes__appbar'>
            <span>{fecha.format('MMMM Do YYYY')}</span>
            
            <div>
                <button className='btn'>
                    Picture
                </button>
                <button 
                className='btn'
                onClick = {handleNoteSave}
                >
                    Save
                </button>
            </div>
        </div>
    )
}
