import React from 'react'
import { useState, useEffect } from 'react'
import { getSerbiaNews } from '../service'
import SerbiaNewsItem from './SerbiaNewsItem'
import {StyledSerbiaList} from '../styledComponents/StyledSerbiaList'


const SerbiaNewsList = () => {
    const [articles,setArticles] = useState([])
    const [search, setSearch] = useState('')

    useEffect(() => {
        getSerbiaNews().then(res => {
           //console.log(res.data.articles)
            setArticles(res.data.articles)
        })
      
    },[])

    return (
        <StyledSerbiaList>
            <h4>Serbia News</h4>
            {
                articles.filter(el => (el.title.toLowerCase().includes(search)))
                .map(({title,description,url,urlToImage,publishedAt,author}) => (
                    <SerbiaNewsItem key={description} title={title} description={description} url={url} urlToImage={urlToImage} publishedAt={publishedAt} author={author} />
                ))   
            }
        </StyledSerbiaList>
    )
}

export default SerbiaNewsList