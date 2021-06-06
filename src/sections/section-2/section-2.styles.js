import { makeStyles } from '@material-ui/styles/'

export const useStyles = makeStyles({
  root: {
    width: '100%',
    height: '65%',
    display: 'flex',
    flexDirection: 'row',
    // alignItems: 'center',
    // // padding for nav
    paddingTop: '4.7%',
    // position: 'relative',
    // boxShadow: '0 10px 10px 0px black',
    // border: '1px solid red',
  },

  //---------------------------------------------------------------------------------------------------------------------------

  container_0: {
    width: '50%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    // alignItems: 'center',
    // // padding: '5% 0% 5% 0%',

    // border: '1px solid red',
  },

  innerContainer_0: {
    width: '90%',
    height: '90%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',

    // border: '1px solid red',

  },

  container_SVG_0: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },

  //---------------------------------------------------------------------------------------------------------------------------

  container_1: {
    width: '50%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    // fontFamily: "'Abril Fatface', cursive",

    // border: '1px solid red',
  },

  innerContainer_1: {
    width: '90%',
    height: '90%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',

    // border: '1px solid red',
  },

  formHeading: {
    fontSize: '500%',
    alignSelf: 'flex-start',


    // border: '1px solid red'
  },

  formText: {
    fontSize: '120%',
    lineHeight: 1.5,

    // border: '1px solid red'
  },

  formCard: {
    width: '70%',
    height: '80%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',

    // border: '1px solid red'

  },
  '@media (max-width: 414px)': {
    root: {
      flexDirection: 'column',
      height: '70vh',
    },

    container_1: {
      width: '95%',
    },

    innerContainer_1: {
      width: '95%',
    },

    formCard: {
      width: '100%'
    }
  },

})
