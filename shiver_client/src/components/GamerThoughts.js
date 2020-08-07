import React, { Component } from 'react';
import CreateButton from './buttons/CreateButton';

/**
* @author
* @function GamerThoughts
**/

class GamerThoughts extends Component {
  render() {
      return(
        <div>
            Gamer Thoughts
            <div>
              <CreateButton />
            </div>
        </div>
      )
  }
}

export default GamerThoughts