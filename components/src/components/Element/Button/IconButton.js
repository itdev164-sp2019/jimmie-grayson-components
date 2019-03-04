import React from 'react';  8500 (gzipped, 3400)
import PropTypes from 'prop-types'; 1600 (gzipped, 838)
import styled from 'styled-components'; 43400 (gzipped, 16200)
import { ButtonBase } from './ButtonBase'

const StyledButton = styled (ButtonBase)`
 ${props => props.themes.variant.iconButton[props.variant || 'primary']};
`

export const IconButton = styled(({ icon, ...props}) => {
    let clone = React.cloneElement(icon, ...props)
    return <StyledButton as={clone.type} {...props} className={props.className} />
})
    //We could add styles here, but it is not necessary.
    //The main reason this is a styled component is to wrap the styled icon passed in as a prop.


IconButton.defaultProps = {
    size: 24
}

IconButton.PropTypes = {
    icon: PropTypes.node.isRequired,
    variant: PropTypes.string
}
