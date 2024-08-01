import React, { Component } from 'react'

export default class FromValidation extends Component {
  state = {
    FirstName:"",
    LastName:"",
    Email:"",
    Phone:"",
    FirstNameErr:"",
    LastNameErr:"",
    EmailErr:"",
    PhoneErr:""
  }

  handledata = (e)=>{
    // console.log(e.target.value)
    const {name,value} = e.target;
   this.setState({[name]:value});
   console.log(this.state);
  }

  handleSubmit = (e) =>{
    e.preventDefault();
    let FirstNameErr;
    let LastNameErr;
    let EmailErr;
    let PhoneErr;

    if(this.state.FirstName.length < 4){
      FirstNameErr="FirstName should contains atleast 4 chars"
    }
    if(this.state.LastName.length < 1){
      LastNameErr="LastName should contains atleast 1 chars"
    }
    if(!this.state.Email.includes("@")){
      EmailErr="Enter valid Email Id"
    }
    if(this.state.Phone.length !==0){
      PhoneErr="Enter valid Phone number"
    }
    if(FirstNameErr||LastNameErr||EmailErr||PhoneErr){
      this.setState({FirstNameErr,LastNameErr,EmailErr,PhoneErr})
    }
    else{
      this.setState({FirstNameErr,LastNameErr,EmailErr,PhoneErr})
    }
  }

  render() {
    return (
      <>
      <center>
      <h2 className='text-warning mt-3'>FromValidation</h2>
      <form>
        <input type='text' name='FirstName' placeholder='Enter FistName' onChange={this.handledata}/><br/>
        <p className='text-danger'>{this.state.FirstNameErr}</p>
        <input type='text' name='LastName' placeholder='Enter Lastname' onChange={this.handledata}/><br/>
        <p className='text-danger'>{this.state.LastNameErr}</p>
        <input type='email' name='Email' placeholder='Enter Email' onChange={this.handledata}/><br/>
        <p className='text-danger'>{this.state.FirstNameErr}</p>
        <input type='tel' name='Phone' placeholder='Enter Phone Number' onChange={this.handledata}/><br/>
        <p className='text-danger'>{this.state.FirstNameErr}</p>
        <button className="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
      </form>
      </center>
      </>
    )
  }
}
