import { createContext, useReducer, useContext } from 'react';
import MainReducer, { initialState } from '../reducers/MainReducer';
import ACTIONS from '../actions/Actions';

export const MainProvider = ({ children }) => {
    const [state, dispatch] = useReducer(MainReducer, initialState);

    const setNode = (node) => {
        dispatch({
            type: ACTIONS.SET_CURRENT_NODE,
            payload: {
                newNode: node
            }
        })
    }

    const getData = (data) => {
        dispatch({
            type: ACTIONS.GET_DATA,
            payload: {
                newData: data 
            }
        })
    }

    const value = {
        currentNode: state.currentNode,
        data: state.data,
        setNode,
        getData
    }

    return <MainContext.Provider value={value}>{children}</MainContext.Provider>
}

const useMain = () => {
    const context = useContext(MainContext);
    if(context === undefined) {
        throw new Error("no main context found");
    }

    return context;
}

export default useMain;

export const MainContext = createContext(initialState);

