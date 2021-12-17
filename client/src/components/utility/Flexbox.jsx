import React from 'react'

import Box from './Box'

const Flexbox = ({ className, ...rest }) => (
	<Box className={`Flexbox${className ? ` ${className}` : ''}`} {...rest} />
)

export default Flexbox
