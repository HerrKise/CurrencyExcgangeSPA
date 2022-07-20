import SelectField from "./components/selectField";
import { useEffect, useState } from "react";
import Table from "./components/table";
// import fetchAll from "./api/symbols.api";
// import getRates from "./api/exchangeRate.api";
import symbolsService from "./services/symbols.service";
import exchangeRateService from "./services/exchangeRate.service";
import TextField from "./components/textField";
import convertService from "./services/convert.service";

const Main = () => {
    /* const renderCount = useRef(0);
    const [otherState, setOtherState] = useState(false);
    const toggleOtherState = () => {
        setOtherState(!otherState);
    };
    useEffect(() => {
        renderCount.current++;
    }); */

    const [data, setData] = useState({
        currency: "GBP",
        convert: ""
    });
    const [symbols, setSymbols] = useState();
    const [currencyRates, setCurrencyRates] = useState();
    const [result, setResult] = useState();

    useEffect(() => {
        console.log(data);
    }, [data]);

    useEffect(() => {
        const requestArray = data.convert.split(" ");
        if (
            requestArray.length === 4 &&
            Number.isInteger(Number(requestArray[0])) &&
            requestArray[2] === "in" &&
            requestArray[1].length === 3 &&
            requestArray[3].length === 3
        ) {
            convertService
                .get(
                    requestArray[3].toUpperCase(),
                    requestArray[1].toUpperCase(),
                    Number(requestArray[0])
                )
                .then((data) => setResult(data));
            console.log({
                amount: Number(requestArray[0]),
                from: requestArray[1],
                to: requestArray[3]
            });
        }
    }, [data.convert]);

    useEffect(() => {
        if (!symbols) {
            symbolsService.fetch().then((responce) => setSymbols(responce));
        }
    }, [data.currency]);

    useEffect(() => {
        if (symbols) {
            // getRates().then((data) => setCurrencyRates(data.rates));
            exchangeRateService
                .get(Object.keys(symbols).toString(), data.currency)
                .then((data) => setCurrencyRates(data));
        }
    }, [symbols]);
    const handleChange = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };

    return (
        <>
            {/* <p>render count: {renderCount.current}</p>
            <button className="btn btn-primary" onClick={toggleOtherState}>
                renderCount
            </button> */}
            <TextField onChange={handleChange} value={data.convert} />
            {result && <h1>{result}</h1>}
            {symbols ? (
                <>
                    <SelectField
                        name="currency"
                        onChange={handleChange}
                        value={data.currency}
                        symbols={symbols}
                    />
                    <div>Current currency: {data.currency}</div>
                    <Table rates={currencyRates} />
                </>
            ) : (
                "Loading..."
            )}
        </>
    );
};

export default Main;
