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
      },
      setNotes: (state, action) => {
        state.notes = action.payload;
      },
      setSaving: (state, action) => {
        
      },
      updateNote: (state, action) => {
        
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
} = journalSlice.actions;