import React from 'react'
import { useState, useEffect } from 'react'
import { getEvents } from '../service'
import EventsItem from './EventsItem'
import {StyledEventsList} from '../styledComponents/StyledEventsList'


const EventsList = () => {
    const [events,setEvents] = useState([])

    useEffect(() => {
        getEvents().then(res => {
           //console.log(res.data.articles)
           setEvents(res.data.articles)
        })
      
    },[])

    return (
        <StyledEventsList>
            <h4>Events News</h4>
            {
                events.map(({title,description,url,publishedAt,author}) => (
                    <EventsItem key={url} title={title} description={description} url={url} publishedAt={publishedAt} author={author} />
                ))   
            }
        </StyledEventsList>
    )
}

export default EventsList