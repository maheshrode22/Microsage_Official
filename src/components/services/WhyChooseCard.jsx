import React from 'react';
import FadeUp from '../about/FadeUp';

const WhyChooseCard = ({ item, delay = 0 }) => {
  const { Icon, title } = item;

  return (
    <FadeUp delay={delay} className="tw-h-full">
      <article
        className={[
          'tw-group tw-relative tw-flex tw-h-full tw-items-start tw-gap-4',
          'tw-overflow-hidden tw-rounded-card tw-border tw-border-slate-200/80',
          'tw-bg-white tw-p-5 tw-shadow-soft sm:tw-p-6',
          'tw-transition-all tw-duration-300 tw-ease-out',
          'hover:tw--translate-y-1 hover:tw-border-brand-200 hover:tw-shadow-soft-lg',
        ].join(' ')}
      >
        <div
          className={[
            'tw-inline-flex tw-h-11 tw-w-11 tw-shrink-0 tw-items-center tw-justify-center',
            'tw-rounded-xl tw-border tw-border-brand-100 tw-bg-gradient-to-br',
            'tw-from-brand-50 tw-to-brand-100/60 tw-text-brand-600',
            'tw-transition-all tw-duration-300',
            'group-hover:tw-from-brand-600 group-hover:tw-to-brand-500 group-hover:tw-text-white group-hover:tw-border-brand-600',
          ].join(' ')}
        >
          <Icon size={20} strokeWidth={2} aria-hidden="true" />
        </div>
        <h3 className="tw-pt-2 tw-text-sm tw-font-bold tw-leading-snug tw-text-slate-900 sm:tw-text-base">
          {title}
        </h3>
      </article>
    </FadeUp>
  );
};

export default WhyChooseCard;
