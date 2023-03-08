import axios from "axios";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateCurrentUser, updateProfile } from "firebase/auth";
import { auth } from "../firebase-config";

const final_url = 'http://localhost:3000';

const apiUsers = {

    async loginUser(user:any){
        //Iniciar json server pegando a notes.json
        const resp = await axios.get(`${final_url}/users?userName=${user.userName}&password=${user.password}`);
        return resp.data;
    },
    async customLogin(user:any){
        //Iniciar json server pegando a notes.json
        await signInWithEmailAndPassword(auth, user.email, user.password)
        return Promise.resolve(auth.currentUser)
    },
    async customSignUp(user:any){
        //Iniciar json server pegando a notes.json
        await createUserWithEmailAndPassword(auth, user.email, user.password)
        .then((newUser) => {
            updateProfile(newUser.user, {
                displayName: user.name,
                photoURL: ''
            })
        }).catch(err => console.log(err))
        return Promise.resolve(auth.currentUser)
    },

    async post(user: any){ //userModel
        //Iniciar json server pegando a notes.json
        const resp = await axios.post(`${final_url}/users`, user);
        if(resp.status === 200) {
            return resp.data;
        } else {
            return null;
        }
    }

}

export default apiUsers;