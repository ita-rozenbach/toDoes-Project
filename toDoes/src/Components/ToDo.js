import React, { useRef, useEffect, useState } from 'react';
import './ToDo.css';
import { connect } from 'react-redux';
import { saveChanges } from '../store/actions';
import { deleteByTodoId ,saveOneTodo} from '../TodoesService'
import { Redirect } from 'react-router-dom';
const ToDo = (props) => {
    //מקבל משימה
    const divTodo = useRef(null);
    const [isDelete, setIsDelete] = useState(false);
    useEffect(() => {

    }, [])
    return (<>
        {isDelete ? <Redirect to={{ pathname: "/todoes" }} /> :
            <div id="ToDo" ref={divTodo} className="p-2 my-1 ">
                <div className="row">
                    <div className="form-check col-9">
                        <label className="form-check-label">
                            {props.flag ? (<input className="form-check-input ml-2" type="checkbox" display={props.flag ? "block" : "none!important"} onChange={(e) => {
                                //לגשת לסטייט ולעדכן שהמשימה בוצעה                
                                props.todo.completed =true ;
                                props.saveOneTodo(props.todo);
                                // if (e.target.checked == true)
                                //     divTodo.current.classList.add("done");
                                // else
                                //     divTodo.current.classList.remove("done");

                            }} />) : ""}
                            <label className="mr-3">
                                {props.todo.title}</label>
                        </label>
                    </div>

                    <div className="col-3"><button className="btn btn-outline-success btn-block" onClick={() => {
                        props.deleteByTodoId(props.todo.id);
                        setIsDelete(true);
                    }}>מחיקת משימה</button></div>
                </div>
            </div>
        }
    </>
    );
}
const mapStateToProps = (state) => {
    return {
        TodoArr: state.todoPart.todoArr,
        currentUser: state.userPart.currentUser
    }

}
export default connect(mapStateToProps, { saveOneTodo, deleteByTodoId })(ToDo);

