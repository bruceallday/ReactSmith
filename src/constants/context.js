import { createContext } from 'react'
import { theme } from './themes'

export const defaultContext = {
  initialState: {
    theme: theme
  },

  dispatch: () => { },
  reducer: (state, action) => {
    switch (action.type) {
      case 'JUMP IN AIR':
        console.log('I jumped in the air')
    }
  },

  setTheme: (themeObject) => {
    return ({
      fontFamily: {
        fontFamily: themeObject.fontFamily
      },
      button_0: {
        backgroundColor: themeObject.button_0_color,
        border: `${themeObject.button_0_border}`,
        borderRadius: themeObject.button_0_radius,
        fontSize: themeObject.button_0_fontSize,
        color: themeObject.button_0_fontColor,
        boxShadow: themeObject.button_0_shadow,
      },
      button_1: {
        backgroundColor: themeObject.button_1_color,
        border: `${themeObject.button_1_border}`,
        borderRadius: themeObject.button_1_radius,
        fontSize: themeObject.button_1_fontSize,
        color: themeObject.button_1_fontColor,
        boxShadow: themeObject.button_1_shadow,
      },
      socialIcon: {
        color: themeObject.socialIcons,
      },
      nav: {
        background: themeObject.nav_BG
      },
      banner: {
        background: [`url(${themeObject.banner_BG_IMG})`, themeObject.banner_BG],
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      },
      section_0: {
        background: themeObject.section0_BG
      },
      section_1: {
        background: [`url(${themeObject.section1_BG_IMG})`, themeObject.section1_BG]
      },
      section_1_HR: {
        color: theme.section1_HRule,
      },
      section_1_VR: {
        backgroundColor: theme.section1_VRule,
      },
      section_2: {
        background: themeObject.section2_BG,
        // fontFamily: "'Abril Fatface', cursive",
      },
      footer: {
        color: themeObject.footerTextColor,
        background: themeObject.footer_BG
      },
      floatingText: {
        color: themeObject.floatingTextColor
      },
      subscribeForm: {
        width: themeObject.form_Width,
        height: themeObject.form_Height,
        color: themeObject.form_TextColor,
        backgroundColor: themeObject.form_BG,
        border: themeObject.form_Border,
        borderRadius: themeObject.form_border_radius,
        borderColor: themeObject.form_border_color,
        marginTop: '2%',
        padding: '1%'
      },
      formSubmitButton: {
        width: themeObject.sub_button_width,
        height: themeObject.sub_button_Height,
        color: themeObject.sub_button_TextColor,
        backgroundColor: themeObject.sub_button_BG,
        border: themeObject.sub_button_Border,
        borderRadius: themeObject.sub_button_border_radius,
        borderColor: themeObject.sub_button_border_color,
        marginTop: '5%',
        fontSize: 20
      }
    })
  }
}

export default createContext(defaultContext)