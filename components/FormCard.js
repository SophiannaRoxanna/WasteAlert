import React from 'react'
import styled from 'styled-components';

const FormCard = styled.div`
  background: ${props => props.bg || "#ffffff"};
  padding-left:  ${props => props.pl || props.pHorizontal};
  padding-right:  ${props => props.pr || props.pHorizontal};
  padding-top:  ${props => props.pt || props.pVertical};
  padding-bottom:  ${props => props.pb || props.pVertical};
  max-width: ${props => props.maxW};

  border-radius: 5px
`

export default FormCard;