import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'

import Button from '../button/button.component'

import image_0 from '../../assets/photos/shutterstock_562748479.jpg'

import { useStyles } from './banner.styles'

const Banner = (props) => {
  const classes = useStyles()
  const { theme } = props

  const section1_text = (
    `Research & development user experience android 
    churn rate value proposition crowdfunding. 
    Client launch party innovator rockstar non-disclosure 
    agreement twitter strategy product management crowdfunding early 
    adopters startup iteration return on investment.`
  )

  return (
    <div
      id="banner"
      className={classes.root}
      style={theme.banner}
    >
      <ScrollAnimation
        className={classes.container_1}
        animateIn="fadein"
        animateOut="fadeOut"
        animateOnce={false}
        delay={0}
      >
        <div className={classes.innerContainer_1} >
          <ScrollAnimation
            className={classes.textContainer2}
            animateIn="fadeinRight"
            animateOut="fadeOut"
            animateOnce={false}
            delay={300}
          >
            <p style={{ fontSize: '400%', marginBottom: '2%', fontWeight: 'bolder' }} > Pivot | Ecosystem investor monetization </p>
          </ScrollAnimation>

          <ScrollAnimation
            className={classes.textContainer}
            animateIn="fadeinRight"
            animateOut="fadeOut"
            animateOnce={false}
            delay={900}
          >
            <div className={classes.text} >59% <p style={{ fontSize: 19 }} >startup twitter business model canvas </p> </div>
            <div className={classes.text} >98% <p style={{ fontSize: 19 }} >channels lean startup interaction design </p> </div>
            <div className={classes.text} >67% <p style={{ fontSize: 19 }} >Infographic ownership business-to-business </p> </div>
          </ScrollAnimation>
          <ScrollAnimation
            animateIn="fadeinRight"
            animateOut="fadeOut"
            animateOnce={false}
            delay={1200}
            className={classes.buttonContainer}
          >
            <Button
              text='Sign up'
              theme={theme.button_0}
            />
            <Button
              text='Submit'
              theme={theme.button_1}
            />
          </ScrollAnimation>
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
          <ScrollAnimation
            animateIn="fadeinRight"
            animateOut="fadeOut"
            animateOnce={false}
            delay={500}
            className={classes.imageContainer_0}
          >
            <img
              src={image_0}
              className={classes.image}
            />
          </ScrollAnimation>

          <ScrollAnimation
            animateIn="fadeinRight"
            animateOut="fadeOut"
            animateOnce={false}
            delay={100}
            className={classes.card_0_container}
          >
            <div className={classes.card_0} />
          </ScrollAnimation>

          <ScrollAnimation
            animateIn="fadeinRight"
            animateOut="fadeOut"
            animateOnce={false}
            delay={1700}
            className={classes.card_1_container}
          >
            <div className={classes.card_1} />
          </ScrollAnimation>

          <ScrollAnimation
            animateIn="fadeinRight"
            animateOut="fadeOut"
            animateOnce={false}
            delay={1900}
            className={classes.card_2_container}
          >
            <div className={classes.card_2} />
          </ScrollAnimation>
        </div>
      </ScrollAnimation>
    </div>
  )
}

export default Banner