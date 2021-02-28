import React from 'react'
import { useState, useEffect } from 'react'
import { getDevNews } from '../service'
import {StyledMain6} from '../styledComponents/StyledMain6'


const Main6 = () => {
    const [events,setEvents] = useState([])

    useEffect(() => {
        getDevNews().then(res => {
          // console.log(res.data.articles)
           setEvents(res.data.articles.slice(0, 1))
        })
    },[])

    return (
        <StyledMain6>
            {
                events.map(({title,author}) => {
                    return (
                    
                        <div key={title}>
                            <h2>{author}</h2><br/>
                            <p><i>{title}</i></p>
                        </div>
                           
                    )
                    })   
            }
        </StyledMain6>
    )
}

export default Main6
