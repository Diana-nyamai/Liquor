import React from 'react'

function Login(props) {
    const names = props.Numbers
    const doubleName = names.map((name) => <li>{name * 2}</li>)
    return (
        <div>
            {doubleName}
        </div>
    )
}

export default Login
