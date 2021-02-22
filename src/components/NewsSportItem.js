import React from 'react'
import {StyledNewsSportItem} from '../styledComponents/StyledNewsSportItem'


const NewsSportItem = ({title,description,url,publishedAt,author}) => {
    return (
       
        <StyledNewsSportItem>
           
            <h3>{author}</h3>
            <p><b>{publishedAt}</b></p>
            <h3><a href={url} >{title}</a></h3>
            <p>{description}</p>
        </StyledNewsSportItem> 
    )
}

export default NewsSportItem

