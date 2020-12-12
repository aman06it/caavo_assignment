import * as Action from '../../redux/actionType'

const initialState = {
    data: [],
    editData: {}
}
export default function (state = initialState, action) {
    switch (action.type) {
        case Action.ADD_DATA:
            return {
                ...state,
                data: [...state.data, action.data],
            }
        case Action.OPEN_MODAL:
            let data = [...state.data]
            let indexData = data[action.index]
            indexData["index"] = action.index;
            return {
                ...state,
                editData: indexData,
            }
        case Action.UPDATE_DATA:
            let newData = [...state.data]
            newData[action.index] = action.data;
            return {
                ...state,
                data: newData,
            }
        case Action.CLEAR_EDIT_DATA:
            return {
                ...state,
                editData: action.data,
            }
        case Action.DELETE:
            let deleteData = [...state.data]
            deleteData.splice(action.index, 1);
            return {
                ...state,
                data: deleteData,
            }   
        default:
            return state;
    }

}