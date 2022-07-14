import httpService from "./http.service";

const symbolsEndpoint = "/fixer/symbols";

const symbolsService = {
    fetch: async () => {
        const { data } = await httpService.get(symbolsEndpoint);
        return data.symbols;
    }
};

export default symbolsService;
