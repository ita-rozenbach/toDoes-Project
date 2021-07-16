import { useState } from "react";
import { getUserByDetails, newUser } from '../UserService';
import Dialog from "./Dialog";
import { } from '../store/actions';
import { connect } from 'react-redux';
import './Login.css';
import * as EmailValidator from 'email-validator';
import { useHistory } from "react-router-dom";
const validatorName = (name) => {
    if (name.length < 2)
        return false;
    return name.match(/[a-zA-z ]/g).length == name.length ? true : false;
}
const Register = (props) => {
    const history=useHistory();
    const [name, setName] = useState("");
    const [UserName, setUserName] = useState("");
    const [mail, setMail] = useState("");
  
    const [isDone, setIsDone] = useState(false);
    const [currentMail, setCurrentMail] = useState(true);
    const [currentName, setCurrentName] = useState(true);
    const [currentUserName, setCurrentUserName] = useState(true);

if(props.gotoDialog)
history.push('/dialog');
    return (
        <>
            <div className="container body">
                <div className="form-group">
                    <label > שם</label>
                    <input className="form-control" type="text" onBlur={(e) => { setName(e.target.value) }} />
                    {currentName == false ? <div className="invalid">שם לא חוקי. שם חייב להכיל רק אותיות ורווחים ולפחות שתי תווים.</div> : ""}

                </div>
                <div className="form-group"><label > שם משתמש </label>
                    <input className="form-control" type="text" onBlur={(e) => { setUserName(e.target.value) }} />
                    {currentUserName == false ? <div className="invalid">שם לא חוקי. שם חייב להכיל רק אותיות ורווחים ולפחות שתי תווים.</div> : ""}
                </div>
                <div className="form-group">
                    <label >הכנס כתובת אימייל </label>
                    <input className="form-control" type="text" onBlur={(e) => { setMail(e.target.value) }} />
                    {currentMail == false ? <div className="invalid">כתובת מייל לא חוקי, הכנס שוב.</div> : ""}
                </div>
                <input type="button" className="btn btn-success btn-block" value="כניסה" onClick={() =>
                 {
                    if (!EmailValidator.validate(mail) || !validatorName(name) || !validatorName(UserName)) {
                        setCurrentName(true);
                        setCurrentUserName(true);
                        setCurrentMail(true);
                        if (!EmailValidator.validate(mail))
                            setCurrentMail(false);
                        if (!validatorName(name))
                            setCurrentName(false);
                        if (!validatorName(UserName))
                            setCurrentUserName(false);
                        return;
                    }
                    setCurrentName(true);
                    setCurrentUserName(true);
                    setCurrentMail(true);
                    props.newUser(name, UserName, mail);
                }} />
                {props.addnewuser?<div className="invalid">משתמש קיים.</div>:""}
                {/* {isDone?<Dialog></Dialog>:null} */}
            </div>
        </>
    );
}
const mapStateToProps = (state) => {
    return {
        UserArr: state.userPart.userArr,
        addnewuser:state.userPart.addNewUser ,
        gotoDialog:state.userPart.gotoDialog
       }

}
export default connect(mapStateToProps, { getUserByDetails, newUser })(Register);


