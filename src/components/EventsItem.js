import React from 'react'
import {StyledEventsItem} from '../styledComponents/StyledEventsItem' 


const EventsItem = ({title,description,url,publishedAt,author}) => {
    return (
       
        <StyledEventsItem>
            <h3>{author}</h3>
            <p><b>{publishedAt.substring(0, 10)}</b></p>
            <h3><a href={url} >{title}</a></h3>
            <p>{description}</p>
        </StyledEventsItem> 
    )
}

export default EventsItem