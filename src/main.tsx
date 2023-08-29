import ReactDOM from 'react-dom/client'
import apiNotes from './apis/notes'
import App from './App'
import { auth } from './firebase-config'
import './index.scss'
import { setNotes } from './redux/states/notes'
import { createUser, setUserStatusLoading } from './redux/states/user'
import { store } from './redux/store'
import { UserStorage } from './storage/userStorage'

store.dispatch(setUserStatusLoading(true))
auth.onAuthStateChanged(async (user) => {
    if(user) {
        const userLogged = {
            name: user.displayName,
            id: user.uid,
            email: user.email,
        };
        store.dispatch(createUser(userLogged))
        UserStorage.setUserStorage(user);
        const dataNotes = await apiNotes.get(user.uid);
        store.dispatch(setNotes(dataNotes))
    }
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <App />
)