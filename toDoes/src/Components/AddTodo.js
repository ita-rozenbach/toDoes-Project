import { useState } from "react";
import { Redirect } from "react-router-dom";
import { SaveNewToDo } from '../TodoesService';
import { connect } from 'react-redux';




const AddToDo = (props) => {
    const [isClick, setIsClick] = useState(false);
    const [title, setTitle] = useState();
    const saveToDo = () => {
        setIsClick(true);

    }

    return (<>
        {!isClick ?
            <div className="container">
                <div className="form-group">
                    <textarea className="form-control" placeholder="תוכן משימה" rows="3" onBlur={(e) => setTitle(e.target.value)}></textarea>
                </div>
                <div className="row">
                    {/* <div className="col-6">
                        <div className="row">
                            <div className="col-4"><label >לביצוע עד ...</label></div>
                            <div className="col-8"><input type="date" className=" form-control" /></div>
                        </div>
                    </div> */}
                    <div className="col-6">
                        <input className="btn btn-success btn-block" type="button" value="שמור" onClick={() => {
                            props.SaveNewToDo({ userId: props.currentUser.id, title: title }, () => { setIsClick(true) })
                        }} /></div>
                    <div className="col-6">
                        <input type="button" className="btn btn-success btn-block" value="ביטול" onClick={() => { setIsClick(true) }} /></div>


                </div>
            </div> :
            <Redirect from="AddToDo" to="ToDoes" />
        }


    </>);
}

const mapStateToProps = (state) => {
    return {
        TodoArr: state.todoPart.todoArr,
        currentUser: state.userPart.currentUser

    }

}
export default connect(mapStateToProps, { SaveNewToDo })(AddToDo);



