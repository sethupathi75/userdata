import React, { Component } from 'react';
import Nav from './nav'
export default class Tab extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         title:'Tab'
      };
    };
    
  render() {
    return (
      <div>
          <Nav />
          <div className="container">
              <div className="row mt-5">
                <a href='/form' className="btn btn-primary col-3"> TAB 1</a>
                <a href='/user' className="btn btn-primary offset-4 col-3"> TAB 2</a>
              </div>
          </div>
      </div>
    );
  }
}
