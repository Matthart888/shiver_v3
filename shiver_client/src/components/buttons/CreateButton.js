import React, {Component } from 'react';
import { Link } from 'react-router-dom';

class CreateButton extends Component {
    render() {
        return(
            <div>
                <Link className="buttonLink" to="/newpost">
                    <button className="button">
                        <div className="buttonText">Create</div>
                        <span></span>
                    </button>
                </Link>
            </div>
        )
    }
}

export default CreateButton;