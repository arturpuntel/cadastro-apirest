/**
 * 
 */

import axios from 'axios';

export class CadastroService{
    baseUrl = "http://localhost:8081/api/";

    getAll(){
        return axios.get(this.baseUrl + "/cadastro").then(res => res.data);
    }
}
    