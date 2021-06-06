import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll';

import SVG0 from '../../assets/undraw_lightbulb_moment_evxr.svg'
import SVG1 from '../../assets/undraw_business_plan_5i9d.svg'
import SVG2 from '../../assets/undraw_work_together_h63l.svg'
import SVG3 from '../../assets/undraw_winners_ao2o.svg'

import SocialLinks from '../../components/social-link/social-links.component'

import { useStyles } from './section-1.styles.js'

const Section1 = (props) => {
  const classes = useStyles()
  const { theme } = props

  const container0text = (
    `Branding user experience bootstrapping. 
    Interaction design hypotheses termsheet return on investment vesting period. 
    Branding long tail rockstar burn rate freemium crowdsource lean startup backing innovator. 
    Bandwidth responsive web design business plan accelerator release learning curve ramen return on investment facebook buzz traction influencer ecosystem. 
    Business plan pivot disruptive early adopters prototype. Value proposition influencer first mover advantage hypotheses.`
  )

  const container1Text = (
    `Conversion value proposition business-to-consumer startup founders partner 
    network influencer crowdsource venture business plan. Seed round growth hacking startup low 
    hanging fruit assets ramen client iPad partnership mass market innovator handshake advisor. 
    Handshake pitch monetization channels long tail learning curve iPhone ecosystem user experience 
    marketing partnership non-disclosure agreement. IPhone partner network assets strategy stock early 
    adopters beta success burn rate paradigm shift agile development responsive web design business model canvas.`
  )


  return (
    <div
      id="mission"
      className={classes.root}
      style={theme.section_1}
    >
      <ScrollAnimation
        className={classes.container_1}
        animateIn="fadeinDown"
        animateOut="fadeOut"
        animateOnce={false}
      >
        <div className={classes.innerContainer_1} >
          <img className={classes.container1_SVG} src={SVG0} />
          <p className={classes.heading_1} >Churn rate conversion direct mailing creative.</p>
          <div className={classes.sectionHr_1} > <hr style={theme.section_1_HR} /> </div>
          <p className={classes.sectionText_1} >
            {container1Text}
          </p>
          <div className={classes.sectionHr_1} > <hr style={theme.section_1_HR} /> </div>
        </div>
      </ScrollAnimation>

      <ScrollAnimation
        className={classes.verticalRule}
        style={theme.section_1_VR}
        animateIn="fadeIn"
        animateOut="fadeOut"
        animateOnce={false}
      >
      </ScrollAnimation>
      <ScrollAnimation
        className={classes.container_0}
        animateIn="fadeinUp"
        animateOut="fadeOut"
        animateOnce={false}
        delay={500}
      >
        <div className={classes.innerContainer_0} >
          <p className={classes.heading_0} >Validation direct mailing buyer ecosystem.</p>
          <div className={classes.sectionHr_0} > <hr style={theme.section_0_HR} /> </div>
          <p className={classes.sectionText_0} >
            {container0text}
          </p>
          <div className={classes.sectionHr_0} > <hr style={theme.section_0_HR} /> </div>
          <div className={classes.imageContainer} >
            <img className={classes.container_SVG_0} src={SVG1} />
            <img className={classes.container_SVG_0} src={SVG2} />
            <img className={classes.container_SVG_0} src={SVG3} />
          </div>
        </div>

        <ScrollAnimation
          className={classes.sectionHr_0A}
          animateIn="fadeinUp"
          animateOut="fadeOut"
          animateOnce={false}
          delay={1300}
        >
          <hr style={theme.section_0_HR} />
          <SocialLinks theme={theme} />
          <hr style={theme.section_0_HR} />
        </ScrollAnimation>
      </ScrollAnimation>
    </div>
  )
}

export default Section1