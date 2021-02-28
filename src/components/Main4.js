import React from 'react'
import { useState, useEffect } from 'react'
import { getDevNews } from '../service'
import {StyledMain4} from '../styledComponents/StyledMain4'


const Main4 = () => {
    const [events,setEvents] = useState([])

    useEffect(() => {
        getDevNews().then(res => {
          // console.log(res.data.articles)
           setEvents(res.data.articles.slice(0, 2))
        })
    },[])

    return (
        <StyledMain4>
            {
                events.map(({urlToImage,url,author,title}) => {
                    return (
                    
                        <div key={title}>
                            <h3>{author}</h3><br/>
                            <a href={url}><i>{url}</i></a>
                            <img src={urlToImage} alt='new' />
                        </div>
                           
                    )
                    })   
            }
        </StyledMain4>
    )
}

export default Main4
