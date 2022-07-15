import httpService from "./http.service";

const exchangeRateEndpoint = "/fixer/latest?";

const exchangeRateService = {
    get: async (symbols, base) => {
        const { data } = await httpService.get(
            exchangeRateEndpoint + `symbols=${symbols}&base=${base}`
        );
        return data.rates;
    }
};

export default exchangeRateService;
