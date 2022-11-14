import axios from "axios";

const notes = {

    async get(){
        //Iniciar json server pegando a notes.json
        const resp = await axios.get('http://localhost:3000/notes');
        return resp.data;
    }

}

export default notes;