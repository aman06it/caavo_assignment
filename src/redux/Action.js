import * as Action from './actionType';
import $ from 'jquery'

export const addData = (data)=> dispatch =>{
    dispatch({
        type: Action.ADD_DATA,
        data:data,
    });
}
export const openModal = (i)=> dispatch =>{
    dispatch({
        type: Action.OPEN_MODAL,
        index:i,
    });
    $("#testmodal").modal("show");
}
export const update = (data,i)=> dispatch =>{
    dispatch({
        type: Action.UPDATE_DATA,
        index:i,
        data:data
    });
    $("#testmodal").modal("show");
}
export const clearEditData = ()=> dispatch =>{
    dispatch({
        type: Action.CLEAR_EDIT_DATA,
        data:{}
    });
}
export const deleteGroup = (id)=> dispatch =>{
    $("#testmodal").modal("hide");
    clearEditData()
    dispatch({
        type: Action.DELETE,
        index:id
    });
}