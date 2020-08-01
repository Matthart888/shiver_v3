import React, { Component } from 'react'

class NewPost extends Component {
  render() {
    return (
        <div>
            <h1>New Post</h1>
            <form action="/" method="POST">
                <div className="form-group">
                    <label htmlFor="title">Post Title</label>
                    <input type="title" className="form-control" name="title"/>
                </div>
                <div className="form-group">
                    <label htmlFor="catagory">Select Catagory</label>
                    <select className="form-control" name="catagory">
                        <option value="News">News</option>
                        <option value="Tips and Tricks">Tips and Tricks</option>
                        <option value="Guides">Guides</option>
                        <option value="Gamer Thoughts">Gamer Thoughts</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="summary">Post Summary</label>
                    <textarea className="form-control" name="summary" rows="3" placeholder="A Brief Summary of Your Post"></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="post">Full Content</label>
                    <textarea className="form-control" name="post" rows="5" placeholder="Your Content"></textarea>
                </div>
                <input type="submit" name="" value="Create New Post"/>
            </form>
        </div>
    );
  }
}

export default NewPost;