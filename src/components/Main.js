import React from 'react'
import { useState, useEffect } from 'react'
import { getEvents } from '../service'


const Main = () => {
    const [events,setEvents] = useState([])

    useEffect(() => {
        getEvents().then(res => {
           //console.log(res.data.articles)
           setEvents(res.data.articles.slice(0, 1))
        })
    },[])

    return (
        <div>
            {
                events.map(({title,urlToImage,author}) => {
                    return (
                    
                        <div className='div' key={title}>
                            <h2 style={{color:'#f5ec43',textAlign:'left'}}>{author}</h2>
                            <p className='marquee'><i>{title}</i></p>
                            <img src={urlToImage} alt={title} />
                        </div>
                           
                    )
                    })   
            }
        </div>
    )
}

export default Main
