import axios from "axios";

const final_url = 'http://localhost:3000';

const apiUsers = {

    async loginUser(user:any){
        //Iniciar json server pegando a notes.json
        const resp = await axios.get(`${final_url}/users?userName=${user.userName}&password=${user.password}`);
        console.log(resp.data)
        return resp.data;
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