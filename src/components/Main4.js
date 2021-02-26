import React from 'react'
import { useState, useEffect } from 'react'
import { getDevNews } from '../service'
import {StyledMain4} from '../styledComponents/StyledMain4'


const Main4 = () => {
    const [events,setEvents] = useState([])

    useEffect(() => {
        getDevNews().then(res => {
          // console.log(res.data.articles)
           setEvents(res.data.articles.slice(0, 1))
        })
    },[])

    return (
        <StyledMain4>
            {
                events.map(({title,author}) => {
                    return (
                    
                        <div className='div' key={title}>
                            <h2>{author}</h2><br/>
                            <p><i>{title}</i></p>
                        </div>
                           
                    )
                    })   
            }
        </StyledMain4>
    )
}

export default Main4
