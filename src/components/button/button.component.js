import React from 'react'

import { useStyles } from './button.styles'

const Button = (props) => {
  const classes = useStyles()
  const { theme, text } = props

  return (
    <div
      style={theme}
      className={classes.root} >
      <div className={classes.text} >
        {text}
      </div>
    </div>
  )
}

export default Button