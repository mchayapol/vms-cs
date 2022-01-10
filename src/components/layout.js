import * as React from "react";
import Header from "../components/header";
import Footer from "./footer";
import { Helmet } from "react-helmet";

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>VMS Computer Science</title>
        <link rel="canonical" href="https://www.cs.au.edu" />

        <script type="application/ld+json">
          {`
        {
          "@context": "https://schema.org",
          "@type": "Study Program",
          "url": "https://www.cs.au.edu",
          "name": "Computer Science",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+66-2-723-2380
            "contactType": "Customer Support"
          }
        }
      `}
        </script>
      </Helmet>
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
