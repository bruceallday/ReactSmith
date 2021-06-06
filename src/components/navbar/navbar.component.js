import React, { useState } from 'react'
import ScrollIntoView from 'react-scroll-into-view'
import { useStyles } from './navbar.styles'

const Navbar = (props) => {
  const classes = useStyles()
  const { theme } = props

  return (
    <div className={classes.root} style={theme.nav} >
      <ScrollIntoView
        smooth={true}
        selector="#banner" >
        <div
          className={classes.logo}
        >
          Logo
      </div>
      </ScrollIntoView>

      <ul className={classes.navList} >
       <ScrollIntoView
          className={classes.listItem}
          smooth={true}
          selector="#banner"
          alignToTop={true}
        >
          <li>
             ABOUT
          </li>
        </ScrollIntoView> /

        <ScrollIntoView
          smooth={true}
          selector="#mission"
          alignToTop={false}
          className={classes.listItem}
        >
          <li>
             MISSION
        </li>
        </ScrollIntoView> / 

        <ScrollIntoView
          smooth={true}
          selector="#contact"
          alignToTop={true}
          className={classes.listItem}
        >
          <li>
            CONTACT
          </li>
        </ScrollIntoView>
      </ul>
    </div>
  )
}

export default Navbar


