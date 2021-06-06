import { makeStyles } from '@material-ui/styles/'

export const useStyles = makeStyles({
  root: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    boxShadow: '0px -10px 20px 0px',
    // padding for nav
    // paddingTop: '4.7%',
    position: 'relative',
    zIndex: 1,

    // border: '1px solid red',
  },

  verticalRule: {
    width: 2,
    height: '90%',

    // border: '1px solid red'
  },

  //---------------------------------------------------------------------------------------------------------------------------

  container_0: {
    width: '50%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    // padding: '5% 0% 5% 0%',

    // border: '1px solid red',
  },

  innerContainer_0: {
    width: '80%',
    height: '60%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',

    // border: '1px solid red',

  },

  iconContainer_0: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',

    // border: '1px solid red'

  },

  heading_0: {
    fontSize: '200%',

    // border: '1px solid red'
  },

  sectionText_0: {
    width: '100%',
    // textAlign: 'center',
    lineHeight: 2,

    // border: '1px solid red'
  },

  sectionHr_0: {
    width: '100%',

    // border: '1px solid red'
  },

  sectionHr_0A: {
    width: '80%',

    // border: '1px solid red'
  },

  container_SVG_0: {
    width: '30%',
    height: 'auto',

    // border: '1px solid red'
  },



  //---------------------------------------------------------------------------------------------------------------------------

  container_1: {
    width: '50%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

    // border: '1px solid red',
  },

  innerContainer_1: {
    width: '80%',
    height: '90%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',

    // border: '1px solid red',

  },

  container1_SVG: {
    width: '45%',
    height: 'auto',
    backgroundColor: 'white',
    padding: '5%',
    borderRadius: 10

    // border: '1px solid red'
  },

  heading_1: {
    fontSize: '250%',

    // border: '1px solid red'
  },

  sectionHr_1: {
    width: '100%',

    // border: '1px solid red'
  },

  sectionText_1: {
    width: '100%',
    // textAlign: 'center',
    lineHeight: 2,

    // border: '1px solid red'
  },
  //---------------------------------------------------------------------------------------------------------------------------
  '@media (max-width: 414px)': {
    root: {
      flexDirection: 'column',
      height: 'auto'
    },
    container_0: {
      width: '99%',
      height: '100%'
    },
    container1_SVG: {
      width: '50%',
      height: 'auto',

      // border: '1px solid red'
    },
    container_1: {
      width: '99%',
      height: '100%'

    },
    innerContainer_0: {
      width: '100%',
      height: '100%'

    },
    innerContainer_1: {
      width: '100%',
      height: '100%'

    },
  },
})




