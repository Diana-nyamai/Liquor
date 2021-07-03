import React from 'react'
import Data from './Data'

function Home() {
    
    return (
        <div>
            {Data. Data.map((data) => 
                <li>{data.name}</li>)}
        </div>
    )
}

export default Home
