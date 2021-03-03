import styled from "styled-components"

export const StyledRecipeItem = styled.div `
  position: absolute;
  top: 143.7%;
  display:flex;
  justify-content:space-evenly;
  width: 96.5vw;
  font-family:sans-serif;
  margin-left:-10px;
  height: 48vh;
  font-size: 20px;
  color: white;
  box-shadow: 0px 3px 7px #353535;
  background-color:#0e1111;
  border-left:12px solid #C7C03C;
  &:hover {
    background-color:#242424;
    color:#f8f8ff;
    transition:0.7s;
    }
  
  img {
    max-width:350px;
    height:200px;
    margin-left:45px;
    margin-bottom:7px;
  }
  h3 {
    margin-top:5px;
    margin-left:45px;
    text-decoration:none;
    border-bottom: 0.5px solid goldenrod;
  }
  p {
    margin-left:60px;
    text-decoration:none;
    margin-bottom:8px;
  }
    a {
    font-size:16px;
    text-decoration:none;
    border:none;
    color:#C7C03C;
    margin-left:120px;
    text-align:left;
  }
  a:hover {
    background-color: unset !important;
  }
  b {
    border:1px solid #C7C03C;
    border-radius:5px;
    padding: 7px 12px;
    font-weight:600;
    
  }
  b:hover {
    background-color:lightgray;
    color:black;
  }
  h5 {
    position:absolute;
    left:0.5%;
    top:1%;
    color:#f8f8ff;
    font-size:23.3px;
    text-align:center;
    border-right:2px dotted white;
    padding-right:5px;
  }
`