import styled from "styled-components"

export const StyledTechList = styled.section `
margin-top: 30px;
background-color:#FEFEFE;
display: grid;
grid-template-columns: repeat(auto-fill,minmax(400px, 1fr));
object-fit: cover;
place-items: center;
grid-gap:10px;
grid-row: 25px;
grid-template-rows: auto 1fr auto;

h4 {
    margin-top:-20px;
    color:black !important;
}
`