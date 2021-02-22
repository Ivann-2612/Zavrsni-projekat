import styled from "styled-components"

export const StyledNewsHealthItem = styled.div `
width:450px;
height:230px;
padding:15px;
margin:5px;
color:gray;
margin-top: 50px;
border-radius:5px;
font-weight:700;
letter-spacing:1.2px;
background-color: transparent;


h1 {
    font-size:25px;
}
h3, p {
    margin-bottom:5px;
}

border:1px solid gray;

&:hover {
    background-color:#272727;
    transition:all 0.4s;
    color:white;
}
& a {
    color:blue;
}
`