import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PostCard extends Component {

    render () {
        const {title, summary, catagory, _id } = this.props.NewPost
        return(
                <Link className="link" to={`/post/${_id}`}>
                    <div className="homeCard">
                        <h1 className="card-header">{title}</h1>
                        <h3>{catagory}</h3>
                        <h3>{summary}</h3>
                    </div>
                </Link>
        );
    };
};

export default PostCard;