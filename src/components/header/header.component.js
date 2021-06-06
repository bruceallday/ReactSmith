import React from 'react'

import { useStyles } from './header.styles'

const Header = (props) => {
  const classes = useStyles()
  const { theme } = props
  return (
    <div>
      Header
    </div>
  )
}

export default Header