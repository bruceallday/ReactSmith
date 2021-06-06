import React from 'react'
import ScrollIntoView from 'react-scroll-into-view'

import FacebookIcon from '@material-ui/icons/Facebook'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import InstagramIcon from '@material-ui/icons/Instagram'
import TwitterIcon from '@material-ui/icons/Twitter'
import PinterestIcon from '@material-ui/icons/Pinterest'

import rocketGIF from '../../assets/gifs/animat-rocket-color.gif'

import { useStyles } from './footer.styles'

const Footer = (props) => {
  const classes = useStyles()
  const { theme } = props

  const handleClick = () => {
    console.log('clicked')
  }

  const sociaLinks = (
    <ul className={classes.navList} >
      <li
        onClick={handleClick}
        className={classes.listItem}
      >
        <div>Facebook</div> <FacebookIcon />
      </li>
      <li
        className={classes.listItem}
        onClick={handleClick} >
        <div>Instagram</div> <InstagramIcon />
      </li>
      <li
        className={classes.listItem}
        onClick={handleClick} >
        <div>Twitter</div> <TwitterIcon />
      </li>
      <li
        className={classes.listItem}
        onClick={handleClick} >
        <div>Pinterest</div> <PinterestIcon />
      </li>
      <li
        onClick={handleClick}
        className={classes.listItem}>
        <div>Linkedin</div> <LinkedInIcon />
      </li>
    </ul>
  )
  const nav = (
    <ul className={classes.navList} >
      <ScrollIntoView
        className={classes.listItem}
        smooth={true}
        selector="#banner"
        alignToTop={true}
      >
        <li style={theme.footer} className={classes.navLink} >
          TOP
        </li>
      </ScrollIntoView>
      <ScrollIntoView
        className={classes.listItem}
        smooth={true}
        selector="#about"
        alignToTop={true}
      >
        <li style={theme.footer} className={classes.navLink} >
          ABOUT
        </li>
      </ScrollIntoView>

      <ScrollIntoView
        smooth={true}
        selector="#mission"
        alignToTop={true}
        className={classes.listItem}
      >
        <li style={theme.footer} className={classes.navLink} >
          MISSION
        </li>
      </ScrollIntoView>

      <ScrollIntoView
        smooth={true}
        selector="#contact"
        alignToTop={true}
        className={classes.listItem}
      >
        <li style={theme.footer} className={classes.navLink} >
          CONTACT
          </li>
      </ScrollIntoView>
    </ul>
  )
  const businessAddress = (
    <ul className={classes.businessAdress} >
      <li
        style={theme.footer}
        className={classes.adressLine}>
        Unit 247
      </li>
      <li
        style={theme.footer}
        className={classes.adressLine}>
        Broadway Cresent
      </li>
      <li
        style={theme.footer}
        className={classes.adressLine}
      >
        Toronto CA
      </li>
      <li
        style={theme.footer}
        className={classes.addressLine}
      >
        56610 1YP
      </li>
      <li
        style={theme.footer}
        className={classes.addressLine}
      >
        078 6430 1248
      </li>
    </ul>
  )
  const categories = [["Follow us", sociaLinks], ['Navigate', nav], [' Address', businessAddress]]

  return (
    <div className={classes.root} style={theme.footer} >
      <ul className={classes.categories} >
        {categories.map((item) =>
          <li key={item} style={theme.footer} className={classes.category} >
            {item[0]}
            <hr style={{ color: 'white' }} />
            <div className={classes.footerCategory} >{item[1]}</div>
          </li>
        )}
      </ul>
      <img className={classes.footerImage} src={rocketGIF} />
    </div>
  )
}

export default Footer