import { types } from '../types/types';
import Swal from 'sweetalert2';
import { getNotesService, addNewNoteService, updateNoteService } from '../services/notesService';

export const startNewNote = () => {

    return async (dispatch, getState) => {

        try {

            const { uid } = getState().auth;
            const {doc, newNote} = await addNewNoteService(uid);
            dispatch(activeNote(doc.id, newNote));


        } catch (error) {
            console.log(error);
            Swal.fire('Error al agregar nota', error.menssage, 'error');
        };
    };
};


export const activeNote = (note) => {

    return {
        type: types.notesActive,
        payload: {
            ...note
        }
    };
};


export const startLoadNotes = (uid) => {

return async (dispatch) =>{
    const notes = await getNotesService(uid);
    dispatch( setNotes(notes) );
}

};


export const setNotes = (notes) => {

    return {
        type : types.notesLoad,
        payload: notes
    }

};

export const startUpdateNote = (note) => {
    return async (dispatch, getState) => {

        try {

            const {uid} = getState().auth; 
            const noteFirebase = {...note};
            delete noteFirebase.id
    
            await updateNoteService(uid,note.id,noteFirebase);
    
            dispatch(updateNote(note.id, noteFirebase) );

            Swal.fire('Exito','La nota fue actualizada con exito','success');

            
        } catch (error) {
            console.log(error);
            Swal.fire('Error al Actualizar Notas',error.message,'error');
        }


    }
};


export const updateNote =  (id, note) => {

    return {
        type: types.notesUpdated,
        payload: {
            id,
            note: {
                id,
                ...note
            }
        }   
    }
};
