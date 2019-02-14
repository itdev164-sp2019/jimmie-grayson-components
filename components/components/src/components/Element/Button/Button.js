import React from 'react';  8500 (gzipped, 3400)
import PropTypes from 'prop-types'; 1600 (gzipped, 838)
import { ButtonBase } from './ButtonBase'
import styled from 'styled-components'; 43400 (gzipped, 16200)

const StyledButton = styled (ButtonBase)`
  padding: 8px;
  color: ${props => (props.variant === 'primary' ? 'black' : 'white')} ;
  border: solid 1px
    ${props => (props.variant === 'primary' ? 'black' : 'white')};
`

export const Button = props => <StyledButton {...props} />

Button.PropTypes = {
    variant: PropTypes.string
}