import { createSlice } from "@reduxjs/toolkit";
import { NoteModel } from "../../models/NoteModel";

export const EmptyNotesState: NoteModel[] = []

export const notesSlice = createSlice({
    name: "notes",
    initialState: EmptyNotesState,
    reducers: {
        setNotes: (state, action) => action.payload,
        updateNotes: (state, action) => [...state, action.payload],
        resetNotes: () => EmptyNotesState
    }
});

export const { setNotes, updateNotes, resetNotes } = notesSlice.actions;

export default notesSlice.reducer;