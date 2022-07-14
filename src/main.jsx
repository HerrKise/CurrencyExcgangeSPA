import SelectField from "./selectField";
import { useEffect, useState } from "react";

const Main = () => {
    const [data, setData] = useState({
        currency: ""
    });
    useEffect(() => {
        console.log(data.currency);
    }, [data]);
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
            />
        </>
    );
};

export default Main;
