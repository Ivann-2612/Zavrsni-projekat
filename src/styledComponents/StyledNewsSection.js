import styled from "styled-components"

export const StyledNewsSection = styled.section `
    margin-top: 50px;
   > div{
    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(450px, 1fr));
    object-fit: cover;
    place-items: center;
    grid-gap:10px;
    grid-row: 25px;
    grid-template-rows: auto 1fr auto;
    }
    h4 {
        margin-top:-16px;
        color:black;
       
    }
 
`