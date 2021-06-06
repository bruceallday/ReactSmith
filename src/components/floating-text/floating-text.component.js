import React from 'react'

import Typography from '@material-ui/core/Typography'

import { useStyles } from './floating-text.styles.js'

const FloatingText = (props) => {
  const classes = useStyles()
  const { theme, text, setFloat } = props

  return (
    <Typography
      style={theme.floatingText}
      className={classes.email}
      onAnimationEnd={() => setFloat(false)}
    > {text}
    </Typography>
  )
}

export default FloatingText