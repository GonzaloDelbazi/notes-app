import axios from "axios";
import { NoteModel } from "../models/NoteModel";
import { store } from "../redux/store";

const final_url = 'http://localhost:3000';

const apiNotes = {

    async get(id: string){        
        const resp = await axios.get(`${final_url}/notes?idOwner=${id}`);
        return resp.data;
    },
    async create(note: any) {
        const resp = await axios.post(`${final_url}/notes`, note);
        console.log(resp)
        return resp.data;
    },
    async delete(id: number) {
        const resp = await axios.delete(`${final_url}/notes/${id}`);
        console.log(resp)
        return resp.data;
    },

    async updateNote(note: NoteModel){
        const resp = await axios.patch(`${final_url}/notes/${note.id}`, note);
        // const resp = await axios.patch(`${final_url}/notes/${note.id}?idOwner=${user.id}`, note);
        return resp.data;
    }

}

export default apiNotes;