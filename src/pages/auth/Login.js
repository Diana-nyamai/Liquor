import React, { Component } from 'react'

export class Login extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'diana'
        }
    }
    handlechangeName = () =>{

    }
    render() {
        return (
            <div>
            <h1></h1>
               <button>{this.state.name}</button> 
            </div>
        )
    }
}

export default Login

