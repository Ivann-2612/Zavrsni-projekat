import styled from "styled-components"

export const StyledLoginInput = styled.div `
box-shadow: 0px 3px 7px #353535;
background-color: rgba(244,228,4, 0.5); 
backdrop-filter: blur(10px);
box-shadow: inset 0 0 2000px rgba(255, 255, 255, .6);
border:1px solid white;
width: 350px;
position: absolute;
left: 76%;
top: 2.4%;
padding: 45px;
padding-left:70px; 
opacity: 0.92;
border-top-left-radius: 10px;
border-bottom-right-radius: 10px;
p:hover {
  color:white;
}
.icon {
    font-size:75px;
    margin-top:-30px;
    position:absolute;
    left:3%;
    top:16%;
    z-index:-1;
    color:#272727;
}
.btn-login {
    background-color: rgb(131, 174, 175);
     display:flex;
     margin-top: 15px;
     padding: 8px 20px;
     margin-left: 5px;
     border-radius: 5px;
     outline: none;
     color: black;
     letter-spacing: 2px;
     font-weight:600;
     &:hover {
      background-color: #f8f8ff;
      color:#212121;
     }
 }
 .not-registered {
    position: absolute;
    left: 52%;
    text-decoration: none;
    color:black;
    letter-spacing: 1.5px;
    font-size: 20px;
    font-weight: 600;
    &:hover {
      color:darkred;
     }
  }
  

`