import styled from "styled-components"

export const StyledNewsDevItem = styled.div `
background-color:transparent;
border:1px solid gray;
width:300px;
height:600px;
padding:5px;
margin:5px;
color:gray;
overflow:hidden;
margin-top: 50px;
border-radius:5px;
font-weight:700;
letter-spacing:1.2px;
overflow-wrap: break-word;
word-wrap: break-word;
  hyphens: auto;

h1 {
    font-size:25px;
}
h3, p {
    margin-bottom:5px;
}
img {
    width:290px;
    height:240px;
}

& a {
    color:blue;
    word-wrap: break-word;
}
`