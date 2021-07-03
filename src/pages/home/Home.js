import React from 'react'


function Home(props) {
    const Names = props.Data.map((dat) =>
    <li>{dat.name}</li>
    )
    const loc = props.Data.map((locat) =>
    <li>{locat.brand}</li>)
    return (
        <div>
       {Names}

       <div>{loc}</div>
        </div>
        
    )
}

export default Home
