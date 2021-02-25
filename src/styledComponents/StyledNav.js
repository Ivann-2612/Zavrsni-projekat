import styled from "styled-components"

export const StyledNav = styled.nav `
    background-color:#141414;
    color:white;
    padding:30px;
    height:18vh;
    font-size:15px;
    text-align:left;
 a {
     text-decoration:none;
     margin-left:20px;
     color:gray;
     border:1px solid gray;
     border-radius:5px;
 }
 a:hover {
    background-color:#f1f5f9;
}
 span {
     position:absolute;
     top:20px;
     left:65%; 
     border:1px solid #f1f5f9;
     padding:10px; 
     border-radius:5px; 
 }
  button {
    padding: 10px 20px;
    position:absolute;
    left:90%;
    background-color:darkred;
    color:white;
    border-radius:5px;
    border:none;
    font-weight:600;
    letter-spacing:2px;
    top:3%;
    border:1px solid gray;
 }
 h1 {
     display:none;
     font-size:80px;
     padding:180px;
     width:98%;
     text-align:center;
     position:absolute;
     top:10%;
     margin-left:-18px;
     font-family:sans-serif;
     height:85%; 
 }
 button:hover + h1{
    background-color:#310a31;
    color:#f9f9f9;
    border-radius:5px;
    display: block;
    z-index:5;
 }
 .img-logout {
     width:250px;
     height:250px;
     border-radius:50%;
     filter: drop-shadow(0 0 0.75rem yellow);
 }
`