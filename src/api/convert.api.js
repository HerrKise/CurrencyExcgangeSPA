const convert = {
    date: "2018-02-22",
    historical: "",
    info: {
        rate: 148.972231,
        timestamp: 1519328414
    },
    query: {
        amount: 25,
        from: "GBP",
        to: "JPY"
    },
    result: 3724.305775,
    success: true
};

const toConvert = () =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(convert);
        }, 2000);
    });

export default toConvert;
