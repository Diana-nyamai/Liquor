import React from 'react'

function Login() {
    const names = [1,2,3,6]
    const doubleName = names.map((name) => <li>{name * 2}</li>)
    return (
        <div>
            {doubleName}
        </div>
    )
}

export default Login
