import axios from "axios";
import { API } from "../axios-config";
import { NoteModel } from "../models/NoteModel";

const apiNotes = {

    async get(id: string) {
        const resp = await API.get(`/notes/${id}`);
        return resp.data;
    },
    async create(note: any) {
        const resp = await API.post(`/notes`, note);
        return resp.data;
    },
    async delete(id: string) {
        const resp = await API.delete(`/notes/${id}`);
        return resp.data;
    },
    async updateNote(note: NoteModel) {
        const resp = await API.put(`/notes/${note._id}`, {title: note.title, description: note.description, isEditable: note.isEditable});
        return resp.data;
    }

}

export default apiNotes;