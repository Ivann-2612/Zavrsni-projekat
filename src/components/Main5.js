import React from 'react'
import { useState, useEffect } from 'react'
import { getAllCats } from '../service'
import {StyledMain5} from '../styledComponents/StyledMain5'


const Main5 = () => {
    const [cats,setCats] = useState([])

    useEffect(() => {
        getAllCats().then(res => {
          console.log(res.data)
          setCats(res.data.slice(0,4))
        
        })
    },[])

    return (
        <StyledMain5>
            {
                cats.map(cat => {
                    return (
                    
                        <div key={cat.id}>
                            <u><h3>{cat.text}</h3></u>
                         <br/>
                           
                        </div>
                           
                    )
                    })   
            }
        </StyledMain5>
    )
}

export default Main5
