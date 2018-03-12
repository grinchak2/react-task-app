import { connect } from 'react-redux';
import CommentsView from '../components/CommentsView';
import { addComment } from '../actions';

const mapStateToProps = (state) => {
    return {
        tasks: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return  {
        addComment: (message, taskId) => {
            dispatch(addComment(message, taskId))
        }
    }
}

const Comments = connect(
    mapStateToProps,
    mapDispatchToProps
)(CommentsView);

export default Comments;