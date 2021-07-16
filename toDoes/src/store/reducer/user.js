import User from '../actions';
import * as actionTypes from '../actionsTypes';
import { AllUsers } from '../../UserService'


//אתחול הסטור
const initialState = {
    userArr: [],
    currentUser: undefined,
    wrongMail:false,
    existsUser:false,
    addNewUser:false,
    gotoDialog:false
}


export const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.USER_ADDED:
            return {
                ...state,
                userArr: [...state.userArr, action.payload]
            }
        case actionTypes.SAVE_USER:
            return {
                ...state,
                currentUser: action.payload
            
            }
        case actionTypes.UPDATE_WROONG_MAIL:
            return{
                ...state,
                wrongMail:action.payload
            }  
        case actionTypes.NOT_EXISTS_USER:
            return{
                ...state,
                existsUser:action.payload
            }  
            case actionTypes.IS_ADD_NEW_USER:
                return{
                    ...state,
                    addNewUser:action.payload
                }
                case actionTypes.IS_GOTO_DIALOG:
                return{
                    ...state,
                    gotoDialog:action.payload
                }
    }
    return state;
}
export default UserReducer;