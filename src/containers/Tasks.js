import { connect } from 'react-redux';
import TasksView from '../components/TasksView';
import { addTask, removeTask, selectTask } from '../actions';

const mapStateToProps = (state) => {
    return {
        tasks: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return  {
        addTask: (name) => {
            dispatch(addTask(name))
        },
        removeTask: (id) => {
            dispatch(removeTask(id))
        },
        selectTask: (id) => {
            dispatch(selectTask(id))
        }
    }
}

const Tasks = connect(
    mapStateToProps,
    mapDispatchToProps
)(TasksView);

export default Tasks;