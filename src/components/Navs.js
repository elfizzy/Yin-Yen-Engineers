import React from 'react';
import Burger from "./Burger";
import styled from 'styled-components';

const Nav = styled.nav`
width: 100%;
height: 55px;
display: flex;
background: #262626;
border-bottom: 2px solid #f1f1f1;
padding: 3px 20px;
justify-content: space-between;
// position :fixed;

.logo {
padding: 15px 0;
}
`

const Navs = () => {
  return (
    //has a class of nav
    <div style={{position:"fixed", width:"100%", zIndex:"1"}}>
      <Nav className=""> 
        <div className="logo">
          LOGO
        </div>
        <Burger />
      </Nav>
  
    </div>
  )
 
}

export default Navs
