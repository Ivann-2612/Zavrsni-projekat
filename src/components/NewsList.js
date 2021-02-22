import React from 'react'
import { useState, useEffect } from 'react'
import { getAllNews } from '../service'
import NewsItem from './NewsItem'


const NewsList = () => {
    const [articles,setArticles] = useState([])

    useEffect(() => {
        let isSubscribed = true
        getAllNews().then(res => {
            //console.log(res.data.articles[0])
            if (isSubscribed)
            setArticles(res.data.articles)
        })
        return () => isSubscribed = false
    },[])

    return (
        <div>
            <h4>Daily News</h4>
            {
                articles.map(({title,description,url,urlToImage,publishedAt,author}) => (
                    <NewsItem key={title} title={title} description={description} url={url} urlToImage={urlToImage} publishedAt={publishedAt} author={author} />
                ))   
            }
        </div>
    )
}

export default NewsList
