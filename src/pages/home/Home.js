import React from 'react'
import Data from './Data'

function Home() {
    
    return (
        <div>
            {Data.Data.map((data) => {data})}
        </div>
    )
}

export default Home
