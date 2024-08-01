import React, { Component } from 'react';

export default class Validation extends Component {
    state = {
        FirstName:"",
        LastName:"",
        Email:"",
        Phone:"",
        PAN:"",
        FirstNameErr:"",
        LastNameErr:"",
        EmailErr:"",
        PhoneErr:"",
        PANErr:""
    }
    handlingdata = (e) =>{
        const {name,value} = e.target;
        this.setState({[name]:value})
        console.log(this.state)
    }
    submithandle=(e)=>{
        e.preventDefault();
        let FirstNameErr='';
        let LastNameErr='';
        let EmailErr='';
        let PhoneErr='';
        let PANErr='';
        //------FirstName-----
        if(this.state.FirstName.length==0){
            FirstNameErr="Please enter your FirstName"
            } 
        else if(this.state.FirstName.match(/^[A-Z]{1}[a-z]*$/)){
             FirstNameErr="Done"
        } 
        else{
            FirstNameErr="First Letter must be capital"  
        }
        //-----LastName-----
        if(this.state.LastName.length==0){
            LastNameErr="Please enter your LastName"
        }
        else if(this.state.LastName.match(/^[A-Z]{1}[a-z]*$/)){
            LastNameErr="Done"
        }
        else {
            LastNameErr="First Letter must be capital"  
        }
        //-----Emaid ID-----
        if(this.state.Email.length==0){
            EmailErr="Please enter your Email"
        }
        else if(this.state.Email.match(/^[a-z0-9]*[@#$&]{1}[a-z]*[.]{1}[a-z]*$/)){
            EmailErr="Done"
        }
        else {
            EmailErr="Please enter valid email ID"
        }
        //-----Phone Number-----
        if(this.state.Phone.length==0){
            PhoneErr="Please enter your Phone Number"
        }
        else if(this.state.Phone.match(/^[0-9]{10}$/)){
            PhoneErr="Done"
        }
        else {
            PhoneErr="Please enter valid 10 digits Phone number"
        }
        //-----PAN ID-----        
        if(this.state.PAN.length==0){
            PANErr="Please enter your PAN Number"
        }
        else if(this.state.PAN.match(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/)){
            PANErr="Done"
        }
        else {
            PANErr="Please enter valid PAN Number eg:-ABCDE1234A"
        }
    
        if(FirstNameErr||LastNameErr||EmailErr||PhoneErr||PANErr){
            this.setState({FirstNameErr,LastNameErr,EmailErr,PhoneErr,PANErr})
        }
        else{
            this.setState({FirstNameErr,LastNameErr,EmailErr,PhoneErr,PANErr})
        }
    }

  render() {
    return (
      <>
      <div className=' text-center mt-2 p-2 border border-primary'>
   <h2 className='text-primary'>Contact Us</h2>
   <form>
    <input type='text' name='FirstName' placeholder='FirstName' onKeyUp={this.handlingdata}/><br/>
    <p className='text-danger'>{this.state.FirstNameErr}</p>
    <input type='text' name='LastName' placeholder='LastName' onKeyUp={this.handlingdata}/><br/>
    <p className='text-danger'>{this.state.LastNameErr}</p>
    <input type='email' name='Email' placeholder='Email' onKeyUp={this.handlingdata}/><br/>
    <p className='text-danger'>{this.state.EmailErr}</p>
    <input type='tel' name='Phone' placeholder='Phone Number' onKeyUp={this.handlingdata}/><br/>
    <p className='text-danger'>{this.state.PhoneErr}</p>
    <input type='text' name='PAN' placeholder='PAN Number' onKeyUp={this.handlingdata}/><br/>
    <p className='text-danger'>{this.state.PANErr}</p>
    <button className="btn btn-dark"onClick={this.submithandle}>Submit</button>
   </form>
   </div></>
    )
  }
}

