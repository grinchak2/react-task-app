import React from 'react';

class AddTask extends React.Component {
    constructor(props){
        super(props);
        this.addTaskFunc = this.addTaskFunc.bind(this);
    }

    addTaskFunc() {
        let name = this.textInput.value;
        this.props.addTaskFunc(name);
        this.textInput.value = '';
    }
    
    render() {
        return(
            <div class="add-task">
                <input type="text" className="form-control" placeholder="Type name here..." ref={(input) => this.textInput = input} />
                <button className="btn btn-success" onClick={this.addTaskFunc}>Add new</button>
            </div>
        );
    }
}

export default AddTask;