import React from 'react'
import { useState, useEffect } from 'react'
import { getTopNewsBBC } from '../service'
import NewsSourceItem from './NewsSourceItem'

const NewsSourcesList = () => {

    const [sources,setSource] = useState([])

    useEffect(() => {
        let isSubscribed = true
        getTopNewsBBC().then(res => {
            if (isSubscribed)
            // console.log(res.data.sources[0]);
             setSource(res.data.sources)
         })
         return () => isSubscribed = false
    },[])
   

    return (
        <div>
            <h4>Top World News</h4>
            {
               sources.map(source => <NewsSourceItem key={source.id} source={source} />
               ) 
            }
        </div>
    )
}

export default NewsSourcesList
