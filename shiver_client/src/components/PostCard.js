import React, { Component } from 'react'

class PostCard extends Component {

    render () {
        const {title, summary, catagory, post } = this.props.NewPost
        return(
            <div className="card">
                <h1>{title}</h1>
                <h3>{catagory}</h3>
                <h3>{summary}</h3>
                <p>{post}</p>
            </div>
        );
    };
};

export default PostCard;