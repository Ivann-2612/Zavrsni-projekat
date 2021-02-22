import React from 'react'
import { useState, useEffect } from 'react'
import { getHealthNews } from '../service'
import NewsHealthItem from './NewsHealthItem'
import {StyledNewsHealthList} from '../styledComponents/StyledNewsHealthList'

const NewsHealthList = () => {

    const [sources,setSource] = useState([])

    useEffect(() => {
        getHealthNews().then(res => {
            //console.log(res.data.articles)
             setSource(res.data.articles)
         })
    },[])
   

    return (
        <StyledNewsHealthList>
            <h4>Health News</h4>
            
            {
               sources.map(({title,description,url,publishedAt,author}) => <NewsHealthItem key={url} title={title} description={description} url={url} publishedAt={publishedAt} author={author} />
               ) 
            }
        </StyledNewsHealthList>
    )
}

export default NewsHealthList
