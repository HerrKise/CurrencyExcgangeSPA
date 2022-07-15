const exchangeRate = {
    base: "USD",
    date: "2022-04-14",
    rates: {
        EUR: 0.813399,
        GBP: 0.72007,
        JPY: 107.346001
    },
    success: true,
    timestamp: 1519296206
};

const getRates = () =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(exchangeRate);
        }, 2000);
    });

export default getRates;
