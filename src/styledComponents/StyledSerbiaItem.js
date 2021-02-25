import styled from "styled-components"

export const StyledSerbiaItem = styled.div `
width:320px;
height:430px;
padding:10px;
margin:5px;
margin-top: 50px;
border-radius:5px;
background-color:#f4f1de;

img {
  width:280px;
  height:150px;
  margin-left:10px;
  margin-bottom:10px;
}
h3, p {
    margin-bottom:5px;
}
box-shadow:2px 1px 2px 2px #141414;

&:hover {
    background-color:#10002b;
    transition:all 0.4s;
    color:white;
    border:1px solid gray;
}
& a {
   
    color:blue;
}
`