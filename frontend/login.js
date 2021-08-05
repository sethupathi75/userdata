import React, { Component } from 'react';
import axios from 'axios';
import Nav from './nav'
class Login extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         Email:'',
         Password:'',
         data:'',
         title:"Login",
         btn:'disabled'
      };
    };
    
    componentDidMount(){
       
            axios.get('http://localhost:2001/login').then(res=>{
              this.setState({data:res.data})
            })
            window.alert("please enter your credentials")
        
    }

    onchange=(e)=>{
        var {name,value}=e.target
        if (name==="Email" || name==="Password"){
            


            if ( value==='admin123' || value==='admin@namasys.co'){
                this.setState({btn:''})
            }
            else{
                this.setState({btn:'disabled'})
            }
            this.setState({[name]:value})
            // console.log(this.state)
        }
            
    }


  render() {
      var btn=[]
      if (this.state.btn==='disabled'){
          btn.push(<a href='/tab'  onchange={this.onSubmit} className='btn btn-primary form-control disabled' >click</a>)
      }
      else {
        btn.push(<a href='/tab'  onchange={this.onSubmit} className='btn btn-primary form-control ' >click</a>)
      }
    return (
    <div>
        <Nav />

        



        <div className="container">
            <div className="row">
            <p className="h4 offset-5 text-danger">* please enter your credentials</p>
            </div>
      <div className="row">  
      <div className="card offset-3 col-6 mt-5 bg-light">
        <div className="card-header bg-success text-center">
               LOGIN
        </div>
      <form  autoComplete="on">
      <div className="form-group">
        <label for="Email" >Email</label>
        <input type="Email" className="form-control"  onChange={this.onchange} name='Email'     />
      <small id="emailHelp" class="form-text text-danger"><strong>{this.state.err}</strong></small>
      </div>
      <div className="form-group">
        <label for="Password">Password</label>
        <input type="Password" className="form-control"  onChange={this.onchange} name='Password'   />
      <small id="emailHelp" class="form-text text-danger text-primary"><strong>{this.state.err1}</strong></small>
      </div>
      <div className="form-group">
          {
            btn
          }
        
      </div>
      </form>
      </div>
      </div>
      </div> 
    </div>
    );
  }
}

export default Login;
