import axios from "axios";
import { useEffect, useState } from "react";
import { getUserByDetails } from '../UserService';
import { } from '../store/actions';
import { connect } from 'react-redux'
import { saveUsers } from "../store/actions/User";
import { useSelector } from 'react-redux';
import { Redirect, Route, useHistory } from "react-router-dom";
import * as Stutus from '../Status';
import './Login.css';
import * as EmailValidator from 'email-validator';
const validatorName = (name) => {
  if (name.length < 2)
    return false;
  return name.match(/[a-zA-z ]/g).length == name.length ? true : false;
}
const Login = (props) => {
  let history = useHistory();
  const [name, setName] = useState();
  const [mail, setMail] = useState("");
  const [currentMail, setCurrentMail] = useState(true);
  const [currentName, setCurrentName] = useState(true);
  const selector = useSelector((state) => state.userPart)
  if (props.currentUser) {
    history.push("/todoes");
  }
  if (props.existsUser) {
    history.push('/register');
  }
  return (
    <><div className="container body">
      <form className="mt-3">
        <div className="form-group">
          <label>הקש שם</label>
          <input className="form-control" type="text" onBlur={(e) => { setName(e.target.value) }} />
          {currentName == false ? <div className="invalid">שם לא חוקי. שם חייב להכיל רק אותיות ורווחים ולפחות שתי תווים.</div> : ""}
        </div>
        <div>
          <label>הכנס כתובת אימייל</label>
          <input className="form-control" type="text" onBlur={(e) => { setMail(e.target.value) }} />
          {currentMail == false ? <div className="invalid">כתובת מייל לא חוקי, הכנס שוב.</div> : ""}
          {props.wrongMail ? <div className="invalid">מייל שגוי.</div> : ""}
        </div>
        <div className="form-group"></div>
        <input className="btn btn-success btn-block mt-2" type="button" value="כניסה" onClick={() => {
          if (!EmailValidator.validate(mail) || !validatorName(name)) {
            setCurrentMail(true);
            setCurrentName(true);
            if (!EmailValidator.validate(mail)) {
              setCurrentMail(false);
            }

            if (!validatorName(name))
              setCurrentName(false);
            return;
          }
          setCurrentMail(true);
          setCurrentName(true);
          props.getUserByDetails(name, mail);
          // debugger
          // history.push('/register');
          // switch (status) {
          //   case Stutus.GOOD_USER: history.push('/todoes');
          //     break;
          //   case Stutus.NOT_EXISTS: history.push('/register');
          //     break;
          //   default://הודעה שהסיסמא שגויה
          // }
          return <Route path=""></Route>
          // <Redirect to={{pathname:"/todoes"}}/>
          //  console.log(props.UserArr.filter(item => item.name === name && item.password === password));
          //  props.currentUser={}
        }} />

      </form>
    </div>

    </>
  );

}

const mapStateToProps = (state) => {
  return {
    UserArr: state.userPart.userArr,
    currentUser: state.userPart.currentUser,
    wrongMail: state.userPart.wrongMail,
    existsUser:state.userPart.existsUser
  }

}
export default connect(mapStateToProps, { getUserByDetails })(Login);







