import axios from 'axios'

const manageAPI = 'https://nailed-it-api.herokuapp.com/'

export class SignupService {

    async createUser(credentials){
        try{
            const data = await axios.post(`${manageAPI}users/signup`, credentials);
            return data.data;

        }
        catch(err) {
            console.log(err);
            return err.message

        }
    }

};

export default new SignupService();