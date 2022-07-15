import httpService from "./http.service";

const convertEndpoint = "/fixer/convert?";

const convertService = {
    get: async (to, from, amount) => {
        const { data } = await httpService.get(
            convertEndpoint + "to=" + to + "&from=" + from + "&amount=" + amount
        );
        return data.result;
    }
};

export default convertService;
