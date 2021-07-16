import axios from "axios"
import { saveUsers, AddUser, saveUser, saveWrongMail, notExistsUser, saveIsaddNewUser, saveGotoDialog } from './store/actions/User';
import { Link, Route, Switch } from 'react-router-dom';
import * as Stutus from './Status';




export const getUserByDetails = (name, mail) => {
    return (dispatch) => {
        //http://localhost:8080/api/user/getUserByDetails?userName=gf&mail=g0583291321@gmail.com
        // axios.get(`http://localhost:3000/users/getUserByDetails?userName=${name}`).then((succ) => {
        //     if (succ.data !=0) {
        //         if (succ.data.mail == mail) {
        //             dispatch(saveWrongMail(false));
        //             dispatch(saveUser(succ.data));

        //         }
        //         else
        //             dispatch(saveWrongMail(true));
        //     }

        //     else {
        //         dispatch(notExistsUser(true))
        //     }
        //     //במקרה של שגיאה - הדפסת השגיאה בקונסול
        // }).catch((er) => {

        // })
        axios.get(`http://localhost:8080/api/user/getUserByDetails?userName=${name}&mail=${mail}`).then((succ) => {
            console.log(succ);
            debugger;
            if (succ.data.massage == "wrong mail")
                dispatch(saveWrongMail(true));
            else if (succ.data.massage =="not exists userName")
                dispatch(notExistsUser(true))
            else {
                dispatch(saveWrongMail(false));
                dispatch(saveUser(succ.data));
            }



            //במקרה של שגיאה - הדפסת השגיאה בקונסול
        }).catch((er) => {

        })
    }
}


//פונקציה השולחת בקשה לשרת ומקבלת את כל המשתמשים הקיימים ושומרת אותם בסטור
export const AllUsers = () => {
    return (dispatch) => {
        //בקשה לשרת
        axios.get("http://localhost:3000/users/all").then((succ) => {
            //הפעלת אקשן לשמירת המשתמשים בסטור
            let data = succ.data;
            dispatch(saveUser(data[data.length - 1]));
            //במקרה של שגיאה - הדפסת השגיאה בקונסול
        }).catch((er) => {

        })
    }
}


//הוספת משתמש
export const newUser = (name, userName, mail) => {
    //http://localhost:8080/api/user/add?name=gile&userName=gf&mail=gsgfd@gmail.com

    return (dispatch) => {
        //שליחת המשתמש לשרת
        axios.post(`http://localhost:8080/api/user/add?name=${name}&userName=${userName}&mail=${mail}`).then((succ) => {
            //הפעלת אקשן של שמירת משתמש חדש בסטור   
            dispatch(AddUser({ name: name, userName: userName, mail: mail }))
            dispatch(saveGotoDialog(true));
            //  dispatch(saveUser({ name: name, mail: mail }))


            //במקרה של שגיאה הדפסת השגיאה לקונסול
        }).catch((er) => {
        })
    }
    // return (dispatch) => {
    //     //שליחת המשתמש לשרת
    //     axios.post(`http://localhost:3000/users/add?name=${name}&userName=${userName}&mail=${mail}`).then((succ) => {
    //         //הפעלת אקשן של שמירת משתמש חדש בסטור   
    //         debugger
    //         if (succ.data == "exists") {
    //             dispatch(saveIsaddNewUser(true));
    //         }
    //         else {
    //             dispatch(AddUser({ name: name, userName: userName, mail: mail }))
    //             dispatch(saveGotoDialog(true));
    //             //  dispatch(saveUser({ name: name, mail: mail }))
    //         }

    //         //במקרה של שגיאה הדפסת השגיאה לקונסול
    //     }).catch((er) => {
    //     })
    // }
}


