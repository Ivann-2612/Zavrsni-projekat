import React from 'react'
import { useState, useEffect } from 'react'
import { getEvents } from '../service'


const Main = () => {
    const [events,setEvents] = useState([])

    useEffect(() => {
        getEvents().then(res => {
           console.log(res.data.articles)
           setEvents(res.data.articles)
        })
    },[])

    return (
        <div>
            {
                events.map(({title,author}) => {
                    return (
                        <div>
                            <h2><marquee scrollamount="10" style={{color:'#f5ec43'}}>{author}</marquee></h2>
                            <hr/>
                            <p><marquee><i>{title}</i></marquee></p>
                            
                        </div>
                    )
                    })   
            }
        </div>
    )
}

export default Main
