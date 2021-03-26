import axios from 'axios'
import LoginScreen from '../Screens/LoginScreen'

const manageAPI = 'https://nailed-it-api.herokuapp.com/'

export class RecoverPasswordService {

    async recoverPass(credentials){
        try{
            const data = await axios.post(`${manageAPI}users/reset/token`, credentials);
            return data.data;

        }
        catch(err) {
            console.log(err);
            throw 'error'
            return false
        }
    }

};

export default new RecoverPasswordService();