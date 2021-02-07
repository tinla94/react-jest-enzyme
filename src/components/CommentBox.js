import React from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';

class CommentBox extends React.Component {
    state = { component: '' }

    handleChange = (e) => {
        this.setState({ comment: e.target.value })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.saveComment(this.state.commnent);
        this.setState({ comment: ' '});
    }

    render() {
        return(
            <form>
                <h4>Add a comment</h4>
                <textarea  
                    onChange={this.handleChange}
                    value={this.state.comment}/>
                <div>
                    <button>Submit Comment</button>
                </div>
            </form>
        )
    }
}


export default connect(null, actions)(CommentBox);