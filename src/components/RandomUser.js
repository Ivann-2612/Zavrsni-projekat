import React from 'react'
import { useState, useEffect } from 'react'
import { getAllRandomUsers } from '../service'
import {StayledRandomUser} from '../styledComponents/StayledRandomUser'


const RandomUser = () => {
    const [users,setUsers] = useState([])

    useEffect(() => {
        getAllRandomUsers().then(res => {
           console.log(res.data.results[0])
           setUsers(res.data.results)
        
        })
    },[])

    return (
        <StayledRandomUser>
            {
                users.map(({picture,cell,gender}) => {
                    return (
                    
                        <div key={cell}>
                            <img src={picture.thumbnail} alt={gender} /><br/>
                        </div>
                    )
                    })   
            }
        </StayledRandomUser>
    )
}

export default RandomUser
