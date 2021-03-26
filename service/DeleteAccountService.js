import axios from 'axios'
import LoginScreen from '../Screens/LoginScreen'

const manageAPI = 'https://nailed-it-api.herokuapp.com/'

export class DeleteAccountService {

    async userDelete(credentials){
        try{
            axios.delete(`${manageAPI}users/delete`, {data: credentials}).then(
                response => {
                    return response.data
                }
            )

        }
        catch(err) {
            throw 'error'
            return false
        }
    }

};

export default new DeleteAccountService();