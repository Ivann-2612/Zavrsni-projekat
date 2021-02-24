import React from 'react'
import { useState, useEffect } from 'react'
import { getDevNews } from '../service'


const Main3 = () => {
    const [events,setEvents] = useState([])

    useEffect(() => {
        getDevNews().then(res => {
           console.log(res.data.articles)
           setEvents(res.data.articles.slice(0, 1))
        })
    },[])

    return (
        <div>
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
        </div>
    )
}

export default Main3
