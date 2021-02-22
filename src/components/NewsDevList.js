import React from 'react'
import { useState, useEffect } from 'react'
import { getDevNews } from '../service'
import NewsDevItem from './NewsDevItem'
import {StyledNewsDevList} from '../styledComponents/StyledNewsDevList'


const NewsDevList = () => {
    const [articles,setArticles] = useState([])

    useEffect(() => {
        getDevNews().then(res => {
           // console.log(res.data.articles[0])
            setArticles(res.data.articles)
        })
      
    },[])

    return (
        <StyledNewsDevList>
            <h4>Top Dev News</h4>
            {
                articles.map(({title,description,url,urlToImage,publishedAt,author}) => (
                    <NewsDevItem key={url} title={title} description={description} url={url} urlToImage={urlToImage} publishedAt={publishedAt} author={author} />
                ))   
            }
        </StyledNewsDevList>
    )
}

export default NewsDevList