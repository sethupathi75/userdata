import React, { Component } from 'react';
import axios from 'axios';
import Nav from './nav'
class Table extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         data:'',
         title:"Table"
      };
    };
    

    componentDidMount(){
        this.getAll();
  }

    getAll(){
        axios.get('http://localhost:2001/person').then(res=>{
          this.setState({data:res.data})
          
        })
    }


    setData=(e)=>{
        
        var id=e.target.id
        console.log(id)
        axios.delete('http://localhost:2001/person/'+id).then(res=>{
            this.getAll()
            
          })
      }


  render() {
    return (
      <div>
          <Nav />
          <div className="container">
              <div className="row">
                    <div className="col-12">
                    <table class="table table-dark rounded mt-5 table-bordered table-info table-hover">
            <thead class="bg-success">
                <tr className="text-center">
                    <th>ID</th>
                    <th>USERNAME</th>
                    <th>MOBILE NUMBER</th>
                    <th>EMAIL</th>
                    <th>ADDRESS</th>
                    <th>Delete</th>
                          
                </tr>
            </thead>
            <tbody>
                {
                    // console.log(this.props.getData) 
                    this.state.data.length>0 ?
                    
                    this.state.data.map(e=>
                        <tr>
                            <td>{e._id}</td>
                            <td>{e.Username}</td>
                            <td>{e.Mobileno}</td>
                            <td>{e.Email}</td>
                            <td>{e.Address}</td>
                            <td><button id={e._id} className="btn btn-primary d-block" onClick={this.setData}>Delete</button></td>
                        </tr>)
                    
                    :
                    
                        <tr>
                            <td>no data</td>
                            
                        </tr>
                    
                }
            </tbody>
        </table>
                    </div>
              </div>
          </div>
      </div>
    );
  }
}

export default Table;
