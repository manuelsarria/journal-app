import { createSlice } from '@reduxjs/toolkit';
export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
        isSaving: false,
        savedMessage: '',
        notes: [],
        active: null,
        // active: {
        //   id: 'ABC123',
        //   title: '',
        //   body: '',
        //   date: 1234567,
        //   imageUrls: [],
        // }
    },
    reducers: {
      savingNewNote: (state) => {
        state.isSaving = true;
      },
      addNewEmptyNote: (state, action) => {
        state.notes.push( action.payload );
        state.isSaving = false;
      },
      setActiveNote: (state, action) => {
        state.active = action.payload;
        state.savedMessage = '';
      },
      setNotes: (state, action) => {
        state.notes = action.payload;
      },
      setSaving: (state, action) => {
        state.isSaving = true;
        state.savedMessage = '';
      },
      updateNote: (state, action) => {
        state.isSaving = false;
        state.notes = state.notes.map( note => {
          if (note.id === action.payload.id) {
            return action.payload;
          }

          return note;
        });

        state.savedMessage = `${ action.payload.title }, update`
      },
      setPhotosToActiveNote : (state, action) => {
        state.active.imageUrls = [ ...state.active.imageUrls, ...action.payload ];
        state.isSaving = false;
      },
      deleteNoteByid: (state, action) => {
        
      },
    }
});

// Action creators are generated for each case reducer function
export const { 
  addNewEmptyNote,
  deleteNoteByid,
  savingNewNote,
  setActiveNote,
  setNotes,
  setSaving,
  updateNote,
  setPhotosToActiveNote,
} = journalSlice.actions;