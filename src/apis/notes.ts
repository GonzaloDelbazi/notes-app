import axios from "axios";
import { NoteModel } from "../models/NoteModel";
import { store } from "../redux/store";

const final_url = 'http://localhost:3000';
const { user } = store.getState();

const apiNotes = {

    async get(){        
        const resp = await axios.get(`${final_url}/notes?idOwner=${user.id}`);
        return resp.data;
    },

    async updateNote(note: NoteModel){
        const resp = await axios.patch(`${final_url}/notes/${note.id}`, note);
        // const resp = await axios.patch(`${final_url}/notes/${note.id}?idOwner=${user.id}`, note);
        return resp.data;
    }

}

export default apiNotes;