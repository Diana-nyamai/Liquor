import React from 'react'
import Data from './Data'

function Home() {
    const Data = Data.Data.map((dat) => 
    <li>{dat.name}</li>
    )
    return (
        <div>
        {Data}
        </div>
    )
}

export default Home
