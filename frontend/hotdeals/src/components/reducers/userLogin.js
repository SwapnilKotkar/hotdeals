const initialState = "";

const userReducer = (state = initialState, action) => {
    if(action.type === "USER") {
        return action.payload;
    }
    return state;
}

export default userReducer;