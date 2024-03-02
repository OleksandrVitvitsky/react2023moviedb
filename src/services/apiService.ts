import axios from "axios";

import {baseURL,MovieDbToken} from "../constants";

const apiService = axios.create({baseURL});
apiService.interceptors.request.use(request  =>{
      request.headers.Authorization = `Bearer ${MovieDbToken}`
      return request
})


export {
    apiService
}