import styled from "styled-components"

export const StyledEventsList = styled.section `
margin-top: -50px;
background-color:#212121;
display: grid;
grid-template-columns: repeat(auto-fill,minmax(350px, 1fr));
object-fit: cover;
place-items: center;
grid-gap:10px;
grid-row: 25px;
grid-template-rows: auto 1fr auto;

h4 {
    margin-top:-26px;
    color:white !important;
}
`