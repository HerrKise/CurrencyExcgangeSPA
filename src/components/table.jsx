import { useEffect, useState } from "react";
// import getRates from "../api/exchangeRate.api";
import PropTypes from "prop-types";
import exchangeRateService from "../services/exchangeRate.service";

const Table = ({ value, symbols }) => {
    const [rates, setRates] = useState();
    useEffect(() => {
        exchangeRateService.get(symbols, value).then((data) => setRates(data));
    }, []);
    return (
        <>
            {rates ? (
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Name of currency</th>
                            <th scope="col">Rate</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.keys(rates).map((name) => (
                            <tr key={name}>
                                <th scope="row">{name}</th>
                                <td>{rates[name]}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                "Loading..."
            )}
        </>
    );
};

Table.propTypes = {
    symbols: PropTypes.string,
    value: PropTypes.string
};

export default Table;
