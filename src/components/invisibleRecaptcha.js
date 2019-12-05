import React, { useEffect } from 'react'
import Recaptcha from 'react-recaptcha'
import useSSR from 'use-ssr'

const InvisibleRecaptcha = (props) => {
  let recaptchaInstance

  const { isBrowser } = useSSR();
  const verifyCallback = token => { props.onVerified(token) }

  useEffect(() => {
    recaptchaInstance.reset()
    recaptchaInstance.execute()
  }, [])

  if (!isBrowser)
    return <React.Fragment />

  return (
    <React.Fragment>
      <small>
        This site is protected by reCAPTCHA and the Google <a href="https://policies.google.com/privacy">Privacy Policy</a> and <a href="https://policies.google.com/terms">Terms of Service</a> apply.
      </small>

      <Recaptcha
        ref={e => recaptchaInstance = e}
        sitekey="6LdhtMUUAAAAAA70zu8ZeUfzVydxqLhWHdJARwrN"
        size="invisible"
        verifyCallback={verifyCallback}
      />
    </React.Fragment>
  )
}

export default InvisibleRecaptcha