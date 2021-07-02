import React, { Component } from 'react'

export class Login extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isToggleOn: true
        }
        this.handleClick = this.handleClick.bind(this);
    }
   handleClick = () =>{
      this.setState(prevState =>({
          isToggleOn: !prevState.isToggleOn
      }))
   }


    render() {
        return (
            <div>
            <h1>click to change the name</h1>
               <button onClick={this.handleClick}>{this.state.isToggleOn? 'On':'off'}</button> 
            </div>
        )
    }
}

export default Login

