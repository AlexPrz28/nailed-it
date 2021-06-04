import axios from 'axios'

const manageAPI = 'https://nailed-it-api.herokuapp.com/'

export class SalonService {

    async getServices(credentials) {
        try {
            const data = await axios.post(`${manageAPI}services/get`, { id: credentials });
            return data.data;

        }
        catch (err) {
            console.log(err);
            console.log("ERROR EN CONSEGUIR LOS SERVICIOS")
            throw 'error'
        }
    }

    async getServiceDetails(credentials) {
        try {
            const data = await axios.post(`${manageAPI}services/get/id`, { id: credentials });
            return data.data;

        }
        catch (err) {
            console.log(err);
            console.log("ERROR EN CONSEGUIR LOS DETALLES DEL SERVICIO")
            throw 'error'
        }
    }

    async getServiceHours(credentials) {
        try {
            const data = await axios.post(`${manageAPI}hours/get`, { service_id: credentials });
            return data.data;

        }
        catch (err) {
            console.log(err);
            console.log("ERROR EN CONSEGUIR LAS HORAS DISPONIBLES DEL SERVICIO")
            throw 'error'
        }
    }

    async deleteServiceHour(reservedHour) {
        try {
            const data = await axios.post(`${manageAPI}hours/update/remove`, reservedHour);
            return data.data;

        }
        catch (err) {
            console.log(err);
            console.log("No se pudo eliminar la hora de la lista de horas disponibles del servicio")
            throw 'error'
        }
    }

    async updateServiceHourList(list) {
        try {
            const data = await axios.post(`${manageAPI}hours/update`, list);
            return data.data;

        }
        catch (err) {
            console.log(err);
            console.log("No se pudo eliminar la hora de la lista de horas disponibles del servicio")
            throw 'error'
        }
    }

    async getServiceById(credentials) {
        try {
            const data = await axios.post(`${manageAPI}services/get/id`, { id: credentials });
            return data.data;

        }
        catch (err) {
            console.log(err);
            console.log("ERROR EN CONSEGUIR EL SERVICIO ESPECIFICO")
            throw 'error'
        }
    }


};

export default new SalonService();