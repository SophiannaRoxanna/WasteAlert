import React, { useState, useEffect, useContext } from 'react'
import styled from 'styled-components';

import Header from '../components/Headers';

const LayoutStyle = styled.main`
  background: ${props => props.theme.background};
`

const Layout = props => {

  return (
    <LayoutStyle>
      <Header />
      {props.children}
    </LayoutStyle>
  )
}

export default Layout;

const ThemeLessLayoutStyle = styled.main`
  background: #0D024E;
  padding-top: 100px;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`

export const ThemeLessLayout = props => {

  return (
    <ThemeLessLayoutStyle>
      <Link to="/">
        <img src={darkLogo} alt="SocialSafety" className="mb-12" />
      </Link>
      {props.children}
    </ThemeLessLayoutStyle>
  )
}

export const DashboardLayout = styled.main`
  grid-template-columns: 1fr 17fr;
`

const FormStyle = styled.main`
  display: grid;
  min-height: 100vh;
  grid-template-columns: 1fr 1fr;
  
`

export const Form = props => {

  return (
    <FormStyle>
      <img 
        src="/images/clean.jpg" 
        alt="aside-image" 
        className="h-full min-h-screen object-cover"
      />
      {props.children}
    </FormStyle>
  )
}
