import styled from "styled-components"

export const StyledMain4 = styled.div `
position: absolute;
  top: 100.7%;
  display:flex;
  justify-content:space-evenly;
  width: 96.5vw;
  font-family:sans-serif;
  margin-left:-10px;
  height: 40vh;
  font-size: 20px;
  color: white;
  box-shadow: 0px 3px 7px #353535;
  background-color:#0e1111;
  border-left:12px solid #C7C03C;
  img {
    width:360px;
    height:210px;
    margin-left:20px;
  }
  h3 {
    margin-top:5px;
    margin-left:5px;
    width:210px;
    border-bottom: 0.5px solid goldenrod;
  }
  h5 {
    position:absolute;
    left:0.5%;
    top:1%;
    color:#f8f8ff;
    font-size:23px;
    text-align:center;
    border-right:2px dotted white;
    padding-right:5px;
  }

  a {
    font-size:16px;
    text-decoration:none;
    border:none;
    color:#C7C03C;
  }
  a:hover {
    background-color: unset !important;
  }
  i {
    border:1px solid #C7C03C;
    border-radius:5px;
    padding: 7px 12px;
    font-weight:600;
  }
  i:hover {
    background-color:lightgray;
    color:black;
  }
  
`