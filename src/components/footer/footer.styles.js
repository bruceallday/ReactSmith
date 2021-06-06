import { makeStyles, withTheme } from '@material-ui/styles/'

export const useStyles = makeStyles({
  root: {
    width: '100%',
    height: 'auto',
    display: 'flex',
    flexDirection: 'row',
    padding: '3%',
    boxSizing: 'border-box',
    fontFamily: "'Hind Guntur', sans-serif"
  },

  categories: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',

  },

  category: {
    marginRight: '5%',
  },

  listItem: {
    width: 100,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: '1%',
    marginTop: '1%',
    userSelect: 'none',
    cursor: 'pointer',
  },

  navList: {
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly'
  },

  navLink: {
    marginTop: '5%',
  },

  addressLine: {
    color: 'white',
  },

  footerImage: {
    width: '10%',
    height: '10%',
  }
})