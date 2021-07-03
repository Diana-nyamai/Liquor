import React from 'react'
import Data from './Data'

function Home() {
    
    return (
        <div>
            {Data.Data.map((dat) => 
                <li>{dat.name}</li>)}
        </div>
    )
}

export default Home
