import React from 'react';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { activeNote } from '../../actions/notesAction';

export const JournalEntry = (note) => {

    const {title, body, date} = note;
    const url = 'nada';

    const fechaNote = moment(date);
    const dispatch = useDispatch();

    const handlenNote = () => {

        dispatch( activeNote(note));
        
    };

    return (
        <div className='journal__entry pointer' onClick={handlenNote}>
            {
                url &&
                <div
                style={{ 
                    backgroundSize:'cover',
                    backgroundImage: `url(${url})`
                 }} 
                className='journal__entry-picture'
                ></div>
            }

            <div className='journal__entry-body'>
                <p className='journal__entry-title'>
                    {title}
                </p>
                <p className='journal__entry-content'>
                    {body}
                </p>
            </div>

            <div className='journal__entry-date-box'>
                <span>{fechaNote.format('dddd')}</span>
                <h4>{fechaNote.format('Do')}</h4>
            </div>
        </div>
    )
}
