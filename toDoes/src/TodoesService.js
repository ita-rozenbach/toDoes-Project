import axios from "axios";
import { saveTodoes } from './store/actions'
import { addTodo,deleteTodo, saveChanges } from './store/actions/Todo'

export const getTodoes = (userId) => {
    debugger
    return (dispatch) => {
        axios.get("http://localhost:8080/api/toDo/getAllTodos").then((succ) => {
            dispatch(saveTodoes(succ.data));

        }).catch((err) => {
        })
        // axios.get("http://localhost:3000/todoes/all?userId=" + userId).then((succ) => {
        //     dispatch(saveTodoes(succ.data));

        // }).catch((err) => {
        // })
    }
}
export const SaveNewToDo = (todo, func) => {
    return (dispatch) => {
//http://localhost:8080/api/toDo/add?title=from react
axios.post(`http://localhost:8080/api/toDo/add?title=`+todo.title).then((succ) => {

            dispatch(addTodo(succ.data));
            dispatch(func());
        }).catch((err) => {
        })        
// axios.post(`http://localhost:3000/todoes/add?userId=${todo.userId}&title=${todo.title}`).then((succ) => {

        //     dispatch(addTodo(succ.data));
        //     dispatch(func());
        // }).catch((err) => {
        // })
    }
}
// export const saveAllChanges = (todoArr, userId) => {
//     console.log("saveAllChanges ggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg")
//     return (dispatch) => {
//         axios.post(`http://localhost:3000/todoes/update?todoArr=${JSON.stringify(todoArr)}&userId=${userId}`).then((succ) => {
//             console.log("saveAllChanges ----- ggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg")
            
//         }).catch((err) => {
//         })
//     }

// }
export const saveOneTodo=(todo)=>{
    debugger
    return (dispatch)=>{
        axios.post(`http://localhost:8080/api/toDo/update?completed=true&id=`+todo.id).then((succ)=>{
            dispatch(saveChanges(succ.data));
        })
        // axios.post(`http://localhost:3000/todoes/update?todoId=${todo.id }`).then((succ)=>{
        //     dispatch(saveChanges(succ.data));
        // })
    }
}
// export const search = (props) => {
//     props.todoArr.filter((item) => { item.title == props.e.target.value })
// }
export const deleteByTodoId = (id) => {
    
    return (dispatch)=>{
        
        axios.delete  (`http://localhost:8080/api/todo/delete/?todoId=${id}`).then((succ) => {
            
            dispatch(deleteTodo(id));
        }).catch((err) => {
        })
    }
    // return (dispatch)=>{
    //     debugger
    //     axios.delete  (`http://localhost:3000/todoes/delete?todoId=${id}`).then((succ) => {
    //         debugger
    //         dispatch(deleteTodo(id));
    //     }).catch((err) => {
    //     })
    // }
    //http://localhost:8080/api/todo/delete/?
}