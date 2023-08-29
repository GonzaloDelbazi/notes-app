import { useSelector } from 'react-redux';
import './authLoading.scss';
import { AppStore, store } from '../../redux/store';
import { UserStorage } from '../../storage/userStorage';
import { useState, useEffect } from 'react';
import { setUserStatusLoading } from '../../redux/states/user';
import { auth } from '../../firebase-config';

export const AuthLoading = () => {
    const { user, userStatusLoading } = useSelector((store: AppStore) => store.authState);
    const [ isReady, setIsReady ] = useState(false)


    useEffect(() => {
        initState();
    });

    useEffect(() => {
        initState();
    }, [userStatusLoading, user]);

    const initState = async () => {
        const localUser = UserStorage.getUserStorage();

        if(!localUser) {
            await auth.signOut();
            store.dispatch(setUserStatusLoading(false));
        }
        if(user.id) {
            store.dispatch(setUserStatusLoading(false));
        }

    }



    return (
        <div className="container">
        </div>
    )
}


export default AuthLoading;