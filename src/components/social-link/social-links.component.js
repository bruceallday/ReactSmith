import React from 'react'
import FacebookIcon from '@material-ui/icons/Facebook'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import InstagramIcon from '@material-ui/icons/Instagram'
import TwitterIcon from '@material-ui/icons/Twitter'
import PinterestIcon from '@material-ui/icons/Pinterest'
import IconButton from '@material-ui/core/IconButton';

import { useStyles } from './social-links.styles'

const SocialLinks = (props) => {
  const classes = useStyles()
  const { theme } = props

  return (
    <ul className={classes.root} >
      <li className={classes.listItem} >
        <IconButton style={theme.socialIcon} >
          <FacebookIcon />
        </IconButton>
      </li>
      <li
        style={theme.socialIcon}
        className={classes.listItem}  >
        <IconButton style={theme.socialIcon} >
          <InstagramIcon />
        </IconButton>
      </li>
      <li
        style={theme.socialIcon}
        className={classes.listItem}  >
        <IconButton style={theme.socialIcon} >
          <TwitterIcon />
        </IconButton>
      </li>
      <li
        style={theme.socialIcon}
        className={classes.listItem}  >
        <IconButton style={theme.socialIcon} >
          <LinkedInIcon />
        </IconButton>
      </li>
      <li
        style={theme.socialIcon}
        className={classes.listItem}  >
        <IconButton style={theme.socialIcon} >
          <PinterestIcon />
        </IconButton>
      </li>
    </ul>
  )
}

export default SocialLinks