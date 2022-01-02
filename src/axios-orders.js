import axios from "axios";

const instance = axios.create({
    baseURL:'https://burgerbuildernayyar-default-rtdb.firebaseio.com/'
})
export default instance