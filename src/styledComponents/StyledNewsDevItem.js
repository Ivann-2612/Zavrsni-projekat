import styled from "styled-components"

export const StyledNewsDevItem = styled.div `
background-color:transparent;
border:1px solid gray;
width:400px;
height:500px;
padding:15px;
margin:5px;
color:gray;
margin-top: 50px;
border-radius:5px;
font-weight:700;
letter-spacing:1.2px;

h1 {
    font-size:25px;
}
h3, p {
    margin-bottom:5px;
}
img {
    width:370px;
    height:240px;
}

& a {
    color:blue;
    word-wrap: break-word;
}
`