import React, { useState, useEffect, useContext } from 'react'
import styled from 'styled-components';
import {
  Link
} from 'react-router-dom';

import { themeContext } from '../lib/themeContext';
import Header from './Headers';
import styles from '../styles/layout.module.css'

const LayoutStyle = styled.main`
  background: ${props => props.theme.background};
`

const Layout = props => {

  const { theme, toggleTheme } = useContext(themeContext)

  return (
    <LayoutStyle theme={theme}>
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
