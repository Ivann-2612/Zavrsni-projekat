import React from 'react'
import {StyledFooter} from '../styledComponents/StyledFooter'

const Footer = () => {
    return (
        <StyledFooter>
              <p> Copyright &copy; 2021-<script>document.write(new Date().getFullYear())</script> Ivan Nikolic All Rights Reserved</p>
        </StyledFooter>
    )
}

export default Footer
