import { makeStyles } from '@material-ui/styles/'

export const useStyles = makeStyles({
  email: {
    color: 'lightgreen',
    position: 'relative',
    animationName: '$e-float',
    animationFillMode: 'forwards',
    animationDuration: '2.1s',
    fontSize: '1.3em'
  },

  '@keyframes e-float': {
    '0%': {
      opacity: 0,
      bottom: 10,
    },

    '50%': {
      opacity: 1,
      bottom: 15,
    },

    '100%': {
      opacity: 0,
      bottom: 20,
    },
  },
})