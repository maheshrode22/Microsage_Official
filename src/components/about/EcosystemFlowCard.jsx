import React from 'react';

/**
 * Soft glass-style card for a primary ecosystem flow node.
 */
const EcosystemFlowCard = ({
  icon: Icon,
  title,
  subtitle,
  description,
  accent = 'brand',
  featured = false,
  className = '',
}) => {
  const accentStyles = {
    brand: {
      iconWrap: 'tw-bg-brand-50 tw-text-brand-600 tw-border-brand-100',
      bar: 'tw-from-brand-600 tw-to-brand-400',
      badge: 'tw-bg-brand-50 tw-text-brand-700',
    },
    indigo: {
      iconWrap: 'tw-bg-indigo-50 tw-text-indigo-600 tw-border-indigo-100',
      bar: 'tw-from-indigo-600 tw-to-indigo-400',
      badge: 'tw-bg-indigo-50 tw-text-indigo-700',
    },
    sky: {
      iconWrap: 'tw-bg-sky-50 tw-text-sky-600 tw-border-sky-100',
      bar: 'tw-from-sky-600 tw-to-sky-400',
      badge: 'tw-bg-sky-50 tw-text-sky-700',
    },
    emerald: {
      iconWrap: 'tw-bg-emerald-50 tw-text-emerald-600 tw-border-emerald-100',
      bar: 'tw-from-emerald-600 tw-to-emerald-400',
      badge: 'tw-bg-emerald-50 tw-text-emerald-700',
    },
  };

  const tones = accentStyles[accent] || accentStyles.brand;

  return (
    <article
      className={[
        'tw-group tw-relative tw-w-full tw-overflow-hidden',
        'tw-rounded-card',
        'tw-border tw-border-slate-200/80',
        'tw-bg-white/80 tw-backdrop-blur-md',
        'tw-shadow-soft',
        'tw-transition-all tw-duration-300 tw-ease-out',
        'hover:tw--translate-y-1 hover:tw-border-brand-200 hover:tw-shadow-soft-lg',
        featured ? 'tw-ring-1 tw-ring-brand-100' : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <div
        className={[
          'tw-absolute tw-inset-x-0 tw-top-0 tw-h-1',
          'tw-bg-gradient-to-r',
          tones.bar,
        ].join(' ')}
      />

      <div className="tw-flex tw-flex-col tw-gap-4 tw-p-5 sm:tw-p-6 md:tw-p-7">
        <div className="tw-flex tw-items-start tw-gap-4">
          <div
            className={[
              'tw-flex tw-h-12 tw-w-12 tw-shrink-0 tw-items-center tw-justify-center',
              'tw-rounded-2xl tw-border',
              'tw-transition-transform tw-duration-300 group-hover:tw-scale-105',
              tones.iconWrap,
            ].join(' ')}
          >
            {Icon ? <Icon size={24} strokeWidth={2} aria-hidden="true" /> : null}
          </div>

          <div className="tw-min-w-0 tw-flex-1">
            <h3 className="tw-m-0 tw-text-lg tw-font-bold tw-leading-snug tw-text-slate-900 sm:tw-text-xl">
              {title}
            </h3>
            {subtitle ? (
              <p
                className={[
                  'tw-mt-1.5 tw-mb-0 tw-inline-flex tw-rounded-full tw-px-2.5 tw-py-0.5',
                  'tw-text-xs tw-font-semibold tw-tracking-wide',
                  tones.badge,
                ].join(' ')}
              >
                {subtitle}
              </p>
            ) : null}
          </div>
        </div>

        {description ? (
          <p className="tw-m-0 tw-text-sm tw-leading-relaxed tw-text-slate-600 sm:tw-text-[0.95rem]">
            {description}
          </p>
        ) : null}
      </div>
    </article>
  );
};

export default EcosystemFlowCard;
