import styled from "styled-components"

export const StyledWeather = styled.section `
    background-color:#0e1111;
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
    z-index:10;
    transform:translateX(12px);
    transition: all 0.5s ease;
    border:1px solid blueviolet;
    color:black;
    width:25.5vw;
    background-color:#f8f8ff;
    }
  
h2 {
    text-shadow: 0px 0px 1.5px green, 0px 0px 1.5px #f50abe;
    letter-spacing:3.5px;
    text-align:left;
    padding-left:30px;
    margin-top:-5px;
}
h3 {
    text-shadow: 0px 0px 1.5px blue, 0px 0px 1.5px #f50abe;
    letter-spacing:3.5px;
    text-align:left;
    padding-left:30px;
}
p {
    position:absolute;
    left:94%;
    top:3%;
    color:#C4BD3A;
    font-size:13.3px;
    text-align:center;
    border-left:2px dotted white;
    padding-left:5px;
}


`