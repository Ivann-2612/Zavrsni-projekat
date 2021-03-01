import React from 'react'
import { useState, useEffect } from 'react'
import { getAllMemes } from '../service'
import {StyledMain5} from '../styledComponents/StyledMain5'


const Main5 = () => {
    const [memes,setMemes] = useState([])

    useEffect(() => {
        getAllMemes().then(res => {
          //console.log(res.data)
          setMemes(res.data.slice(0,4))
        
        })
    },[])

    return (
        <StyledMain5>
            {
                memes.map(meme => {
                    return (
                    
                        <div key={meme._id}>
                           <i><u><h3>{meme.text}</h3></u></i> 
                         <br/>
                        </div>
                    )
                    })   
            }
        </StyledMain5>
    )
}

export default Main5
