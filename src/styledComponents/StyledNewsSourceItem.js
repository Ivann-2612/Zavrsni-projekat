import styled from "styled-components"

export const StyledNewsSourceItem = styled.div `
width:320px;
min-height:240px;
padding:15px;
margin:5px;
color:gray;
margin-top: 50px;
border-radius:5px;
font-weight:700;
letter-spacing:1.2px;
background:url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRADpGCP-O0ReITKhKzwlpkM75NDvHYCslsg&usqp=CAU');

h1 {
    font-size:25px;
}
h3, p {
    margin-bottom:5px;
}
box-shadow:2px 1px 2px 2px #141414;
border:none;

&:hover {
    background-color:#272727;
    transition:all 0.4s;
    color:white;
}
& a {
    color:blue;
}
`