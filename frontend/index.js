import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route,Link, NavLink} from 'react-router-dom';
import './index.css';
import Form from './frontend/form';
import Table from './frontend/table';
import Login from './frontend/login';
import Tab from './frontend/tab';



class App extends React.Component {
    constructor(props) {
      super(props)
    
      this.state = {
         data:{}
      };
    };
  render() {
    return (
      <>
  
    
    <Router>
            <Route exact path='/tab' component={Tab}  />
            <Route exact path='/' component={Login}  />
            <Route exact path='/form' component={Form}  />
            <Route  path='/user' component={Table}  />
            
    </Router>
  </>
    );
  }
}










ReactDOM.render(<App />,document.getElementById('root'));
