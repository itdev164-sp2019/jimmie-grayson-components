import React from 'react' 8.5k (gzipped: 3.4K)
import PropTypes from 'prop-types' 1.6k (gzipped: 838)
import { Box } from 'rebass' 15.3k (gzipped: 4.7k)
import styled from 'styled-components' 43.4k (gzipped)
import { Link }from 'rebass' 15.3k (gzipped: 4.7k)

const Outer = styled(Box)`
    height: ${props -> props.height};
    width: 100%;
    background-color: rebeccapurple;
    margin-bottom: 1.45rem;
`

export const Masthed = ({ height, siteTitle }) =>{
    return (
        <Outer height = {height}>
            <Link
                href="/"
                style={{
                    color:  `white`,
                    textDecoration: `none`
                }}
            >
                {siteTitle}
            </Link>
        </Outer>
    )
}

Masthead.PropTypes = {
    height: PropTypes.string.isRequired,
    siteTitle: PropTypes.string
}