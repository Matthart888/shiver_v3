const server = 'http://localhost:3001'

class PostRepo {

    static posts(){
        this._posts = this._posts || {}
        return {}
    }
    /**
     * @returns Promise<[{}]>
     */
    static getOnePostFromCatagories(){
        return fetch(server + '/posts')
        .then(response => response.json())
        .then(objects => {
            for(let key in Object.keys(objects)) {
                let obj=objects[key]
                this.posts()[obj._id] = obj
            }
            return objects
        })
    }

    static getPostFromCatagory(catagory) {
        return fetch(server + `/posts/catagories/${catagory}`)
        .then(response => response.json())
        .then(objects => {
            for(let key in Object.keys(objects)) {
                let obj=objects[key]
                this.posts()[obj._id] = obj
            }
            return objects
        })
    }

    static getPost(post_id) {
        if (this.posts().hasOwnProperty(post_id)){
            return Promise.resolve(this.posts()[post_id])
        } 
        return fetch(server + `/${post_id}`)
        .then(response => response.json())
        .then(obj => {
            this.posts()[obj._id] = obj
            return obj
        })
    }

    static editPost(post_id, newValues) {
        return fetch(server + `/posts/${post_id}`, {
            body: JSON.stringify({
                title: newValues.title,
                catagory: newValues.catagory,
                summary: newValues.summary,
                post: newValues.post,
            }), method: "POST",
            headers: {
                Accept: "application/json, text/plain, */*", 
                "Content-Type": "application/json", 
            }
        }) 
        .then(response => response.json())
        .then(newPost => console.log(newPost))
    }

    static deletePost(post_id) {
        return fetch(server + `/posts/${post_id}`, {
            method: 'DELETE',
        })
        .then(response => response.json())
        .then(res => {
            delete this.posts()[post_id]
        })
    }
}

export default PostRepo;