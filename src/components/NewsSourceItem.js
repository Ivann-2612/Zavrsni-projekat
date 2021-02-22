import React from 'react'
import {StyledNewsSourceItem} from '../styledComponents/StyledNewsSourceItem'


const NewsSourceItem = ({source}) => {
    return (
        <StyledNewsSourceItem>
                <h1>{source.name}</h1>
                <h3>{source.category}</h3>
                <h3><a href={source.url} >{source.url}</a></h3>
                <p>{source.description}</p>
        </StyledNewsSourceItem>
    )
}

export default NewsSourceItem