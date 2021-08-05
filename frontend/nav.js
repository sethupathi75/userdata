import React, { Component } from 'react';

class Nav extends Component {
  render() {
    return (
      <div>
          <nav class=" navbar over sticky-top navbar-expand-lg navbar-dark bg-dark">
      <div className='container'>
      
            <a class="navbar-brand text-center align-middle" href="#">
                
                USER DATA</a>
            <button class="navbar-toggler" data-toggle="collapse" data-target='#se'>
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse  navbar-collapse" id="se">
        
      </div>
      </div>
      </nav> 
      

      <nav class=" navbar fixed-bottom  navbar-expand-lg navbar-dark " style={{backgroundColor: "tomato"}}>
      <div className='container'>
      
            <p class="navbar-brand offset-5" >
                
            © 2020 Copyright:</p>
            <button class="navbar-toggler" data-toggle="collapse" data-target='#se'>
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse  navbar-collapse" id="se">
        
      </div>
      </div>
      </nav>

    </div>
    );
  }
}

export default Nav;
