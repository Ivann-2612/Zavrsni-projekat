import React from 'react'
import { useState, useEffect } from 'react'
import { getAllRandomUsers } from '../service'


const Main3 = () => {
    const [users,setUsers] = useState([])

    useEffect(() => {
        getAllRandomUsers().then(res => {
           console.log(res.data.results[0])
           setUsers(res.data.results)
        
        })
    },[])

    return (
        <div>
             <h6>Subscribers:</h6>
            {
                users.map(({picture,cell,gender,name,location}) => {
                    return (
                    
                        <div key={cell}>
                           
                            <p className='p'>{name.title}. {name.first} {name.last} </p>
                            <p>&nbsp; {location.country}</p><br/>
                            <img src={picture.medium} alt={gender} />
                        </div>
                    )
                    })   
            }
        </div>
    )
}

export default Main3
