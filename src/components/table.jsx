// import getRates from "../api/exchangeRate.api";
import PropTypes from "prop-types";

const Table = ({ rates }) => {
    const size = 8;
    const ratesCrop = [];
    if (rates) {
        for (let i = 0; i < Math.ceil(Object.keys(rates).length / size); i++) {
            ratesCrop[i] = Object.keys(rates).slice(i * size, i * size + size);
        }
    }
    return (
        <>
            {rates ? (
                <div className="d-flex flex-wrap">
                    {ratesCrop.map((subCrop) => (
                        <div
                            className="m-4 w-25"
                            key={ratesCrop.indexOf(subCrop)}
                        >
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Name of currency</th>
                                        <th scope="col">Rate</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {subCrop.map((name) => (
                                        <tr key={name}>
                                            <th scope="row">{name}</th>
                                            <td>{rates[name]}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    ))}
                </div>
            ) : (
                "Loading..."
            )}
        </>
    );
};

Table.propTypes = {
    rates: PropTypes.object
};

export default Table;
