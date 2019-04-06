//@flow
import React from 'react'
import PropTypes from 'prop-types'
import { BaseContainer } from '../BaseContainer'

type Props = {
    children: PropTypes.node
}

export function Footer ({  
  className,
  ...props
}:{
  className: string,
  props: any
})

Footer.propTypes = {
    children: PropTypes.node.isRequired
}