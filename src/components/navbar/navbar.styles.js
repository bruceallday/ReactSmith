import { makeStyles } from '@material-ui/styles/'

export const useStyles = makeStyles({
  root: {
    width: '100%',
    height: '7%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'fixed',
    padding: '1.5% 5% 1.5% 5%',
    boxSizing: 'border-box',
    zIndex: 9,
    fontFamily: "'Roboto', sans-serif",
    // border: '1px solid red',
  },

  navList: {
    display: 'flex',
    flexDirection: 'row',
  },

  listItem: {
    marginRight: '5%',
    userSelect: 'none',
    cursor: 'pointer',
  },

  logo: {
    userSelect: 'none',
    cursor: 'pointer',
  },
})