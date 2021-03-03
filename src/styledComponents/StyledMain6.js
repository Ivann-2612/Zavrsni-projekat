import styled from "styled-components"

export const StyledMain6 = styled.div `
  position: absolute;
  top: 194.8%;
  left: 61%;
  padding:3px;
  height: 43vh;
  width: 37.5vw;
  font-family:sans-serif;
  font-size: 20px;
  color: white;
  box-shadow: 0px 3px 7px #353535;
  background-color:#0e1111;
  &:hover {
    background-color:#242424;
    color:#f8f8ff;
    transition:0.7s;
    }
  h2 {
    text-align:center;
  }

  img {
    width:400px;
    max-height:200px;
    margin-left:100px;
    margin-top:-10px;
    border:3px solid #f8f8ff;
  }
  a {
    text-decoration:none;
    border:none;
    color:blue;
    margin-left:120px;
  }
  a:hover {
    background-color: unset !important;
  }
  b {
    color:white !important;
    margin-left:-105px;
    margin-right:5px;
  }
`