import axios from "axios";
import configFile from "../config.json";

const http = axios.create({
    baseURL: configFile.apiEndpoint,
    headers: {
        apikey: process.env.REACT_APP_API_KEY
    }
});

const httpService = {
    get: http.get
};

export default httpService;
