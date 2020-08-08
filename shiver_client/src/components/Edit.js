import React, { Component } from 'react';
import PostRepo from '../data/posts/PostRepo';
import { Redirect } from 'react-router';

class Edit extends Component {

    state={}

    handleSubmit = (e) => {
        
        e.preventDefault();
        let post_id=this.props.match.params.post_id
        PostRepo.editPost(post_id, this.state.newValues)
        .then(() => {
            window.location.href=`/post/${post_id}`
        })
    }

    componentDidMount(){
        let post_id=this.props.match.params.post_id
        console.log("posts component mounted with " + post_id)
        PostRepo.getPost(post_id)
        .then(obj => {
            this.setState({ogPost:obj, newValues: Object.assign({}, obj)}) 
        })
    }

    handleChange = (event) => {
        let currentValues = this.state.newValues
        currentValues[event.target.id] = event.target.value
        this.setState({
            newValues : currentValues
        })
    }

  render() {

    const isEmpty = this.state === undefined || this.state === null ||this.state.ogPost === undefined
    if(isEmpty) {
        return <div></div>
    }
    const {title, summary, catagory, post } = this.state.ogPost

    return (
        <div className="container">
            <h1>New Post</h1>
            <form onSubmit={this.handleSubmit} action="/" method="POST">
                <div className="form-group">
                    <label htmlFor="title">Post Title</label>
                    <input onChange={this.handleChange} id="title" type="title" className="form-control" name="title" defaultValue={title}/>
                </div>
                <div className="form-group">
                    <label htmlFor="catagory">Select Catagory</label>
                    <select onChange={this.handleChange} id="catagory" className="form-control" name="catagory" defaultValue={catagory}>
                        <option value="">Select</option>
                        <option value="News">News</option>
                        <option value="Tips and Tricks">Tips and Tricks</option>
                        <option value="Guides">Guides</option>
                        <option value="Gamer Thoughts">Gamer Thoughts</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="summary">Post Summary</label>
                    <textarea defaultValue={summary} onChange={this.handleChange} id="summary" className="form-control" name="summary" rows="3" placeholder="A Brief Summary of Your Post"></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="post">Full Content</label>
                    <textarea defaultValue={post} onChange={this.handleChange} id="post" className="form-control" name="post" rows="5" placeholder="Your Content"></textarea>
                </div>
                <input type="submit" name="" value="Update Post"/>
            </form>
        </div>
    );
  }
}

export default Edit;