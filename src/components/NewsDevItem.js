import React from 'react'
import {StyledNewsDevItem} from '../styledComponents/StyledNewsDevItem'


const NewsDevItem = ({title,description,url,urlToImage,publishedAt,author}) => {
    return (
       
        <StyledNewsDevItem>
            <img src={urlToImage} alt='New image' />
            <h3>{author}</h3>
            <p><b>{publishedAt.substring(0, 10)}</b></p>
            <h3><a href={url} >{title}</a></h3>
            <p>{description}</p>
        </StyledNewsDevItem> 
    )
}

export default NewsDevItem