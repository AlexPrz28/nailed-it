import axios from 'axios'

const manageAPI = 'https://nailed-it-api.herokuapp.com/'

export class SignupService {

    async createUser(credentials){
        console.log("Estoy usando createUser")
        console.log(credentials)
        try{
            const data = axios.post(`${manageAPI}/users/signup`, credentials);
            console.log("SIGNUP SUCCESSFUL")
            console.log(data)
            return data;

        }
        catch(err) {
            console.log(err);
            return err.message

        }
    }

};

export default new SignupService();