import PropTypes from "prop-types";

const TextField = ({ value, onChange, error }) => {
    const handleChange = ({ target }) => {
        onChange({ name: target.name, value: target.value });
    };
    const getInputClasses = () => {
        return "form-control" + (error ? " is-invalid" : "");
    };
    return (
        <div className="mb-4">
            <label htmlFor="convert">Write your request:</label>
            <div className="input-group has-validation">
                <input
                    type="text"
                    id="convert"
                    name="convert"
                    value={value}
                    onChange={handleChange}
                    className={getInputClasses()}
                ></input>
                {error && <div className="invalid-feedback ">{error}</div>}
            </div>
        </div>
    );
};

TextField.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
    error: PropTypes.string
};

export default TextField;
