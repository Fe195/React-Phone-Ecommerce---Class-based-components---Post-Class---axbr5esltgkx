import styled from 'styled-components'


const ButtonContainer = styled.button`
text-transform:capitalize;
font-size:1.4rem;
background: transparent;
border: 0.05rem solid var(--lightBlue);
//USING PROPS WITH STYLED COMPONENTS:
border-color: ${props => (props.cart ? "var(--mainYellow)" : "var(--lightBlue)" )};  // (CART IS IN DETAILS.JS)
color: ${props => (props.cart ? "var(--mainYellow)" : "var(--lightBlue)")};
border-radius:0.5rem;
padding: 0.2rem 0.5rem;
cursor: pointer;
margin: 0.2rem 0.5rem 0.2rem 0.5rem;
transition: all 0.5s ease-in-out;
&:hover {
 //USING PROPS WITH STYLED COMPONENTS:
 background: ${props => (props.cart ? "var(--mainYellow)" : "var(--lightBlue)")};
 color: var(--mainBlue);
}
&:focus{
 outline: none;
}
`
export default ButtonContainer
