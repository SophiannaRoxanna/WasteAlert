import React from 'react'
import styled from 'styled-components';

export const InputGroup = styled.input`
  width: ${props => props.width || "90%"};
  margin: ${props => props.margin || "0 auto"};
  position: ${props => props.position || "relative"};
  display: ${props => props.display || "flex"};
  align-items: ${props => props.alignItems || "baseline"};
` 