import styled, { createGlobalStyle } from "styled-components";
import PTSans from "../fonts/PTN77F.ttf";

const desktopStartWidth = 700;
const mobile = `@media (max-width: ${desktopStartWidth}px)`;

export const GlobalStyle = createGlobalStyle`

  @font-face {
   font-family: 'PTSans';
   src: url(${PTSans});
  }
  * {
      
      font-family: 'PTSans';
    } 
    body{
        background-color: #F0F0F0;
    }
`;

export const NavBar = styled.div`
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  border-bottom: 3px solid black;
  ${mobile} {
    width: 100%;
    flex-direction: row;
  }
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: space-evenly;
  justify-content: space-between;
  flex-wrap: wrap;
  ${mobile} {
    flex-direction: column;
    align-items: center;
  }
`;


export const CartWidgetStyle = styled.div`
 display: flex;
 flex-direction: row;
 flex-wrap: nowrap;
 align-items: center;
 justify-content: space-between;
  &:hover {
    border: 1px solid #f0f0f0;
  }
    p{
      color:#f0f0f0;
    } 
`;
export const Btn = styled.button`
  width: 8rem;
  height: 3rem;
  justify-content: space-around;
  border-radius: 5px;
  margin: 0.5em;
  background-color: white;
  color: black;
  font-size: 0.8rem;
  border: 1px solid black;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
  &:active {
    background-color: #f1b009;
    color: white;
  }
  ${mobile} {
    width: 5rem;
    height: 2rem;
    margin: 0.3rem;
  }
`;

export const Container = styled.div`
  margin: 2rem;
  background-color: #f1b009;
`;

export const Icon = styled.img`
  width: 2rem;
`;
export const Icon2 = styled.img`
  width: 20px;
  &:hover {
    opacity:0.5;
  }
`;

// ITEM COUNT

export const FormGroup = styled.div`
  width: 300px auto;
  height: auto;
  margin: 10px auto;
  text-align: center;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Label = styled.label`
  font-size: 0.85rem;
  color: #4682b4;
`;

export const Contador = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  background-color: transparent;
  width: auto;
  height: auto;
  margin: 0.7rem;
`;

export const Btn2 = styled.button`
  width: 1.5rem;
  height: 1.5rem;
  margin: 0.5rem;
  background-color: white;
  color: #4682b4;
  border-radius: 15px;
  border: 1px solid black;
  &:hover {
    background-color: #f0f0f0;
  }
`;

export const Button = styled.button`
  background-color: white;
  color: #4682b4;
  font-size: 0.8rem;
  border: 1px solid black;
  cursor: pointer;
  margin: 0.5rem;
  padding: 0;
  width: 8rem;
  height: 2rem;
  border-radius: 5px;
  &:hover {
    background-color: #f0f0f0;
  }
`;

export const Input = styled.input`
  border: none;
  width: 50px;
  padding: 0.5rem;
  border-radius: 5px;
  text-align: center;
  &:hover {
    background-color: #f0f0f0;
  }
  &:focus {
    border: 1px solid #8842d5;
  }
`;

export const Form = styled.form`
  background-color: white;
`;

export const P = styled.p`
  color: #7b241c;
  font-size: 1rem;
`;

export const PGreen = styled(P)`
    color: green;
    font-size:0.9rem;
    `

//
export const ItemListStyle = styled.div`
  margin: 2rem auto;
  background-color: #f1b009;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

export const ItemStyle = styled.div`
  margin: 1rem;
  padding: 1rem;
  background-color: white;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
`;

export const Img = styled.div`
  &:hover {
    opacity: 0.5;
  }
`;

export const UL = styled.ul`
  margin: 0;
  padding: 0;
`;

export const ItemDetailContainerStyle = styled.div`
  margin: 2rem;
  background-color: white;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export const ItemDetailStyle = styled.div`
  margin: 2rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  background-color: #f0f0f0;
  border: 1px solid black;
`;

export const ContainerCartStyle = styled.div`
margin:2rem auto;
padding:2rem; 

`;


export const ContainerItemCart = styled.div`
display:flex;
border-bottom: 1px solid grey;
margin:1rem;
flex-direction: row;
justify-content: space-evenly;
flex-wrap: wrap;
align-items: center;
max-width: 80%;
border-radius: 5px;
  ${mobile} {
    width: 100%;
    flex-direction: column;
  }
`;

export const InfoItemCart = styled.div`
 display: flex;
 flex-direction: row;
 min-width: 60%;
 justify-content: space-between;
 align-items: center;
 ${mobile} {
    min-width: 100%;
    justify-content: space-evenly;
  }
`;

export const TextItemCart = styled.div`
display:flex;
flex-direction: column;
align-items: flex-start;
width: 9rem ;
${mobile} {
    width: 100%;
    flex-direction: column;
      align-items:flex-end;
  }
`;

export const P2 = styled.p`
  color: #7b241c;
  font-size: 0.9rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items:center;
  margin:0;
    ${mobile} {
    width: 100%;
    flex-direction: column;
      align-items:flex-end;
  }
`;
export const P2Bold = styled(P2)`
color: black;
font-size: 1rem;
`;
export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width:80%;
  margin:1rem;

`;
export const ContainerShop = styled.div`
  //background-color: #fcf8e8;
  //border-top: 1px solid black;
  margin:1rem;
  display:flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;

  border-radius: 5px;
    ${mobile} {
      width: 100%;
      flex-direction: column;
    }
`;

export const DivFlex = styled.div`
  display: flex;
  align-items: space-between;
  flex-direction: column;

`;


export const FormClient = styled.div`
//display: block;
width: 300px;
margin 10px auto;
`;

export const InputForm = styled.input`
    padding: 0.5em;
    color: #7b241c;
    background: papayawhip;
    border: none;
    border-radius: 3px;
    width: 100%;
    margin-bottom: 0.5em;
`;

export const LabelForm = styled.label`
    margin-bottom: 0.5em;
    color: #7b241c;
    display: block;
`;

export const Title = styled.h3`
text-align: center;`;


export const PedidoContainer = styled.div`
background-color: #EFF5ED;
color:#609946;
text-align: center;
border: 1px solid #609946;
margin:3rem;
font-size:1rem;
`;

export const CatalogoContainer = styled.div`
background-color: #f1b009;
color: white;
text-align: center;
border: 1px solid black;
margin:3rem;
font-size:1rem;
&:hover {
    opacity: 0.5;
  }
  &:visited{
    color:red;
  }
`;