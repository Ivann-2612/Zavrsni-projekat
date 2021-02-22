import React from 'react'
import { useState, useEffect } from 'react'
import { getSportNews } from '../service'
import NewsSportItem from './NewsSportItem'
import {StyledNewsSportList} from '../styledComponents/StyledNewsSportList'


const NewsSportList = () => {

    const [sources,setSource] = useState([])

    useEffect(() => {
        let isSubscribed = true
        getSportNews().then(res => {
            if (isSubscribed)
            //console.log(res.data.articles)
             setSource(res.data.articles)
         })
         return () => isSubscribed = false
    },[])
   

    return (
        <StyledNewsSportList>
            <h4>Sport News</h4>
            {
               sources.map(({title,description,url,publishedAt,author}) => <NewsSportItem key={url} title={title} description={description} url={url} publishedAt={publishedAt} author={author} />
               ) 
            }
        </StyledNewsSportList>
    )
}

export default NewsSportList
