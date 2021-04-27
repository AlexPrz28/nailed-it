import axios from 'axios'
import { useState } from 'react';
import { useEffect } from 'react';
import MainScreen from '../Screens/MainScreen';



const manageAPI = 'https://nailed-it-api.herokuapp.com/'

export class SalonService {

    async getSalons(credentials){
        try{
            const data = await axios.get(`${manageAPI}salons/`, credentials);
            return data.data;

        }
        catch(err) {
            console.log(err);
            console.log("ERROR EN CONSEGUIR LOS SALONES")
            throw 'error'
            return false
        }
    }

};

export default new SalonService();