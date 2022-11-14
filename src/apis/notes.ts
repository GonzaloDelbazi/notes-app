import axios from "axios";

const notes = {

    async getNotes(){
        const resp = await axios.get('notes.json');
        return resp.data;
    }

}

export default notes;