import React, { Component } from 'react'

export class Login extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'diana'
        }
    }
    handlechangeName = () =>{
        this.setState({
            name: 'ndinda'
        },console.log('name changed'))
    }
    render() {
        return (
            <div>
            <h1>click to change the name</h1>
               <button onClick={this.handlechangeName}>{this.state.name}</button> 
            </div>
        )
    }
}

export default Login

