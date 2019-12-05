import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { Input } from '../../CustomUI/Input/Input';

const styles = {
    input: {
        margin: '20px auto',
        border: 'black solid 1px',
        borderRadius: '6px',
        width: '40%',
        height: '5rem',
        padding: '20px'
    },
    label: {

    },
    description: {

    }
}

export const DisplayForm = ({ match }) => {

    let [formStructure, setFormStructure] = useState([]);

    let [formData, setFormData] = useState({});

    useEffect(() => {
        const request = async () => {
            const response = await Axios.get(`http://localhost:5000/form/${match.params.name}`);
            console.log(response)
            setFormStructure(response.data.structure);
        };
        request();
    }, [match.params.name])

    console.log(formStructure);

    const submit = async () => {
        console.log(formData)
        const response = await Axios.post(`http://localhost:5000/form/${match.params.name}`, { formData });
        console.log(response.data);
    };

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    }

    if (formStructure.length > 0)
        return (
            <div>
                {formStructure.map(input => {
                    return (
                        <div style={styles.input} key={input._id}>
                            <Input
                                handleChange={handleChange}
                                name={input.name}
                                inputType={input.type}
                                description={input.description}
                                label={input.label}
                            />
                        </div>
                    )
                })}

                <button onClick={submit} >Submit</button>
            </div>
        )
    return (<div></div>)
    /* <div style={styles.input} key={input._id}>
                            <p>{input.label}</p>
                            <p>{input.description}</p>
                            <input onChange={handleChange} name={input.name} type={input.type} />
                        </div> */
}
