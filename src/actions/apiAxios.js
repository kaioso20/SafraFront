import Axios from "axios";

let api = Axios.create({
    baseURL: 'https://localhost:44319'
})

api.defaults.headers.post['Content-type'] = 'application/json'

export default api