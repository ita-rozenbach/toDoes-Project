import { Redirect, Route } from 'react-router-dom';
import Todoes from './ToDoes';
import { useEffect } from 'react';
import { connect } from 'react-redux'

import { AllUsers } from '../UserService';
import { propTypes } from 'react-bootstrap/esm/Image';
import { useHistory } from 'react-router-dom';
const { Link, Router } = require("react-router-dom")

const Dialog = (props) => {
  //הצגת הודעה כי נרשם בהצלחה
  // useEffect(() => {
  //   return () => {
  //     props.AllUsers();
  //   }
  // }, [])
  let history=useHistory();
  return (<>
    <div className="text-center mt-3 jumbotron">
      <h2>!you register</h2>
      <button onClick={()=>{history.push('/todoes')}} className="btn btn-success p-2 px-5 mt-3">
        OK
        </button>
      {/* <Route path="/todoes"><Todoes/></Route> */}
    </div>
  </>);
}
const mapStateToProps = (state) => {
  return {
    currentUser: state.userPart.currentUser
  }

}
export default connect(mapStateToProps, {  })(Dialog);