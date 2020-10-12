import React, { useState, useEffect, useContext } from 'react'
import styled from 'styled-components';
import { TextLink, H5 } from '../components/Text';
import { HeaderButton } from '../components/Button';

const HeaderStyle = styled.header`
  // width: 100vw;
  max-width: 100vw;
  padding: 20px;
  padding-left: 138px ;
  padding-right: 138px ;
  z-index: 99999;
  
  @media (max-width: 1000px) {
    padding-left: 24px ;
    padding-right: 24px ;
  }
  background: ${props => props.bg}
` 

const ThemeToggle = styled.button`
  img {
    width: 25px;
    height: 27px;
  }

  &:focus {
    border-color: #442ECF50;
    outline-color: #442ECF50;
    background: #442ECF10;
  }

`

const MenuToggle = styled.button`
  img {
    width: 25px;
    height: 40px;
  }

  &:focus {
    border-color: #442ECF50;
    outline-color: #442ECF50;
    background: #442ECF10;
  }

`

const Header = props => {


  const toggleMenu = () => {

  }

  return (
    <HeaderStyle 
      className="sticky inset-0 mx-auto flex justify-between items-center"
    >
  
      {/* Mobile Navbar */}
      <nav className="flex md:hidden  justify-between items-center">
        
        <ThemeToggle 
          role="button" 
          className="p-2"
          >
          <img 
            src={""} 
            alt="" 
            className="object-cover" 
          />
        </ThemeToggle>
        
        <MenuToggle 
          role="button" 
          className="p-2"
          onClick={toggleMenu}
          >
          <img 
            src={""} 
            alt="" 
            className="object-cover" 
          />
        </MenuToggle>
      </nav>
    </HeaderStyle>
  )
}

export default Header;

const DashboardHeaderStyle = styled.header`
  background: ${props => props.bg || "#ffffff"};
  border-bottom: 2px solid #F5F4FA;
`

export const DashboardHeader = ({className, title}) => {

  return (
    <DashboardHeaderStyle className={`${className} flex justify-between items-center py-3 px-10`}>
      <H5 color="#0D024E">
        {title}
      </H5>
      <img 
        src={profileImg}
        alt=""
        className="w-10 h-10 rounded-full object-cover"
      />
    </DashboardHeaderStyle>
  )
}