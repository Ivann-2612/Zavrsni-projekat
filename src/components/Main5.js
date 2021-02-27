import React from 'react'
import { useState, useEffect } from 'react'
import { getDevNews } from '../service'
import {StyledMain5} from '../styledComponents/StyledMain5'


const Main5 = () => {
    const [events,setEvents] = useState([])

    useEffect(() => {
        getDevNews().then(res => {
          console.log(res.data.articles)
           setEvents(res.data.articles.slice(0, 1))
        })
    },[])

    return (
        <StyledMain5>
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
        </StyledMain5>
    )
}

export default Main5
