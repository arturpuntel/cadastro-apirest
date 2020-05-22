/**
 * 
 */

import axios from 'axios';

export class CadastroService{
    baseUrl = "http://localhost:8081/api/";

    getAll(){
        return axios.get(this.baseUrl + "cadastro").then(res => res.data);       
    }
    
   save(client) {
    	return axios.post(this.baseUrl + "cadastro", client).then(res => res.data);       
    }
   
   delete(id) {
       return axios.delete(this.baseUrl + "cadastro/"+id).then(res => res.data);
   }
}
    