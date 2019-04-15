import React, { Component } from 'react';
import './InputPage.css';

class InputPage extends Component {
  this
  render() {
    return (
      <div className="main-delivery-input">
        <form>
          <input className={`input-border green`} type="text" placeholder="Enter new destination in US" />
        </form>
        <div class="text-danger">This field cannot be blank</div>
      </div>
    );
  }
}

export default InputPage;
