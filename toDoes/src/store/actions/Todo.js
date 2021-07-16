import * as actionTypes from '../actionsTypes';

export const saveTodoes=(todoesArr)=>{
    return {
        type:actionTypes.ALL_TODOES,
        payload:todoesArr
        }
}
export const saveChanges=(todo)=>{
    debugger
    return {
        type:actionTypes.TODO_SAVE_CHANGES,
        payload:todo
    }
}
export const addTodo=(todo)=>{
    return {
        type:actionTypes.ADDED_TODO,
        payload:todo
    }
}
export const saveSearchTodoArr=(arr)=>{
    return {
        type:actionTypes.SAVE_SEARCH_TODO,
        payload:arr
    }
}
export const deleteTodo=(todoId)=>{
    return {
        type:actionTypes.DELETED_TODO,
        payload:todoId
    }
}