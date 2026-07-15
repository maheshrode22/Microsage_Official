import React from 'react';

/**
 * End-user stakeholder card with bullet outcomes.
 */
const EcosystemEndUserCard = ({
  icon: Icon,
  title,
  points = [],
  accent = 'brand',
  className = '',
}) => {
  const accentMap = {
    brand: {
      icon: 'tw-bg-brand-50 tw-text-brand-600 tw-border-brand-100',
      bullet: 'tw-bg-brand-500',
      hover: 'hover:tw-border-brand-200',
    },
    violet: {
      icon: 'tw-bg-violet-50 tw-text-violet-600 tw-border-violet-100',
      bullet: 'tw-bg-violet-500',
      hover: 'hover:tw-border-violet-200',
    },
    teal: {
      icon: 'tw-bg-teal-50 tw-text-teal-600 tw-border-teal-100',
      bullet: 'tw-bg-teal-500',
      hover: 'hover:tw-border-teal-200',
    },
    amber: {
      icon: 'tw-bg-amber-50 tw-text-amber-700 tw-border-amber-100',
      bullet: 'tw-bg-amber-500',
      hover: 'hover:tw-border-amber-200',
    },
  };

  const tones = accentMap[accent] || accentMap.brand;

  return (
    <article
      className={[
        'tw-group tw-flex tw-h-full tw-flex-col',
        'tw-rounded-card tw-border tw-border-slate-200/80',
        'tw-bg-white/75 tw-backdrop-blur-md',
        'tw-p-5 tw-shadow-soft sm:tw-p-6',
        'tw-transition-all tw-duration-300 tw-ease-out',
        'hover:tw--translate-y-1 hover:tw-shadow-soft-lg',
        tones.hover,
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <div className="tw-mb-4 tw-flex tw-items-center tw-gap-3">
        <div
          className={[
            'tw-flex tw-h-11 tw-w-11 tw-shrink-0 tw-items-center tw-justify-center',
            'tw-rounded-2xl tw-border',
            'tw-transition-transform tw-duration-300 group-hover:tw-scale-105',
            tones.icon,
          ].join(' ')}
        >
          {Icon ? <Icon size={22} strokeWidth={2} aria-hidden="true" /> : null}
        </div>
        <h4 className="tw-m-0 tw-text-base tw-font-bold tw-leading-snug tw-text-slate-900 sm:tw-text-lg">
          {title}
        </h4>
      </div>

      <ul className="tw-m-0 tw-flex tw-list-none tw-flex-col tw-gap-2.5 tw-p-0">
        {points.map((point) => (
          <li
            key={point}
            className="tw-flex tw-items-start tw-gap-2.5 tw-text-sm tw-leading-snug tw-text-slate-600"
          >
            <span
              className={[
                'tw-mt-1.5 tw-h-1.5 tw-w-1.5 tw-shrink-0 tw-rounded-full',
                tones.bullet,
              ].join(' ')}
              aria-hidden="true"
            />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </article>
  );
};

export default EcosystemEndUserCard;
