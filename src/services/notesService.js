import { db } from "../firebase/firebaseConfig";


//journal-app

export const addNewNoteService = async(uid) => {

    const newNote = {
        title: '',
        body: '',
        date: new Date().getTime(),
        url:''
    };

    const doc = await db.collection(`${uid}/journal/notes`).add(newNote);
    return {doc, newNote};

}


export const getNotesService = async (uid) => {

    const notesSnap = await db.collection(`${uid}/journal/notes`).get();

    const notes = [];

    notesSnap.forEach(snapHijo => {
        notes.push({
            id : snapHijo.id,
            ...snapHijo.data()
        });
    });

    return notes;
};


export const updateNoteService = async (uid,noteId,note) => {

    await db.doc(`${uid}/journal/notes/${noteId}`).update(note);

};

export const fileUploadService = async (file) => {

    const url = ' https://api.cloudinary.com/v1_1/dshqlec1e/upload';

    const formData = new FormData();
    formData.append('upload_preset','journal-app');
    formData.append('file',file);

    try {

        const resp = await fetch(url,{
            method:'POST',
            body: formData
        });

        if(resp.ok){
            const respCloud = await resp.json();
            return respCloud.secure_url;
        }else{
            throw await resp.json();
        }
        
    } catch (error) {
        console.log(error);
    }

};

export const deleteNoteService = async(idUsuario, idNote) => {

    await db.doc(`${idUsuario}/journal/notes/${idNote}`).delete();

}

