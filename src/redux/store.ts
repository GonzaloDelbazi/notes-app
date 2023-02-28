import { configureStore } from '@reduxjs/toolkit';
import { Reducer } from '../models/Reducer';
import { auth } from '../firebase-config';
import { UserPublicData } from '../models/User.model';
import userSliceReducer from './states/user';

export interface AppStore {
    user: UserPublicData
}

export const store = configureStore<AppStore>({
    reducer:{
        user: userSliceReducer 
    }
});

