

import { connect } from 'react-redux';
import './App.css';
import { addPost, getPosts } from "../store/actions"
import { useEffect } from 'react';

function App(props) {

  return (
    <div className="App">
      {props.arr.length}
      <input type="button" onClick={() => { props.addPost({ id: 2, name: "ttt" }) }} value="הוסף" />
      <input type="button" onClick={props.getPosts} value="קבל את כל הפוסטים" />
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    arr: state.postPart.postsArr
  }

}
export default connect(mapStateToProps, { addPost, getPosts })(App);
