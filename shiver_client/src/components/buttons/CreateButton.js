import React, {Component } from 'react';
import { Link } from 'react-router-dom';

class CreateButton extends Component {
    render() {
        return(
            <div>
                <button>
                    <Link className="buttonLink" to="/newpost">Create</Link>
                </button>
            </div>
        )
    }
}

export default CreateButton;