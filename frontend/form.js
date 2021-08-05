import axios from 'axios';
import React, { Component } from 'react';
import Nav from './nav'
class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        Username:'',
         Mobileno:'',
        Email:'',
        Address:'',
        err:'',
        err1:'',
        success:'',
        title:"Form"
      };
    };

    onchange=event=>{
        var {name,value}=event.target
        // this.setState({})
        if(name==='Mobileno'){
          if (value.length===10){
            
            this.setState({[name]:value,err:''})
            console.log('pass')
          }
          else{
            console.log('fail')
            this.setState({err:'*Number should 10 digit'})
          }
        }
        else if (name==='Username'){
          if (value.includes(' ')){
            this.setState({err1:'*Do not  give space and number'})
          }
          else{
            this.setState({[name]:value,err1:''})
          }
        }
        else if (name==='Email'){
          this.setState({[name]:value})
        }
        else if (name==='Address'){
          this.setState({[name]:value})
        }
        
    }
    onSubmit=(event)=>{
      
        axios.post('http://localhost:2001/person',this.state).then(res=>{
          console.log(res)
          
          event.preventDefault();
          window.alert("User added successfully")
        })
        
    }
    
    

  render() {
    return (
      <div>
        <Nav />
          <div className="container">
      <div className="row">  
      <div className="card offset-3 col-6 mt-5 bg-light">
      <div className="card-header pg-success text-center">
               FORM
        </div>
      <form onSubmit={this.onSubmit} autoComplete="off">
      <div className="form-group">
        <label for="Username" >Username</label>
        <input type="text" className="form-control"  onChange={this.onchange} name='Username' value={this.state.name}   required />
        <small  class="form-text text-danger"><strong>{this.state.err1}</strong></small>
      </div>
      
      <div className="form-group">
        <label for="Mobileno">Mobileno</label>
        <input type="number" className="form-control"  onChange={this.onchange} name='Mobileno' value={this.state.age} required />
      <small class="form-text text-danger ">{this.state.err}</small>
      </div>
      <div className="form-group">
        <label for="Email" >Email</label>
        <input type="email" className="form-control"  onChange={this.onchange} name='Email' value={this.state.name}   required />
      </div>
      <div className="form-group">
        <label for="Address" >Address</label>
        <input type="Address" className="form-control"  onChange={this.onchange} name='Address' value={this.state.name}   required />
      </div>
      <div className="form-group">
        <input type='submit' value='click' className='btn btn-primary form-control'/>
      </div>
      </form>
      </div>
      </div>
      </div>
      </div>
    );
  }
}

export default Form