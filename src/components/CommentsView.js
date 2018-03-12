import React from 'react';
import PropTypes from 'prop-types';
import AddComment from './AddComment';
import Comment from './Comment';

class CommentsView extends React.Component {
    constructor(props){
        super(props);
        this.addComment = this.addComment.bind(this);
    }

    addComment(text, taskId) {
        this.props.addComment(text, taskId);
    }

    render() {
        let tasks = this.props.tasks;
        let taskId;
        let comments = null;

        let task = tasks.filter((value, index) => {
            if(value.active === true) {
                taskId = index;
                return true;
            }

            return false;
        });

        if(task.length === 1) {
            comments = task[0].comments;
        }

        let commentsBlock = null;
        
        if(comments !== null) {
            let commentsItems = comments.map(function(item, key){
                let backColor;
                
                if( key % 2 == 0) {
                    backColor = '#FF8A00';
                } else {
                    backColor = '#47568C';
                }

                return <Comment text={item.text} backColor={backColor} key={key} />
            });

            commentsBlock =
                <div> 
                    <ul className="list-group">
                        {commentsItems}
                    </ul>
                    <AddComment addCommentFunc={this.addComment} taskId={taskId} />
                </div>
        } else {
            commentsBlock = <div>Choose task to see comments.</div>
        }

        return(
            <div>
                <h2>Comments</h2>
                {commentsBlock}
            </div>
        );
    }
}

CommentsView.propTypes = {
    text: PropTypes.string.isRequired
}

export default CommentsView;