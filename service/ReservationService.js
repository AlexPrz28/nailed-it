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


};

export default new ReservationService();