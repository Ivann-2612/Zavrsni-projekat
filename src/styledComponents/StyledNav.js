import styled from "styled-components"

export const StyledNav = styled.nav `
    background-color:#0e1111;
    color:white;
    padding:30px;
    height:18.5vh;
    font-size:15px;
    text-align:left;
    font-family: 'Press Start 2P', sans-serif;
    box-shadow: 0px 3px 7px #353535;
    
 a {
     text-decoration:none;
     margin-left:20px;
     color:gray;
     border:1px solid gray;
     border-radius:5px;
     padding: 10px;
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
 button:hover {
   background-color:gray;
   color:black;
   font-weight:600;
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
 .year {
    position: absolute;
    left: 62%;
    top: 20px;
    color: #e0d7e0;
    font-size: 20px;
    color: #DFD73E;
  }
  .serbia {
    color:#118ab2;
    border: 1px solid #118ab2;
  }
  .sport {
    position:absolute;
    left:2.8%;
    top:10%;
  }
  .health {
    position:absolute;
    left:18.3%;
    top:10%;
  }
  .events {
    position:absolute;
    left:34.8%;
    top:10%;
  }
  .daily {
    position:absolute;
    left:49.1%;
    top:10%;
  }
  .logo {
    width:200px;
    background-color:white;
    padding:12px;
    margin-top:-13px;
    margin-bottom:15px;
    box-shadow: 0px 3px 7px #353535,
                0 0 3px 5px #e9C03C,
                0 0 8px 7px #f8f8ff,
                0 0 8px 7px blue,
                0 0 8px 7px #f8f8ff,
                0 0 3px 3px #C7C03C;
  text-shadow: 2px 2px 3px rgba(0,0,0,0.5);
    
  }
  
`