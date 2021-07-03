import React from 'react'
import Data from './Data'

function Home() {
    
    return (
        <div>
            {Data.Data.map((dat) => 
                {dat.name})}
        </div>
    )
}

export default Home
