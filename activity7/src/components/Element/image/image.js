//@flow
import * as React from 'react'
import PropTypes from 'prop-types'
import { Image as ImageBase } from 'rebass'

export function Image ({ 
  src, 
  className,
  ...props
}:{
  src: boolean,
  className: string,
  props: any
})
<ImageBase src={src} {...props} />
Image.propTypes = {
    src: PropTypes.string.isRequired
}
