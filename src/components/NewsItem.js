import React from 'react'
import {StyledNewsItem} from '../styledComponents/StyledNewsItem'


const NewsItem = ({title,description,url,urlToImage,publishedAt,author}) => {
    return (
       
        <StyledNewsItem>
            <img src={urlToImage} alt='New image' />
            <h3>{author}</h3>
            <p><b>{publishedAt.substring(0, 10)}</b></p>
            <h3><a href={url} >{title}</a></h3>
            <p>{description}</p>
        </StyledNewsItem> 
    )
}

export default NewsItem
