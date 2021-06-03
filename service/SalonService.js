import axios from 'axios'

const manageAPI = 'https://nailed-it-api.herokuapp.com/'

export class SalonService {

    async getSalons(credentials) {
        try {
            console.log("HOLA DESDE GETTING SALONS")
            const data = await axios.get(`${manageAPI}salons/list`, credentials);
            return data.data;

        }
        catch (err) {
            console.log(err);
            console.log("ERROR EN CONSEGUIR LOS SALONES")
            throw 'error'
        }
    }

    async getSalonData(credentials) {
        try {
            console.log("HOLA DESDE GETTING SALON DATA")
            const data = await axios.get(`${manageAPI}salons/${credentials}`, { id: credentials });
            return data.data;

        }
        catch (err) {
            console.log(err);
            console.log("ERROR EN CONSEGUIR LA INFO DEL SALON")
            throw 'error'
        }
    }

};

export default new SalonService();