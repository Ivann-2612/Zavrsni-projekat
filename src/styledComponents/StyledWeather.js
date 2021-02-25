import styled from "styled-components"

export const StyledWeather = styled.section `
    background-color:#141414;
    color:white;
    position:absolute;
    top:19.9%;
    margin-left:-10px;
    left:49.2%;
    padding:10px;
    width:26.5vw;
    height:16.8vh;
    font-size:15px;
    text-align:center;
    font-family:sans-serif;
    border:0.5px solid #353535;
    box-shadow: 0px 3px 7px #353535;
  &:hover {
    transform:scale(1.20) translateY(-0.8em);
    z-index:10;
    transition:width 2s, height 2s, transform 0.8s;
    border:1px solid white;
    color:yellow;
    width:24.5vw;
    background-color:#232323;
    }
  
h2 {
    text-shadow: 0px 0px 2px blue, 0px 0px 2px #f50abe;
    letter-spacing:3.5px;
    text-align:left;
    padding-left:30px;
    margin-top:-5px;
}
h3 {
    text-shadow: 0px 0px 2px blue, 0px 0px 2px #f50abe;
    letter-spacing:3.5px;
    text-align:left;
    padding-left:30px;
}

`