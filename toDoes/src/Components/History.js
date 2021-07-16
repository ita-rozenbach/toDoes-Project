
import { connect } from 'react-redux';
import ToDo from "./ToDo";

const History = (props) => {
    return (<> 
    <div className="container"> {props.searchTodoArr.map((item, index) => item.completed == true ? 
    <ToDo todo={item} flag={false} key={index} />
     : null)}
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
export default connect(mapStateToProps, { })(History);