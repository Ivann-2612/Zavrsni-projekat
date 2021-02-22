import React from 'react'
import {StyledSerbiaItem} from '../styledComponents/StyledSerbiaItem'


const SerbiaNewsItem = ({title,description,url,urlToImage,publishedAt,author}) => {
    return (
       
        <StyledSerbiaItem>
            <img src={urlToImage} alt='New image' />
            <h3>{author}</h3>
            <p><b>{publishedAt.substring(0, 10)}</b></p>
            <h3><a href={url} >{title}</a></h3>
            <p>{description}</p>
        </StyledSerbiaItem> 
    )
}

export default SerbiaNewsItem