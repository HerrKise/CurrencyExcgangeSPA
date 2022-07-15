import axios from "axios";
import configFile from "../config.json";

const http = axios.create({
    baseURL: configFile.apiEndpoint,
    headers: {
        apikey: "ktm0bNPbeh2IlGI3UtvF2sjViGkOqjNH"
    }
});

const httpService = {
    get: http.get
};

export default httpService;
