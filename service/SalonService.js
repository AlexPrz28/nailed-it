import axios from 'axios'
import { useState } from 'react';
import { useEffect } from 'react';
import MainScreen from '../Screens/MainScreen';



const manageAPI = 'https://nailed-it-api.herokuapp.com/'

export class SalonService {

    async getSalons(credentials){
        try{
            console.log("HOLA DESDE GETTING SALONS")
            const data = await axios.get(`${manageAPI}salons/list`, credentials);
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