export const userInitialState = JSON.parse(window.localStorage.getItem("user")) || [];

export const USER_ACTION_TYPES = {
    REGISTER: "REGISTER",
}

export const updateLocalStorage = (state) => {
    window.localStorage.setItem("user", JSON.stringify(state));
}

const UPDATE_STATE_BY_ACTION = {
    // eslint-disable-next-line no-unused-vars
    [USER_ACTION_TYPES.REGISTER]: (state, action) => {
        const new_state = [
            { ...action.payload},
        ]

        updateLocalStorage(new_state);
        return new_state;
    }
}

export const userReducer = (state, action) => {
    const { type: actionType } = action,
            updateState = UPDATE_STATE_BY_ACTION[actionType];

    return updateState ? updateState(state, action) : state;
}