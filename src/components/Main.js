import React from 'react'
import { useState, useEffect } from 'react'
import { getEvents } from '../service'
import SocialNetworkIcons from './SocialNetworkIcons'


const Main = () => {
    const [events, setEvents] = useState([]);
    const [margins, setMargins] = useState([0, 1])
    useEffect(() => {
        getEvents().then(res => {
            setEvents(res.data.articles)
            setTimeout(() => {
                setMargins(prev => {
                    if(prev[0] == events.length-1)
                        return [0, 1];
                    else{
                        return [prev[0] + 1, prev[1] + 1];
                    } 
                })
            },10000)
        })
    }, [margins])
   
    return (
        <div>
            <SocialNetworkIcons/>
            {
                events.slice(margins[0], margins[1]).map(({title,urlToImage,author}) => {
                    return (
                        <div className='div' key={title}>
                            <h2 style={{color:'#F5EC43',textAlign:'left'}}>{author}</h2>
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