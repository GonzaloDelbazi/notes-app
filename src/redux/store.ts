import { configureStore } from '@reduxjs/toolkit';
import { UserPublicData } from '../models/User.model';
import userSliceReducer from './states/user';
import notesSliceReducer from './states/notes';
import { NoteModel } from '../models/NoteModel';

export interface AppStore {
    user: UserPublicData,
    notes: NoteModel[]
}

export const store = configureStore<AppStore>({
    reducer:{
        user: userSliceReducer,
        notes: notesSliceReducer
    }
});

