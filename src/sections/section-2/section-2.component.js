import React from 'react'

import SVG_0 from '../../assets/undraw_designer_mindset_7fhu.svg'

import ScrollAnimation from 'react-animate-on-scroll'
import SignupForm from '../../components/signup-form/signupform.compnent'


import { useStyles } from './section-2.styles'

const Section2 = (props) => {
  const classes = useStyles()
  const { theme } = props

  const formText = (
    `Tumeric fingerstache hoodie hella godard bitters drinking vinegar freegan ugh, 
    actually taiyaki organic banh mi heirloom vinyl. Vexillologist ethical helvetica 
    bushwick VHS photo booth yr iPhone snackwave. Freegan single-origin coffee meggings 
    bespoke health goth VHS. Pickled four dollar toast cliche gentrify roof party.`
  )

  return (
    <div
      id="contact"
      className={classes.root}
      style={theme.section_2}
    >
      <ScrollAnimation
        className={classes.container_1}
        animateIn="fadeinLeft"
        animateOut="fadeOut"
        animateOnce={false}
        delay={0}
      >
        <div className={classes.innerContainer_1} >
          <div className={classes.formCard} >
            <h3 className={classes.formHeading} >Subscribe for the latest..</h3>
            <p className={classes.formText} >{formText}</p>
            <SignupForm theme={theme} />
          </div>
        </div>
      </ScrollAnimation>

      <ScrollAnimation
        className={classes.container_0}
        animateIn="fadeinRight"
        animateOut="fadeOut"
        animateOnce={false}
        delay={0}
      >
        <div className={classes.innerContainer_0} >
          <div className={classes.container_SVG_0} >
            <img src={SVG_0} />
          </div>
        </div>
      </ScrollAnimation>
    </div>
  )
}

export default Section2