
import { useEffect } from "react";
import ToDo from "./ToDo";
import { getTodoes } from '../TodoesService';
import { connect } from 'react-redux';
import { Link, Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';
import AddTodo from './AddTodo';

const Todoes = (props) => {
    const { url, path } = useRouteMatch();
    useEffect(() => {
        //קריאה לשרת שמעדכנת בסטייט את המשימות של הגולש הנוכחי

        props.getTodoes(props.currentUser.id);
        
        // return () => {
        //     debugger
        //     props.saveAllChanges(props.TodoArr, props.currentUser.id);
        // };
    }, []);

    return (<>
        <div className="container">
            <Link to={url + "/addtodo"} className="btn btn-success btn-block my-2">
                הוספת משימה
          </Link>
            <Route path={path + "/addtodo"}>
                <AddTodo />
            </Route>
            <div> {props.searchTodoArr.map((item, index) => item.completed == false ? <ToDo todo={item} flag={true} key={index} /> : null)}
            </div>
        </div>
    </>);
}
const mapStateToProps = (state) => {
    return {
        TodoArr: state.todoPart.todoArr,
        searchTodoArr: state.todoPart.searchTodoArr,
        currentUser: state.userPart.currentUser
    }

}
export default connect(mapStateToProps, { getTodoes })(Todoes);
