import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { Reducer } from './models/Reducer';
import { auth } from './firebase-config';

const userReducer = (state = {}, action: Reducer) => {

    switch (action.type) {
        case '@user/seted':
            auth.onAuthStateChanged( (user) => {
                if(user) {
                  state = user;
                }  
              })
            return state;

        case '@user/deleted':
            return {};  
    }
}

export const store = createStore(userReducer);

const userSeted = {
    type: '@user/seted'
}

store.dispatch(userSeted);

userReducer({}, userSeted)
