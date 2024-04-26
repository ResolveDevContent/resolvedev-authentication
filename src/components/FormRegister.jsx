

import { useState } from "react";
import { useForm } from '../hook/useForm'

export default function FormRegister(inputs) {
    const [ data, setData ] = useState({});
    const { register } = useForm();

    const handleChange = (e) => {
        e.preventDefault();

        const {value, name} = e.target;

        setData({...data, [name]: value});
    }

    const handleClick = (e) => {
        e.preventDefault();
        
        register(data)
    }

    return(
        <form>
            {inputs.inputs.map((input) => (
                <input 
                    type={input.type} 
                    key={input.id} 
                    name={input.name} 
                    placeholder={input.placeholder} 
                    id={input.id}
                    onChange={handleChange}
                /> 
            ))}
            <button onClick={handleClick}>Register</button>
        </form>
    )
}