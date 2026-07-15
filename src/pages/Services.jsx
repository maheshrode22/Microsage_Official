import React from 'react';
import { Container } from 'react-bootstrap';
import FadeUp from '../components/about/FadeUp';
import ServiceCard from '../components/services/ServiceCard';
import WhyChooseCard from '../components/services/WhyChooseCard';
import ServicesCTA from '../components/services/ServicesCTA';
import {
  services,
  whyChoose,
} from '../data/services';
import '../styles/components/Services.css';

const SectionHeader = ({ eyebrow, title, subtitle, delay = 0 }) => (
  <FadeUp delay={delay} className="tw-mx-auto tw-mb-10 tw-max-w-3xl tw-text-center">
    {eyebrow && (
      <p className="services-eyebrow">{eyebrow}</p>
    )}
    <h2 className="tw-mb-4 tw-text-2xl tw-font-extrabold tw-leading-tight tw-text-slate-900 sm:tw-text-3xl lg:tw-text-[2.15rem]">
      {title}
    </h2>
    {subtitle && (
      <p className="tw-m-0 tw-text-base tw-leading-relaxed tw-text-slate-500 sm:tw-text-[1.05rem]">
        {subtitle}
      </p>
    )}
  </FadeUp>
);

const Services = () => (
  <section id="services" className="services-section">
    {/* Hero */}
    <div className="services-hero">
      <Container fluid className="services-container px-3 px-md-4 px-lg-5">
        <FadeUp className="tw-mx-auto tw-max-w-3xl tw-text-center">
          <p className="services-eyebrow">OUR SERVICES</p>
          <h1 className="tw-mb-5 tw-text-3xl tw-font-extrabold tw-leading-tight tw-text-slate-900 sm:tw-text-4xl lg:tw-text-[2.75rem]">
            AI-Powered Technology Solutions for the{' '}
            <span className="services-heading-highlight">Future</span>
          </h1>
          <p className="tw-m-0 tw-text-base tw-leading-relaxed tw-text-slate-500 sm:tw-text-lg">
            Microsage Private Limited delivers intelligent digital solutions that transform learning,
            employability, institutional excellence, and enterprise innovation through Artificial
            Intelligence, data-driven insights, and scalable technology platforms.
          </p>
        </FadeUp>
      </Container>
    </div>

    {/* Service cards */}
    <div className="services-block">
      <Container fluid className="services-container px-3 px-md-4 px-lg-5">
        <div className="tw-grid tw-grid-cols-1 tw-gap-6 md:tw-grid-cols-2 xl:tw-grid-cols-4 tw-items-stretch">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} delay={(index % 4) * 80} />
          ))}
        </div>
      </Container>
    </div>

    {/* Why Choose */}
    <div className="services-block services-block--muted">
      <Container fluid className="services-container px-3 px-md-4 px-lg-5">
        <SectionHeader title="Why Choose Microsage" />
        <div className="tw-grid tw-grid-cols-1 tw-gap-5 sm:tw-grid-cols-2 xl:tw-grid-cols-4 tw-items-stretch">
          {whyChoose.map((item, index) => (
            <WhyChooseCard key={item.id} item={item} delay={(index % 4) * 70} />
          ))}
        </div>
      </Container>
    </div>

    {/* CTA */}
    <div className="services-block">
      <Container fluid className="services-container px-3 px-md-4 px-lg-5">
        <ServicesCTA />
      </Container>
    </div>
  </section>
);

export default Services;
