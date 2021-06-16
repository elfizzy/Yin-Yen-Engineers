import React from 'react'
import styled from 'styled-components'

const UL = styled.ul`
  justify-content: space-around;
  display: flex;
  list-style:none;
  flex-flow: row nowrap;


li {
  padding: 18px 10px;
  color: white;
  cursor:pointer;
  
}
a {
  list-style:none;
  text-decoration:none;
}
@media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0d2538;
    position: fixed;
    transform: ${({open}) => open ? 'translateX(0)': 'translateX(100%)'};
    // top: 64px;
    right: 0;
    height: 100vh;
    width: 55%;
    padding-top: 10px;
    transition: transform 0.3s ease-in-out;
    margin:0;
    padding:0;
    display: block;
    justify-content: space-around;
    // border-radius: 0 0 10% 10% ;


  li {
    color: white;
    border-bottom: 2px solid rgba(0, 0, 0, 0.3);
    font-size: 16px;
  }

}
`;

const RightNav = ({open}) => {
  return (
    <UL open={open}>
        {/* <li> <a href="#">Home</a></li> */}
        <li><a href="#">About</a></li>
        <li><a href="#">Service</a></li>
        <li><a href="#">Project</a></li>
        <li><a href="#">Contact</a></li>
      </UL>
  )
}

export default RightNav
