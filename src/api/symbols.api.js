const symbols = {
    success: true,
    symbols: {
        AED: "United Arab Emirates Dirham",
        AFN: "Afghan Afghani",
        ALL: "Albanian Lek",
        AMD: "Armenian Dram"
    }
};

const fetchAll = () =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(symbols);
        }, 2000);
    });

export default fetchAll;
