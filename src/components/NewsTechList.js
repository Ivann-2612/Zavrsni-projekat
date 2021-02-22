import React from 'react'
import { useState, useEffect } from 'react'
import { getTechNews } from '../service'
import NewsTechItem from './NewsTechItem'
import {StyledTechList} from '../styledComponents/StyledTechList'



const NewsTechList = () => {
    const [techs,setTechs] = useState([])

    useEffect(() => {
        getTechNews().then(res => {
            //console.log(res.data.articles[0])
            setTechs(res.data.articles)
        })
    },[])

    return (
        <StyledTechList>
            <h4>Tech News</h4>
            {
                techs.map(({title,content,url,urlToImage,publishedAt,author}) => (
                    <NewsTechItem key={url}  title={title} content={content} url={url} urlToImage={urlToImage} publishedAt={publishedAt} author={author} />
                ))   
            }
        </StyledTechList>
    )
}

export default NewsTechList
