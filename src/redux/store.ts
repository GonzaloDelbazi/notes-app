import { configureStore } from '@reduxjs/toolkit';
import { Reducer } from '../models/Reducer';
import { auth } from '../firebase-config';
import { UserInfo } from '../models/User.model';
import userSliceReducer from './states/user';

export interface AppStore {
    user: UserInfo
}

export const store = configureStore<AppStore>({
    reducer:{
        user: userSliceReducer 
    }
});

