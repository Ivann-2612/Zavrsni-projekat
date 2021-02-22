import React from 'react'
import {StyledNewsHealthItem} from '../styledComponents/StyledNewsHealthItem'


const NewsHealthItem = ({title,description,url,publishedAt,author}) => {
    return (
       
        <StyledNewsHealthItem>
           
            <h3>{author}</h3>
            <p><b>{publishedAt}</b></p>
            <h3><a href={url} >{title}</a></h3>
            <p>{description}</p>
        </StyledNewsHealthItem> 
    )
}

export default NewsHealthItem