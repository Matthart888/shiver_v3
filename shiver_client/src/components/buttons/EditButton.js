import React, {Component } from 'react';
import { Link } from 'react-router-dom';

class EditButton extends Component {
    render() {
        return(
            <div>
                <button className="button" onClick={this.props.onEdit}>
                <div className="buttonText">Edit</div>
                    <span></span>
                </button>
            </div>
        )
    }
}

export default EditButton;