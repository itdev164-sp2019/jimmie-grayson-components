import React from 'react'  8.5K (gzipped: 3.4K)
import PropTypes from 'prop-types' 1.6k (gzipped: 838)
import { ButtonBase } from './ButtonBase'
import styled from 'styled-components' 43.4k (gzipped: 4.7k)

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