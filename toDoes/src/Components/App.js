import './App.css';
import Login from './Login';
import Register from './Register';
import ToDoes from './ToDoes';
import History from './History';
import AddTodo from './AddTodo';
import NotFound from './NotFound';
import { Link, Redirect, Route, Switch } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux'
import { AllUsers } from '../UserService';
import { useEffect } from 'react';
import { saveUser } from '../store/actions/User';
import axios from 'axios';
import Dialog from './Dialog';
import { saveSearchTodoArr } from '../store/actions/Todo'
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
function App(props) {
  const dispach = useDispatch();
  const search = (e) => {
    let arr = props.TodoArr.filter(item => item.title.indexOf(e.target.value) != -1);
    props.saveSearchTodoArr(arr);
  }
  //לינקים
  return (
    <><div className="container-fluid">
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <ul className="navbar-nav">
          <li className="nav-item px-2">
            <a className="a color-green" >אתר המשימות שלי</a>
          </li>
          {props.currentUser == undefined ? <>
            <li className="nav-item px-2">
              <Link to="/login" className="a">
                Login
          </Link>
            </li>
            <li className="nav-item px-2">
              <Link to="/register" className="a">
                Register
          </Link>
            </li>
           
          </> : <>
              <li className="nav-item px-2">
                <Link to="/history" className="a">
                  History
          </Link>
              </li>
              <li className="nav-item px-2">
                <Link to="/todoes" className="a">
                  ToDoes
          </Link>
              </li>
                <li className="nav-item px-2">
                  <input className="form-control " type="text" placeholder="search " onChange={search} />

                </li>
                <li className="nav-item px-2">
                  <button className="btn btn-success" onClick={() => { props.saveUser(undefined) }}>log out</button>
                </li>
                <li className="nav-item px-2 a ">
                  שלום {props.currentUser.name}
                </li>
              </>}

        </ul>
      </nav>
    </div>
      <Switch>
        {props.currentUser == undefined ? <>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/dialog">
            <Dialog />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route exact path="/">
            <Login />
          </Route>
        </> : <><Route path="/todoes">
          <ToDoes />
        </Route>
            <Route path="/history">
              <History />
            </Route>
            <Route path="/dialog">
            <Dialog />
          </Route>

            <Route path="/">
              <Redirect to={{ pathname: "/todoes" }} />
            </Route>
          </>}


      </Switch>
    </>
  );

}


const mapStateToProps = (state) => {
  return {
    UserArr: state.userPart.userArr,
    TodoArr: state.todoPart.todoArr,
    searchTodoArr: state.todoPart.searchTodoArr,
    currentUser: state.userPart.currentUser
  }

}

export default connect(mapStateToProps, { saveUser, saveSearchTodoArr })(App);
//לשאול את המורה היום
//1. למה נשלח מערך ריק בפעם ראשונה ובפעם שניה לא
//2. ניתובים: איך מנתבים דרך קוד ולא דרםREDIRCT
//3.