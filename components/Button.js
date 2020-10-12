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
  background: ${props => props.bg || "#005105"};
  width: ${props => props.width || "fit-content"};
  color: ${props => props.color || "#F5F4FA"};
  font-size: ${props => props.fontSize || "14px"};
  font-family: ${props => props.fontFamily || "inherit"};
  padding: ${props => props.p || "12px 40px"};
  border-radius: 3px;
  transition: 0.3s ease-in-out;

  &:hover {
    background: #ffffff;
    color: ${props => props.color || "#005105"};
    border: 1px solid #005105;
    cursor: ${props => props.disabled && "not-allowed"};
  }

  &:focus {
    border-color:  #005105;
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