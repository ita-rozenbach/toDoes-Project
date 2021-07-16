import * as actionTypes from '../actionsTypes';

//אתחול הסטור
const initialState = {
    todoArr: [],
    searchTodoArr: []
}


export const TodoReducer = (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
        case actionTypes.ALL_TODOES:
            return {
                ...state,
                todoArr: action.payload,
                searchTodoArr: action.payload
            }
        case actionTypes.TODO_SAVE_CHANGES:

      const todo=[...state.todoArr]
      todo.forEach((item) => { if (item.id == action.payload.id) item = action.payload;});
      const serch=[...state.searchTodoArr]
      serch.forEach((item) => { if (item.id == action.payload.id) item = action.payload;});
            return {
                ...state,
                todoArr:todo,
                searchTodoArr:serch
            }
        case actionTypes.ADDED_TODO:
            return {
                ...state,
                todoArr: [...state.todoArr, action.payload]
            }
        case actionTypes.SAVE_SEARCH_TODO:
            return {
                ...state,
                searchTodoArr:action.payload
            }   
            case actionTypes.DELETED_TODO:
                
                let todoes=state.todoArr;
                todoes=todoes.filter(item=>item.id!=action.payload);
                return{
                    ...state,
                    todoArr:todoes
                } 
    }
    return state;
}
export default TodoReducer;