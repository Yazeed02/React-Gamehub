import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: 'ff5e572fc62645518188dab7b4fc3f9b'
    }
})