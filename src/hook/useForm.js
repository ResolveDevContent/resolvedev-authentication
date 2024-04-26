import { useContext } from "react";
import { UserContext } from "../context/form";

export const useForm = () => {
    const context = useContext(UserContext)

    if(context === 'undefined') {
        throw new Error('useCart debe ser utilizado con CartProvider')
    }

    return context
}