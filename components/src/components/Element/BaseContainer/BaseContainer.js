import React from 'react';  8500 (gzipped, 3400)
import PropTypes from 'prop-types'; 1600 (gzipped, 838)
import { Flex, Box } from 'rebass'; 15300 (gzipped, 4700)

export const BaseContainer = ({ children, flex, ...props }) => {
    if (flex) {
        return (
            <Flex {...props} className={props.className}>
            {children}
            </Flex>
        )
    } else {
        return (
            <Box {...props} className={props.className}>
            {children}
            </Box>
        )
    }
}

BaseContainer.PropTypes = {
    flex: PropTypes.bool,
    children: PropTypes.node.isRequired
}