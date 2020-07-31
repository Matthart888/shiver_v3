const server = 'http://localhost:3001'

class PostRepo {

    /**
     * @returns Promise<[{}]>
     */
    getOnePostFromCatagories(){
        return fetch(server + '/posts')
        .then(response => response.json())
        .catch(err => console.log(err))
    }
}

export default PostRepo;