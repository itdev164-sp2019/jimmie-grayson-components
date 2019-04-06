//@flow
import * as React from 'react'
import { BaseContainer } from '../BaseContainer'

export const Nav = props => <BaseContainer as="nav" {...props} />
export function Nav ({  
  className,
  ...props
}:{
  className: string,
  props: any
})