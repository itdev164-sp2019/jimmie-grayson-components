//@flow
import * as React from 'react'
import PropTypes from 'prop-types'
import { ButtonBase } from './ButtonBase'
import styled from 'styled-components'

const StyledButton = styled(ButtonBase)`
  ${props => props.theme.variants.button[props.variant || 'primary']};
`

export function Button ({  
  className,
  ...props
}:{
  className: string,
  props: any
})

Button.propTypes = {
  variant: PropTypes.string

}