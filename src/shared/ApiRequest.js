import React from 'react';
import {BASE_URL} from './apiUrls';
import axios from 'axios';

export const ApiRequest =  function (options){
 return axios({
     baseURL: BASE_URL,
     ...options,
     headers:{
         "Content-Type":"application/json"
     }
 })
}

//export default ApiRequest;