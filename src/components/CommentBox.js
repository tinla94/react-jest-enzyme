import React from 'react'

class CommentBox extends React.Component {
    state = { component: '' }

    handleChange = (e) => {
        this.setState({ comment: e.target.value })
    }

    handleSubmit = e => {
        e.preventDefault();
        // TODO - call an action creator
        // And save the comment 
        this.setState({ comment: ' '});
    }

    render() {
        return(
            <form action="">
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

export default CommentBox;