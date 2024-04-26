import { useEffect, useState } from "react";
import {useForm} from '../hook/useForm'
import FormRegister from './FormRegister'

export default function Form() {
    const { user } = useForm();
    
    useEffect(() => {
        console.log(user) // ACA SE GUARDARIAN LOS DATOS
    }, [user])
    
    // eslint-disable-next-line no-unused-vars
    const [datos, setDatos] = useState(
        [
            {name: "nombre", id: "name", placeholder: "Nombre", type: "text"},
            {name: "email", id: "email", placeholder: "Email", type: "email"},
            {name: "password", id: "password", placeholder: "Contraseña", type: "password"},
        ]
    )


    return(
        <FormRegister inputs={datos}/>
    )
}