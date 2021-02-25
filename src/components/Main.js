import React from 'react'
import { useState, useEffect } from 'react'
import { getEvents } from '../service'


const Main = () => {
    const [events,setEvents] = useState([])

    useEffect(() => {
        getEvents().then(res => {
           //console.log(res.data.articles)
           setEvents(res.data.articles.slice(0, 5))
        })
    },[])

    return (
        <div>
            {
                events.map(({title,author}) => {
                    return (
                    
                        <div className='div' key={title}>
                            <h2><marquee style={{color:'#f5ec43',textAlign:'left'}}>{author}</marquee></h2><br/>
                            <p><marquee  className='marquee'><i>{title}</i></marquee></p>
                        </div>
                           
                    )
                    })   
            }
        </div>
    )
}

export default Main
