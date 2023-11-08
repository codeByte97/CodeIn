export const initialState = {
    login: null,
    usertype: null
};
export const reducer = (state, action) => {
    if (action.type === "USER") {
        return {
            ...state,
            login: action.payload.login,
            usertype: action.payload.usertype
        };
    }
    return state;
}
