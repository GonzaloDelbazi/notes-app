import { configureStore } from '@reduxjs/toolkit';
import { UserPublicData } from '../models/User.model';
import userSliceReducer from './states/user';
import notesSliceReducer from './states/notes';
import { NoteModel } from '../models/NoteModel';

export interface AppStore {
    authState: {
        user: UserPublicData,
        userStatusLoading: boolean
    }
    notes: NoteModel[]
}

export const store = configureStore<AppStore>({
    reducer:{
        authState: userSliceReducer,
        notes: notesSliceReducer,
    }
});

