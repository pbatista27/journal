import { db } from "../firebase/firebaseConfig";

export const addNewNoteService = async(uid) => {

    const newNote = {
        title: '',
        body: '',
        date: new Date().getTime()
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

