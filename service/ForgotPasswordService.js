import axios from 'axios'
import LoginScreen from '../Screens/LoginScreen'

const manageAPI = 'https://nailed-it-api.herokuapp.com/'

export class ForgotPasswordService {

    async forgetPass(credentials){
        try{
            const data = await axios.post(`${manageAPI}users/reset`, credentials);
            return data.data;

        }
        catch(err) {
            console.log(err);
            throw 'error'
            return false
        }
    }

};

export default new ForgotPasswordService();