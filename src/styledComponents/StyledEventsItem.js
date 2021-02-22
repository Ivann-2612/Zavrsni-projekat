import styled from "styled-components"

export const StyledEventsItem = styled.div `
background-color:transparent;
border-left:1px solid azure;
border-top:1px solid azure;
width:300px;
height:300px;
padding:15px;
margin:5px;
color:gray;
margin-top: 50px;
font-weight:600;
letter-spacing:1.2px;

h1 {
    font-size:25px;
}
h3, p {
    margin-bottom:5px;
}

& a {
    color:blue;
    word-wrap: break-word;
}
`