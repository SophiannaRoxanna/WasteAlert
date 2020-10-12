import React from 'react'
import styled from 'styled-components';

export const HeaderButton = styled.button`
  background: ${props => props.bg || "#442ECF"};
  color: ${props => props.color || "#F5F4FA"};
  font-size: ${props => props.fontSize || "14px"};
  font-family: ${props => props.fontFamily || "semi"};
  padding: ${props => props.p || "10px 24px"};
  border-radius: 3px;

  &:focus {
    border-color: #442ECF50;
    outline-color: #442ECF50;
  }
`

export const PrimaryButton = styled.button`
  background: ${props => props.bg || "#442ECF"};
  color: ${props => props.color || "#F5F4FA"};
  color: ${props => props.disabled && "#B4B0D1"};
  background: ${props => props.disabled && "#F5F4FA"};
  font-size: ${props => props.fontSize || "14px"};
  font-family: ${props => props.fontFamily || "semi"};
  padding: ${props => props.p || "14px 24px"};
  border-radius: 3px;

  &:hover {
    background: ${props => props.hoverBg};
    background: ${props => props.disabled && "#F5F4FA"};
    cursor: ${props => props.disabled && "not-allowed"};
  }

  &:focus {
    border-color: #442ECF50;
    outline-color: #442ECF50;
  }
`

export const OutlineButton = styled.button`
  background: ${props => props.bg || "#ffffff"};
  color: ${props => props.color || "#F5F4FA"};
  font-size: ${props => props.fontSize || "14px"};
  font-family: ${props => props.fontFamily || "semi"};
  padding: ${props => props.p || "10px 20px"};
  border: 1px solid #CECAE1;
  border-radius: 3px;

  &:focus {
    border-color: #442ECF50;
    outline-color: #442ECF50;
  }
`

export const LinkButton = styled.button`
  background: ${props => props.bg || "#transparent"};
  color: ${props => props.color || "#442ECF"};
  font-size: ${props => props.fontSize || "14px"};
  font-family: ${props => props.fontFamily || "semi"};
  padding: ${props => props.p || "10px 0"};
  // border: 1px solid #CECAE1;
  // border-radius: 3px;

  &:focus {
    // border-color: #442ECF50;
    outline-color: #442ECF50;
  }

  @media (max-width: 600px) {
    font-size: ${props => props.smallSize || "36px"}
  }
  
`