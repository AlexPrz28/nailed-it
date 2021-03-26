import axios from 'axios'
import LoginScreen from '../Screens/LoginScreen'

const manageAPI = 'https://nailed-it-api.herokuapp.com/'

export class LoginService {

    async userLogin(credentials){
        try{
            const data = await axios.post(`${manageAPI}users/login`, credentials);
            return data.data;

        }
        catch(err) {
            console.log(err);
            console.log("FALSO A LLEGAR ES DE LOGINSERVICE")
            throw 'error'
            return false
        }
    }

};

export default new LoginService();