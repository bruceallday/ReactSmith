import React, { useState } from 'react'
import MailchimpSubscribe from 'react-mailchimp-subscribe'

import FloatingText from '../../components/floating-text/floating-text.component'

import { useStyles } from './signupform.styles'

const SignupForm = (props) => {
  const { theme } = props
  const classes = useStyles()
  const [isEmailValid, setIsEmailVaild] = useState(null)
  const [float, setFloat] = useState(false)
  const url = process.env.MAILCHIMP

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)
  }

  const CustomForm = ({ status, message, onValidated }) => {
    let email
    const submit = () => {
      setIsEmailVaild(null)
      if (validateEmail(email) === true) {
        setIsEmailVaild(true)
        setFloat(true)
        onValidated({
          EMAIL: email.value,
        })
      } else {
        setIsEmailVaild(false)
      }
    }

    return (
      <div className={classes.formContainer} >
        <div style={{ height: '15' }} >
          {isEmailValid === false && (
            <div style={{ color: "red" }}>
              invalid email
            </div>
          )}
          {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
          {status === "error" && (
            <div style={{ color: "red" }}>
              invalid email are you already subscribed?
            </div>
          )}
          {status === "success" && (
            <div>
              {float && (
                <FloatingText
                  theme={theme.floatingText}
                  setFloat={setFloat}
                  text={'Success!'}
                />
              )}
            </div>
          )}
        </div>
        <input
          className={classes.subscribeForm}
          style={theme.subscribeForm}
          ref={node => (email = node)}
          type="email"
          placeholder="Your email"
        />
        <br />
        <button
          style={theme.formSubmitButton}
          className={classes.formSubmitButton}
          onClick={submit}>
          Subscribe
        </button>
      </div>
    );
  };

  return (
    <div className={classes.root} >
      <MailchimpSubscribe
        url={url}
        render={({ subscribe, status, message }) => (
          <CustomForm
            status={status}
            message={message}
            onValidated={formData => subscribe(formData)}
          />
        )}
      />
    </div>
  )
}

export default SignupForm
