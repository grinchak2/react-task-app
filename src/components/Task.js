import React from 'react';
import PropTypes from 'prop-types';

class Task extends React.Component {
    constructor(props){
        super(props);
        this.removeTaskFunc = this.removeTaskFunc.bind(this);
        this.selectTaskFunc = this.selectTaskFunc.bind(this);
    }

    removeTaskFunc(e) {
        e.stopPropagation();
        let id = this.props.id;
        this.props.removeTaskFunc(id);
    }

    selectTaskFunc() {
        let id = this.props.id;
        this.props.selectTaskFunc(id);
    }

    render() {
        let classes = 'task ';
        if(this.props.active === true) {
            classes += ' active';
        }

        return(
            <div className={classes} onClick={this.selectTaskFunc}>
                <div className="border-active"></div>
                <span className="name">
                    {this.props.name}
                </span>
                <span className="amount badge badge-success badge-pill">
                    { this.props.comments.length }
                </span>
                <button className="btn btn-outline-danger" onClick={this.removeTaskFunc}>Delete</button>
            </div>
        );
    }
}

Task.propTypes = {
    name: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired
}

export default Task;