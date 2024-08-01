import React, { Component } from 'react'
import "./pagenation.css"

export default class Updating extends Component {
    state = {
        userinfo : [],
        pagenumber : 0
    }

    pageinfo = [1,2,3,4,5,6,7,8,9,10];

    componentDidMount(){
        this.handleData();
    }

    handleData = async () => {
        let info = await fetch(`https://dummyapi.io/data/v1/user?page=${this.state.pagenumber}&limit=10`,
        {
            method : 'GET',
            headers : {
                'app-ID': '661f6ddaa22352c3f8532ec7'
            }
        });
        let userData = await info.json();
        this.setState({userinfo:userData.data})
        console.log(this.state.userinfo)
    }

    handlepages = (num) =>{
      this.setState({pagenumber: num})
      console.log(this.state.pagenumber);
    }

    componentDidUpdate(prevsProps, prevsState){
      if(prevsState.pagenumber !== this.state.pagenumber)
      this.handleData();
    }

  render() {
    return (
      <>
      <h2 className='text-center m-3 text-primary'>Pagenation</h2>
      <div className='container'>
        {this.state.userinfo && this.state.userinfo.length >0 ? this.state.userinfo.map((person)=>(
          <div className='figure flex' key={person.id}>
            <img className='image' src={person.picture} />
            <div className='detail'>
              <div key={person.id}>
                <figcaption>{person.id}</figcaption>
              </div>
              <div className='name'>
                <figcaption>{person.title}</figcaption>
                <figcaption>{person.firstName}</figcaption>
                <figcaption>{person.lastName}</figcaption>
              </div>   
            </div>        
         </div>
        )):<h1>Browsing.....</h1>}
      </div>
      <div className='text-center'>
        {
          this.pageinfo.map((num) =>(
            <button onClick={()=>{this.handlepages(num)}} className='btn btn-warning text-light mx-2 my-5'>{num}</button>
        ))
        }        
      </div>
      </>
    )
  }
}
