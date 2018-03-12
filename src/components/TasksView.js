import React from 'react';
import PropTypes from 'prop-types';
import AddTask from './AddTask';
import Task from './Task';

class TasksView extends React.Component {
    constructor(props){
        super(props);
        this.addTask = this.addTask.bind(this);
        this.removeTask = this.removeTask.bind(this);
        this.selectTask = this.selectTask.bind(this);
    }

    addTask(name) {
        this.props.addTask(name);
    }

    removeTask(id) {
        this.props.removeTask(id);
    }

    selectTask(id) {
        this.props.selectTask(id);
    }

    render() {
        var tasksItems = this.props.tasks.map(function(item, key){
            return <Task {...item} id={key} removeTaskFunc={this.removeTask} selectTaskFunc={this.selectTask} key={key} />
        }, this);

        return(
            <div>
                <h2>Tasks</h2>
                <AddTask addTaskFunc={this.addTask} />
                <ul className="list-group">
                    {tasksItems}
                </ul>
            </div>
        );
    }
}

TasksView.propTypes = {
    name: PropTypes.string.isRequired
}

export default TasksView;