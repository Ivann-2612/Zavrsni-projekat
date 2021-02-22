import React from 'react'
import {StyledTechItem} from '../styledComponents/StyledTechItem'


const NewsTechItem = ({title,content,url,urlToImage,publishedAt,author}) => {
    return (
           
        <StyledTechItem>
            <img src={urlToImage} alt='New image' />
            <h3>{author}</h3>
            <p>{title}</p>
            <p><b>{publishedAt.substring(0, 10)}</b></p>
            <h3><a href={url} >{url}</a></h3>
            <p>{content}</p>
        </StyledTechItem> 
    )
}

export default NewsTechItem

