import React from 'react';  8500 (gzipped, 3400)
import PropTypes from 'prop-types'; 1600 (gzipped, 838)
import { Button } from 'rebass'; 15300 (gzipped, 4700)
import styled from 'styled-components'; 43400 (gzipped, 4700)

const Reset = styled (Button)`
background: none;
box-shadow: none;
font-weight: normal;
border-radius: 0;
cursor: pointer;
`

export const ButtonBase = ({ children, ...props}) => (
    <Reset {...props}>{children}</Reset>
)

Button.propTypes = {
    children: PropTypes.node.isRequired
}