import React, { Component } from 'react'


class NewPost extends Component {

    state={
        title: "",
        catagory: "",
        summary: "",
        post: "",
        posts: [],
    
    }

    handleSubmit = (e) => {
        e.preventDefault();
        fetch("http://localhost:3001/", {
            body: JSON.stringify({
                title: this.state.title,
                catagory: this.state.catagory,
                summary: this.state.summary,
                post: this.state.post,
            }), method: "POST",
            headers: {
                Accept: "application/json, text/plain, */*", 
                "Content-Type": "application/json", 
            }
        }) 
        .then(response => response.json())
        .then(newPost => console.log(newPost))
        
        // this.props.history.push("/")
    }

    handleChange = (event) => {
        this.setState({
            [event.target.id]:event.target.value
        })
    }

    componentDidMount

  render() {
    return (
        <div>
            <h1>New Post</h1>
            <form onSubmit={this.handleSubmit} action="/" method="POST">
                <div className="form-group">
                    <label htmlFor="title">Post Title</label>
                    <input onChange={this.handleChange} id="title" type="title" className="form-control" name="title"/>
                </div>
                <div className="form-group">
                    <label htmlFor="catagory">Select Catagory</label>
                    <select onChange={this.handleChange} id="catagory" className="form-control" name="catagory">
                        <option value="">Select</option>
                        <option value="News">News</option>
                        <option value="Tips and Tricks">Tips and Tricks</option>
                        <option value="Guides">Guides</option>
                        <option value="Gamer Thoughts">Gamer Thoughts</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="summary">Post Summary</label>
                    <textarea  onChange={this.handleChange} id="summary" className="form-control" name="summary" rows="3" placeholder="A Brief Summary of Your Post"></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="post">Full Content</label>
                    <textarea  onChange={this.handleChange} id="post" className="form-control" name="post" rows="5" placeholder="Your Content"></textarea>
                </div>
                <input type="submit" name="" value="Create New Post"/>
            </form>
        </div>
    );
  }
}

export default NewPost;