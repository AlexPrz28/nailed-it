import axios from 'axios'
import ServicesScreen from '../Screens/ServicesScreen';


const manageAPI = 'https://nailed-it-api.herokuapp.com/'

export class SalonService {

    async getServices(credentials){
        try{
            const data = await axios.post(`${manageAPI}services/get`, {id: credentials});
            return data.data;

        }
        catch(err) {
            console.log(err);
            console.log("ERROR EN CONSEGUIR LOS SERVICIOS")
            throw 'error'
            return false
        }
    }

};

export default new SalonService();