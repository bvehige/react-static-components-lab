import React, { Component } from 'react';

class CatComponent extends Component {
  render() {
    return (
      <div className="bar" id="cat">
        <img src="/cat.gif" alt="cat" />
      </div>
    );
  }
}
export default CatComponent;