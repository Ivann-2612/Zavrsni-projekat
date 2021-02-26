
import React from 'react'
import { useState, useEffect } from 'react'
import { getSportNews } from '../service'
import SocialNetworkIcons from './SocialNetworkIcons'



const Main2 = () => {
    const [events,setEvents] = useState([])

    useEffect(() => {
        getSportNews().then(res => {
           //console.log(res.data.articles)
           setEvents(res.data.articles.slice(0, 5))
        })
    },[])

    return (
        <div>
            <SocialNetworkIcons/>                        {
                events.map(({title,author}) => {
                    return (
                    
                        <div className='div' key={title}>
                            <h2>{author}</h2><br/>
                            <h3><i>{title}</i></h3>
                        </div>
                           
                    )
                    })   
            }
        </div>
    )
}

export default Main2
