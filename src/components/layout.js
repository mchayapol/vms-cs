import * as React from "react";

const Layout = ({ children }) => {
  return (
    <>
      {/* <GlobalStyle />
      <Header /> */}

      <main>{children}</main>
      {/* <Footer /> */}
      {/* <CookieConsent
        location="bottom"
        buttonText="Accept"
        declineButtonText="Decline"
        cookieName="gatsby-gdpr-google-analytics"
      >
        This site uses cookies ...
      </CookieConsent> */}
    </>
  )
}

export default Layout