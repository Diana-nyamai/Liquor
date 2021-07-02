import React, { Component } from 'react'

export class Login extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isToggleOn: true
        }
        this.handlechangeName = this.handlechangeName.bind(this);
    }
    handleClick(){
        this.setState(prevstate =>({
            isToggleOn: !prevstate.isToggleOn
        })

        )
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

