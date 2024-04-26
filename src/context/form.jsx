import { createContext, useReducer } from "react";
import { userInitialState, userReducer } from "../reducers/form";

export const UserContext = createContext()

function useUserContext() {
    const [state, dispatch] = useReducer(userReducer, userInitialState)

    const register = user => dispatch({
        type: 'REGISTER',
        payload: user
    })

    return { state, register }
} 

export function UserProvider({children}) {
    const {state, register } = useUserContext()

    return (
        <UserContext.Provider value={{
            user: state,
            register
        }}>
            {children}
        </UserContext.Provider>
    )
}