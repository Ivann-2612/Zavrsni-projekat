import styled from "styled-components"

export const StyledNewsDevList = styled.section `
margin-top: 30px;
background-color:#212121;
display: grid;
grid-template-columns: repeat(auto-fill,minmax(300px, 1fr));
object-fit: cover;
place-items: center;
grid-gap:10px;
grid-row: 25px;
grid-template-rows: auto 1fr auto;

h4 {
    margin-top:-23px;
    color:white !important;
}
`