import { useState } from "react"
import { useHistory } from "react-router"
import { Link } from "react-router-dom"
import { getAllUsers } from "../service"
import {FaUserCircle} from 'react-icons/fa'

const Login = ({ setUser }) => {
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')

    const history = useHistory()

    return (
        <>
            <form onSubmit={(e) => {
                e.preventDefault()
                getAllUsers().then(res => {
                    let user = res.data.find(el => (el.username === username || el.email === username) && el.password === password)
                    if(user){
                        setUser(user)
                        history.push('/newsitem')
                    }
                    else{
                       alert('Wrong password')
                    }
                })
            }}>
                <div className='div-input'>
                <FaUserCircle style={{fontSize:'75px',marginTop:'-30px',position:'absolute',left:'3%',top:'16%',zIndex:'-1',color:'#272727'}} />
                <input className='input' type="text" placeholder="Username..." onChange={e => setUsername(e.target.value)}/>
                <input className='input' type="password" placeholder="Password..." onChange={e => setPassword(e.target.value)}/>
                <input className='btn-login' type="submit" value="Login" />
                <Link className='not-registered' to='/register'>Not registered?</Link>
                </div>
            </form>
          
        </>
    )
}

export default Login