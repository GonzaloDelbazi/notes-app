import axios from "axios";

const final_url = 'http://localhost:3000';

const apiNotes = {

    async get(){
        //Iniciar json server pegando a notes.json
        const resp = await axios.get(`${final_url}/notes`);
        return resp.data;
    }

}

export default apiNotes;