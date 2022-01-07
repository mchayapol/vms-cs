import * as React from "react";
import Header from "../components/header";
import Footer from "./footer";
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      {/* <CookieConsent
        location="bottom"
        buttonText="Accept"
        declineButtonText="Decline"
        cookieName="gatsby-gdpr-google-analytics"
      >
        This site uses cookies ...
      </CookieConsent> */}
    </>
  );
};

export default Layout;
