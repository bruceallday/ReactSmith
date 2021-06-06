import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import { useStyles } from './section-0.styles.js'

const Section0 = (props) => {
  const classes = useStyles()
  const { theme } = props

  return (
    <div
      id="about"
      className={classes.root}
      style={theme.section_0}
    >
      
    </div>
  )
}

export default Section0