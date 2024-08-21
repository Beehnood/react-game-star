import axios from "axios";



export default axios.create({

    baseURL : 'https://api.rawg.io/api',
    params : {
        key : '6418abb8929c4ca2ab03a50088feb387'
    }
})