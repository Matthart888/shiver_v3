import React, { Component } from 'react';
// import GamerThoughts from './GamerThoughts';
import PostRepo from './../data/posts/PostRepo';
import CreateButton from './buttons/CreateButton';

/**
 * @author
 * @function Home
 **/

class Home extends Component {

    /**
     * @override Component.componentDidMount
     */

    componentDidMount(){
        new PostRepo().getOnePostFromCatagories()
        .then(arr => {
            console.log("recieved json " + arr)
            this.setState(arr)
        })
    }

    render() {
        return(
            <div className="container">
               {this.state === undefined || this.state==null? '' : JSON.stringify(this.state)}
               <div>
                   <CreateButton />
               </div>
            </div>
        )
    }
}

export default Home;