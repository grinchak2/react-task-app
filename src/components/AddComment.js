import React from 'react';

class AddComment extends React.Component {
    constructor(props){
        super(props);
        this.addCommentFunc = this.addCommentFunc.bind(this);
        this.keydownHandler = this.keydownHandler.bind(this);
    }

    addCommentFunc(text, taskId) {
        this.props.addCommentFunc(text, taskId);
        this.textArea.value = '';
    }

    keydownHandler(e) {
        if(e.keyCode===13 && e.ctrlKey) {
            let text = this.textArea.value;
            text = text.trim();

            if(text.length === 0) {
                alert('Введите комментарий');
                return false;
            }

            let taskId = this.textArea.getAttribute('data-task-id');

            this.addCommentFunc(text, taskId);
        }
    }

    componentDidMount() {
        document.addEventListener('keydown', this.keydownHandler);
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.keydownHandler);
    }

    render() {
        return(
            <div>
                <div className="comment comment-add">
                    <div className="square"></div>
                    <div className="content">
                        <textarea 
                            placeholder="Type comment here..."
                            className="form-control"
                            ref={(textarea) => this.textArea = textarea}
                            data-task-id={this.props.taskId}
                        >
                        </textarea>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddComment;