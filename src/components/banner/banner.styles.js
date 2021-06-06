import { makeStyles } from '@material-ui/styles/'

export const useStyles = makeStyles({
  root: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: '4.7%',
    boxSizing: 'border-box',
    boxShadow: '0 13px 23px 0px black',
    // border: '1px solid red',
  },

  //---------------------------------------------------------------------------------------------------------------------------

  container_0: {
    width: '50%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    transform: 'skew(25deg)',
    // padding: '5% 0% 5% 0%',

    // border: '1px solid red',
  },

  innerContainer_0: {
    width: '100%',
    height: '90%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    objectFit: 'contain',

    // border: '1px solid red',

  },

  imageContainer_0: {
    width: '70%',
    height: 'auto',
    alignSelf: 'flex-start',
    // border: '1px solid red',
    boxShadow: '10px 10px 17px -10px rgba(0,0,0,0.75)',
    zIndex: 1,
  },

  image: {
    width: '100%',
    height: 'auto',
  },

  card_0_container: {
    position: 'absolute',
    width: '80%',
    height: '80%',
  },

  card_0: {
    position: 'absolute',
    backgroundColor: '#c2bbf0',
    opacity: '0.5',
    borderRadius: 25,
    width: '100%',
    height: '100%',
    boxShadow: '10px 10px 17px -10px rgba(0,0,0,0.75)',
    // border: '1px solid red',
  },

  card_1_container: {
    position: 'absolute',
    width: '20%',
    height: '20%',
    top: '0%',
    right: '15%',
    // border: '1px solid red',
  },

  card_1: {
    alignSelf: 'flex-end',
    position: 'absolute',
    backgroundColor: '#c2bbf0',
    opacity: '0.5',
    borderRadius: 25,
    width: '100%',
    height: '100%',
    boxShadow: '10px 10px 17px -10px rgba(0,0,0,0.75)',
  },

  card_2_container: {
    position: 'absolute',
    width: '20%',
    height: '20%',
    top: '15%',
    right: '92%',
    // border: '1px solid red',
  },

  card_2: {
    alignSelf: 'flex-end',
    position: 'absolute',
    backgroundColor: '#c2bbf0',
    opacity: '0.5',
    borderRadius: 25,
    width: '100%',
    height: '100%',
    boxShadow: '10px 10px 17px -10px rgba(0,0,0,0.75)',
  },

  //---------------------------------------------------------------------------------------------------------------------------

  container_1: {
    width: '50%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: "'Roboto', sans-serif",

    // border: '1px solid red',
  },

  innerContainer_1: {
    width: '90%',
    height: '80%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',

    // border: '1px solid red',

  },

  sectionheading: {
    fontSize: '2em',
  },

  section1_text: {
    width: '100%',
    height: '25%',
    display: 'flex',
    flexDirection: 'row',

    // border: '1px solid red',
  },

  textContainer: {
    width: '80%',
    height: 'auto%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    // border: '1px solid red',
  },

  textContainer2: {
    alignSelf: 'center',
    width: '80%',
    height: 'auto%',
    // border: '1px solid red',
  },

  textContainer3: {
    alignSelf: 'center',
    width: '60%',
    height: 'auto%',
    // border: '1px solid red',
  },

  text: {
    fontSize: '5em',
    height: 'auto',
    // border: '1px solid red',

  },

  buttonContainer: {
    width: '60%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    // border: '1px solid red',
  },

  //---------------------------------------------------------------------------------------------------------------------------
  '@media (max-width: 414px)': {
    root: {
      flexDirection: 'column',
      height: 'auto'
    },
    container_0: {
      width: '99%',
      height: '100%',
    },
    container1_SVG: {
      width: '50%',
      height: 'auto',

      // border: '1px solid red',
    },
    container_1: {
      width: '99%',
      height: '100%',

    },
    innerContainer_0: {
      width: '100%',
      height: '100%',

    },
    innerContainer_1: {
      width: '100%',
      height: '100%',

    },
  },
})