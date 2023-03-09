import ReactDOM from 'react-dom/client'
import App from './App'
import { auth } from './firebase-config'
import './index.scss'
import { createUser } from './redux/states/user'
import { store } from './redux/store'


auth.onAuthStateChanged(user => {
    if(user) {
        const userLogged = {
            name: user.displayName,
            id: user.uid,
            email: user.email,
        };
        store.dispatch(createUser(userLogged))
    }
    ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
        <App />
    )
})