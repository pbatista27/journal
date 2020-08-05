import { types } from '../types/types';
import Swal from 'sweetalert2';
import { getNotesService, addNewNoteService, updateNoteService, fileUploadService, deleteNoteService } from '../services/notesService';

export const startNewNote = () => {

    return async (dispatch, getState) => {

        try {

            const { uid } = getState().auth;
            const {doc, newNote} = await addNewNoteService(uid);

            newNote.id = doc.id;
            dispatch(activeNote(newNote));
            dispatch(addNewNote(newNote));


        } catch (error) {
            console.log(error);
            Swal.fire('Error al agregar nota', error.menssage, 'error');
        };
    };
};

export const addNewNote = (note) => ({
    type: types.notesAddNew,
    payload:{
         ...note
    }
});


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

export const startUploadFile = (file) => {
    return async(dispatch, getState) => {

        const {active:activeNote} = getState().notes;

        Swal.fire({
            title: 'Subiendo Imagen',
            text: 'Cargando...',
            allowOutsideClick: false,
            onBeforeOpen: () => {
                Swal.showLoading();
            }
        })

        const url = await fileUploadService(file);

        activeNote.url = url;

        dispatch( startUpdateNote(activeNote));

        Swal.close();

    };
};

export const startDeleteNote = (id) => {
    return async(dispatch, getState) => {
    
        const uid = getState().auth.uid;
        try {

            await deleteNoteService(uid,id);
            dispatch( deleteNote(id));

            Swal.fire('Eliminando Notas', 'Notas Eliminada con exito','success');

        } catch (error) {
            console.log(error);    
        }

    };
};

export const deleteNote = (id) => ({
    type: types.notesDelete,
    payload: id
});


export const purgeNotesLogout = () =>({
    type: types.notesLogoutCleaning,
}); 