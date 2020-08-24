import React from 'react';
import Layout from '../components/layout/Layout';
import HeroImage from '../svg/HeroImage';
import DefaultHelmet from '../components/layout/Helmet';

export default () => (
  <div>
    <DefaultHelmet />
    <Layout>
      <section className="pt-20 md:pt-40">
        <div className="container mx-auto px-8 lg:flex">
          <div className="text-center lg:text-left lg:w-1/2">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">
              Power Platform and Dynamics 365 Experts
            </h1>
            <p className="text-xl lg:text-2xl mt-6 font-light">
              CloudFlow specialise in developing solutions with the Power Platform and Dynamics
              365/CDS stack. We are currently redesigning our website, if you would like more
              information or to talk about a project you need assistance with please drop us an
              email on <a href="mailto:support@cloudflow365.com">support@cloudflow365.com</a> and
              we'll arrange a call.
            </p>
          </div>
          <div className="lg:w-1/2">
            <HeroImage />
          </div>
        </div>
      </section>
    </Layout>
  </div>
);
