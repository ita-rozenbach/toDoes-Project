import * as actionTypes from '../actionsTypes';

//הוספת משתמש חדש לסטור
export const AddUser=(user)=>{
    return {
        type:actionTypes.USER_ADDED,
        payload:user
    }
}
// //שמירת כל המשתנים בסטור
// export const saveUsers=(users)=>{
//     return {
//         type:actionTypes.SAVE_USERS,
//         payload:users
//     }
// }
export const saveUser=(user)=>{
    return {
        type:actionTypes.SAVE_USER,
        payload:user
    }
}
export const saveWrongMail=(flag)=>{
    debugger
    return {
        type:actionTypes.UPDATE_WROONG_MAIL,
        payload:flag
    }
}
export const notExistsUser=(flag)=>{
    return{
        type:  actionTypes.NOT_EXISTS_USER,
        payload:flag
    }
}
export const saveIsaddNewUser=(flag)=>{
    return {
        type:actionTypes.IS_ADD_NEW_USER,
        payload:flag
    }
}
export const saveGotoDialog=(flag)=>{
    return {
        type:actionTypes.IS_GOTO_DIALOG,
        payload:flag
    }
}
export default AddUser;