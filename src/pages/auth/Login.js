import React, { Component } from 'react'

export class Login extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'diana'
        }
    }
    
    render() {
        return (
            <div>
               my name is {this.state.name}
            </div>
        )
    }
}

export default Login

