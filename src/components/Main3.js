import React from 'react'
import { useState, useEffect } from 'react'
import { getSportNews } from '../service'


const Main3 = () => {
    const [events,setEvents] = useState([])

    useEffect(() => {
        getSportNews().then(res => {
          // console.log(res.data.articles)
           setEvents(res.data.articles.slice(10, 11))
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
