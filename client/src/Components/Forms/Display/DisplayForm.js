import React, { useEffect, useState } from 'react';
import Axios from 'axios';

export const DisplayForm = ({ match }) => {

    let [formStructure, setFormStructure] = useState([]);

    useEffect(() => {
        const request = async () => {
            const response = await Axios.get(`http://localhost:5000/form/${match.params.name}`);
            setFormStructure(response.data[0].structure);
        };
        request();
    }, [match.params.name])

    console.log(formStructure)

    if (formStructure.length > 0)
        return (
            <div>
                {formStructure.map(input => {
                    return (
                        <div key={input._id}>
                            <p>{input.label}</p>
                            <p>{input.description}</p>
                            <input name={input.name} type={input.type} />
                        </div>
                    )
                })}
            </div>
        )
    return (<div></div>)
}
