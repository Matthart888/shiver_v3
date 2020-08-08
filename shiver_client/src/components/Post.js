import React, { Component } from 'react';
import PostRepo from '../data/posts/PostRepo';
import EditButton from './buttons/EditButton';
import DeleteButton from './buttons/DeleteButton';
// import { browserHistory } from 'react-router';

class Post extends Component {

    constructor(props){
        super(props)
        this.handleDeletePost=this.handleDeletePost.bind(this)
        this.handleEditPost=this.handleEditPost.bind(this)
    }

    componentDidMount(){
        let post_id=this.props.match.params.post_id
        console.log("posts component mounted with " + post_id)
        PostRepo.getPost(post_id)
        .then(obj => {
            this.setState(obj); 
        })
    }

    handleDeletePost(){
        let post_id=this.props.match.params.post_id
        PostRepo.deletePost(post_id)
        .then(obj => {
            if(this.state) {
                const catagory = this.state.catagory
                window.location.href=`/${catagory.split(" ").join("").toLowerCase()}`
            } else {
                window.location.href='/'
            }
        })
    }

    handleEditPost(){
        let post_id=this.props.match.params.post_id
        window.location.href=`/post/${post_id}/edit`
    }

    render(){

        const isEmpty = this.state === undefined || this.state === null 
        if(isEmpty) {
            return <div></div>
        }
        const {title, summary, catagory, post } = this.state
        
        return(
            <div className="container">
            <div className="showCard">
                <h1>{title}</h1>
                <h3>{catagory}</h3>
                <h3>{summary}</h3>
                <p>{post}</p>
                <div className="buttons">
                    <EditButton onEdit={this.handleEditPost}/>
                    <DeleteButton onDelete={this.handleDeletePost}/>
                </div>
                </div>
            </div>
        );
    }
}

export default Post;