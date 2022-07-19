import SelectField from "./components/selectField";
import { useEffect, useState } from "react";
import Table from "./components/table";
// import fetchAll from "./api/symbols.api";
import symbolsService from "./services/symbols.service";

const Main = () => {
    const [data, setData] = useState({
        currency: "GBP"
    });
    const [symbols, setSymbols] = useState();
    useEffect(() => {
        symbolsService.fetch().then((data) => setSymbols(data));
        // fetchAll().then((data) => setSymbols(data.symbols));
    }, []);
    useEffect(() => {
        console.log(symbols);
    }, [symbols]);
    const stringSymbols = symbols ? Object.keys(symbols).toString() : symbols;
    const handleChange = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };

    return (
        <>
            <SelectField
                name="currency"
                onChange={handleChange}
                value={data.currency}
                symbols={symbols}
            />
            <div>Current currency: {data.currency}</div>
            {stringSymbols ? (
                <Table value={data.currency} symbols={stringSymbols} />
            ) : (
                "Loading..."
            )}
        </>
    );
};

export default Main;
