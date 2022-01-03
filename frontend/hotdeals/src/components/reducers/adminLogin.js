const initialState = "";

const adminReducer = (state = initialState, action) => {
    if(action.type === "ADMIN") {
        return action.payload;
    }
    return state;
}

export default adminReducer;