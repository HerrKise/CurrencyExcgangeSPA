import PropTypes from "prop-types";

const SelectField = ({ symbols, name, onChange, value }) => {
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
                <div className="m-4 w-25">
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
            ) : (
                "Loading..."
            )}
        </>
    );
};

SelectField.propTypes = {
    symbols: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    name: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func
};

export default SelectField;
