import React from 'react'
import {StyledHeader} from '../styledComponents/StyledHeader'
import Register from '../components/Register'
import Login from '../components/Login'

const Header = () => {
 
    return (
        <StyledHeader>
            <div>
                <Login />
                <Register />
            </div>
        </StyledHeader>
    )
}

export default Header
