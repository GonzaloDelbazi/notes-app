import axios from "axios";
import { NoteModel } from "../models/NoteModel";

const final_url = 'http://localhost:3000';

const apiNotes = {

    async get(){
        //Iniciar json server pegando a notes.json
        const resp = await axios.get(`${final_url}/notes`);
        return resp.data;
    },

    async updateNote(note: NoteModel){
        //Iniciar json server pegando a notes.json
        const resp = await axios.patch(`${final_url}/notes/${note.id}`, note);
        return resp.data;
    }

}

export default apiNotes;