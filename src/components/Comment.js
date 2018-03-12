import React from 'react';
import PropTypes from 'prop-types';

class Comment extends React.Component {
    render() {
        let backColor = this.props.backColor;
        return(
            <div className="comment">
                <div className="square" style={{background: backColor}}></div>
                <div className="content">
                    {this.props.text}
                </div>
            </div>
        );
    }
}

Comment.propTypes = {
    text: PropTypes.string.isRequired,
}

export default Comment;