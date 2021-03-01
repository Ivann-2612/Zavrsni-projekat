import React from 'react'
import { useState, useEffect } from 'react'
import { getAllRockets } from '../service'
import {StyledMain6} from '../styledComponents/StyledMain6'


const Main6 = () => {
    const [rockets,setRockets] = useState([])
    const [margins, setMargins] = useState([0, 1])

    useEffect(() => {
        getAllRockets().then(res => {
           //console.log(res.data)
           setRockets(res.data.slice(0,4))
           setTimeout(() => {
            setMargins(prev => {
                if(prev[0] == rockets.length-1)
                    return [0, 1];
                else{
                    return [prev[0] + 1, prev[1] + 1];
                } 
            })
        },10000)
        })
    },[margins])

    return (
        <StyledMain6>
            {
                rockets.slice(margins[0], margins[1]).map(({company,id,wikipedia,flickr_images}) => {
                    return (
                    
                        <div key={id}>
                            <h2>{company} flights</h2><br/>
                            <img src={flickr_images[0]} alt={wikipedia} /><br/>
                            <a href={wikipedia}><b>About flight: </b>{wikipedia}</a>
                        </div>
                           
                    )
                    })   
            }
        </StyledMain6>
    )
}

export default Main6
