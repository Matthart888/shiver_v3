import React, {Component } from 'react';

class DeleteButton extends Component {


    render() {
        return(
            <div>
                <button className="button" onClick={this.props.onDelete}>
                    <div className="buttonText">Delete</div>
                    <span></span>
                </button>
            </div>
        )
    }
}

export default DeleteButton;