import React from 'react'

function Login(props) {
    const names = props.Names
    const doubleName = names.map((name) => <li
    >{name}</li>)
    return (
        <div>
        <ol>{doubleName}</ol>
            
        </div>
    )
}

export default Login
