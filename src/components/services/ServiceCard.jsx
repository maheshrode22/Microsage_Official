import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import FadeUp from '../about/FadeUp';

const ACCENT = {
  brand: {
    icon: 'tw-bg-brand-50 tw-text-brand-600 tw-border-brand-100',
    bar: 'tw-from-brand-600 tw-to-brand-400',
    badge: 'tw-bg-brand-50 tw-text-brand-700',
    hover: 'hover:tw-border-brand-200',
  },
  indigo: {
    icon: 'tw-bg-indigo-50 tw-text-indigo-600 tw-border-indigo-100',
    bar: 'tw-from-indigo-600 tw-to-indigo-400',
    badge: 'tw-bg-indigo-50 tw-text-indigo-700',
    hover: 'hover:tw-border-indigo-200',
  },
  emerald: {
    icon: 'tw-bg-emerald-50 tw-text-emerald-600 tw-border-emerald-100',
    bar: 'tw-from-emerald-600 tw-to-emerald-400',
    badge: 'tw-bg-emerald-50 tw-text-emerald-700',
    hover: 'hover:tw-border-emerald-200',
  },
  sky: {
    icon: 'tw-bg-sky-50 tw-text-sky-600 tw-border-sky-100',
    bar: 'tw-from-sky-600 tw-to-sky-400',
    badge: 'tw-bg-sky-50 tw-text-sky-700',
    hover: 'hover:tw-border-sky-200',
  },
};

const ServiceCard = ({ service, delay = 0 }) => {
  const {
    Icon,
    title,
    poweredBy,
    description,
    features,
    cta,
    link,
    external,
    accent = 'brand',
  } = service;

  const tones = ACCENT[accent] || ACCENT.brand;
  const ctaClass =
    'tw-inline-flex tw-items-center tw-gap-2 tw-mt-auto tw-pt-4 tw-text-sm tw-font-semibold tw-text-brand-600 tw-transition-colors tw-duration-200 group-hover:tw-text-brand-700';

  return (
    <FadeUp delay={delay} className="tw-h-full">
      <article
        className={[
          'tw-group tw-relative tw-flex tw-h-full tw-flex-col tw-overflow-hidden',
          'tw-rounded-card tw-border tw-border-slate-200/80 tw-bg-white',
          'tw-shadow-soft tw-transition-all tw-duration-300 tw-ease-out',
          'hover:tw--translate-y-1.5 hover:tw-shadow-soft-lg',
          tones.hover,
        ].join(' ')}
      >
        <div className={`tw-absolute tw-inset-x-0 tw-top-0 tw-h-1 tw-bg-gradient-to-r ${tones.bar}`} />

        <div className="tw-flex tw-h-full tw-flex-col tw-p-6 tw-pt-7 sm:tw-p-7">
          <div
            className={[
              'tw-mb-5 tw-inline-flex tw-h-12 tw-w-12 tw-items-center tw-justify-center',
              'tw-rounded-xl tw-border tw-transition-transform tw-duration-300',
              'group-hover:tw-scale-105',
              tones.icon,
            ].join(' ')}
          >
            <Icon size={22} strokeWidth={2} aria-hidden="true" />
          </div>

          <h3 className="tw-mb-2 tw-text-lg tw-font-bold tw-leading-snug tw-text-slate-900 sm:tw-text-xl">
            {title}
          </h3>

          {poweredBy && (
            <span
              className={[
                'tw-mb-3 tw-inline-flex tw-w-fit tw-items-center tw-rounded-full',
                'tw-px-2.5 tw-py-0.5 tw-text-xs tw-font-semibold',
                tones.badge,
              ].join(' ')}
            >
              Powered by {poweredBy}
            </span>
          )}

          <p className="tw-mb-5 tw-text-sm tw-leading-relaxed tw-text-slate-500">
            {description}
          </p>

          <ul className="tw-mb-2 tw-flex tw-flex-col tw-gap-2.5 tw-border-t tw-border-slate-100 tw-pt-4">
            {features.map((feature) => (
              <li
                key={feature}
                className="tw-flex tw-items-start tw-gap-2 tw-text-sm tw-font-medium tw-text-slate-600"
              >
                <Check
                  size={15}
                  strokeWidth={2.5}
                  className="tw-mt-0.5 tw-shrink-0 tw-text-brand-600"
                  aria-hidden="true"
                />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          {external ? (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className={ctaClass}
            >
              {cta}
              <ArrowRight
                size={16}
                strokeWidth={2.25}
                className="tw-transition-transform tw-duration-200 group-hover:tw-translate-x-1"
                aria-hidden="true"
              />
            </a>
          ) : (
            <Link to={link} className={ctaClass}>
              {cta}
              <ArrowRight
                size={16}
                strokeWidth={2.25}
                className="tw-transition-transform tw-duration-200 group-hover:tw-translate-x-1"
                aria-hidden="true"
              />
            </Link>
          )}
        </div>
      </article>
    </FadeUp>
  );
};

export default ServiceCard;
