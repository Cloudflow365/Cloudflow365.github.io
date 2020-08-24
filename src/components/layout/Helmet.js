import React from 'react';
import { Helmet } from 'react-helmet';

const DefaultHelmet = () => (
  <Helmet>
    <meta charSet="utf-8" />
    <title>CloudFlow | Dynamics 365 &amp; Power Platform Experts</title>
    <meta
      name="description"
      content="CloudFlow specialise in developing solutions with the Power Platform and Dynamics 365/CDS stack."
    />
    <meta
      name="keywords"
      content="Power Platform, PowerPlatform, PowerApps, Dynamics 365, CDS, D365"
    />
    <meta name="author" content="CloudFlow" />
    <link rel="icon" type="image/png" href="/cloudflow-favicon.png"></link>
  </Helmet>
);

export default DefaultHelmet;
