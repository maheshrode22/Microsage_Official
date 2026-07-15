import React from 'react';
import { Link } from 'react-router-dom';
import FadeUp from '../about/FadeUp';

const ServicesCTA = () => (
  <FadeUp>
    <div className="services-cta-panel">
      <div className="tw-relative tw-z-10 tw-mx-auto tw-max-w-3xl tw-text-center">
        <h2 className="tw-mb-4 tw-text-2xl tw-font-extrabold tw-leading-tight tw-text-white sm:tw-text-3xl lg:tw-text-4xl">
          Let&apos;s Build the Future Together
        </h2>
        <p className="tw-mb-8 tw-text-base tw-leading-relaxed tw-text-slate-300 sm:tw-text-lg">
          Partner with Microsage to accelerate learning, innovation, employability, and digital
          transformation through AI-powered technology solutions.
        </p>
        <div className="tw-flex tw-flex-col tw-items-center tw-justify-center tw-gap-3 sm:tw-flex-row sm:tw-gap-4">
          <Link to="/products" className="btn btn-primary-custom services-cta-primary">
            Explore Products
          </Link>
          <Link to="/contact" className="services-cta-outline">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  </FadeUp>
);

export default ServicesCTA;
