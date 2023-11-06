import ACTIONS from "../actions/Actions";

export const initialState = {
    currentNode: "",
    data: ''
}

const MainReducer = (state, action) => {
    const { type, payload } = action;
    switch(type){
        case ACTIONS.GET_DATA:
            return {
                ...state,
                data: payload.newData
            }
        case ACTIONS.SET_CURRENT_NODE:
            return {
                ...state,
                currentNode: payload.newNode
            }
        default:
            return state;
    }
}

export default MainReducer;