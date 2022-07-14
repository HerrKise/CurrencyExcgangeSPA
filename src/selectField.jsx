import { useEffect, useState } from "react";
// import symbolsService from "./services/symbols.service";
import fetchAll from "./api/symbols.api";
import PropTypes from "prop-types";

const SelectField = ({ name, onChange, value }) => {
    const [symbols, setSymbols] = useState();
    useEffect(() => {
        fetchAll().then((data) => setSymbols(data.symbols));
    }, []);
    const handleChange = ({ target }) => {
        onChange({ name: target.name, value: target.value });
    };
    const symbolsArray =
        !Array.isArray(symbols) && typeof symbols === "object"
            ? Object.keys(symbols).map((symbol) => ({
                  name: symbols[symbol],
                  value: symbol
              }))
            : symbols;
    return (
        <>
            {symbolsArray ? (
                <div className="m-4 grid">
                    <div className="g-col-4">
                        <label htmlFor="currency selector">
                            Choose your currency
                        </label>
                        <select
                            className="form-select form-select-sm"
                            size="3"
                            id="currency selector"
                            aria-label="currency selector"
                            name={name}
                            value={value}
                            onChange={handleChange}
                        >
                            {symbolsArray.map((symbol) => (
                                <option value={symbol.value} key={symbol.value}>
                                    {symbol.name}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            ) : (
                "Loading..."
            )}
        </>
    );
};

SelectField.propTypes = {
    name: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func
};

export default SelectField;
