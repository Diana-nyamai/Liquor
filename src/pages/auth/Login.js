import React from 'react'

const Login = () => {
    return (
        <div>
            it is {new Date().toLocaleTimeString()}
        </div>
    )
}
setInterval(Login, 1000)



export default Login
