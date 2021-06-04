import axios from 'axios'

const manageAPI = 'https://nailed-it-api.herokuapp.com/'

export class ReservationService {

    async createReservation(reservation) {
        try {
            const data = await axios.post(`${manageAPI}reservations/new`, reservation);
            return data.data;
        }
        catch (err) {
            console.log(err);
            return err.message
        }
    }

    async getAllReservations(credentials) {
        console.log(global.userData)
        try {
            const data = await axios.get(`${manageAPI}reservations/list/${credentials}`, { user_id: credentials });
            console.log("HOLA DESDE GETALLRESERVATIONS")
            return data.data;
            

        }
        catch (err) {
            console.log(err);
            console.log("ERROR EN GETALLRESERVATIONES")
            throw 'error'
        }
    }

    async getReservationData(credentials) {
        console.log(global.userData)
        try {
            const data = await axios.get(`${manageAPI}reservations/${credentials}/${credentials}`, { user_id: credentials, reservation_id: credentials });
            console.log("HOLA DESDE GETALLRESERVATIONS")
            return data.data;
            

        }
        catch (err) {
            console.log(err);
            console.log("ERROR EN GETALLRESERVATIONES")
            throw 'error'
        }
    }

    async deleteReservation(credentials) {
        console.log(global.userData)
        try {
            const data = await axios.post(`${manageAPI}reservations/cancel/${credentials}`, { reservation_id: credentials });
            console.log("HOLA DESDE DESDE DELETERESERVATIONS")
            return data.data;
            

        }
        catch (err) {
            console.log(err);
            console.log("ERROR EN DELETEALLRESERVATIONS")
            throw 'error'
        }
    }


};

export default new ReservationService();