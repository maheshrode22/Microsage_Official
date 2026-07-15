import React from 'react';
import { ArrowDown } from 'lucide-react';

/**
 * Animated vertical connector between ecosystem flow nodes.
 * Desktop: centered dashed line + bouncing arrow.
 * Mobile: left-aligned timeline spine segment.
 */
const EcosystemConnector = ({ className = '' }) => (
  <div
    className={[
      'tw-relative tw-flex tw-flex-col tw-items-center tw-justify-center',
      'tw-py-1 md:tw-py-2',
      'tw-pl-8 md:tw-pl-0',
      className,
    ]
      .filter(Boolean)
      .join(' ')}
    aria-hidden="true"
  >
    {/* Mobile timeline spine */}
    <span
      className={[
        'tw-absolute tw-left-[1.35rem] tw-top-0 tw-bottom-0 tw-w-0.5',
        'tw-bg-gradient-to-b tw-from-brand-300 tw-via-brand-500 tw-to-brand-300',
        'md:tw-hidden',
        'tw-origin-top',
      ].join(' ')}
    />

    {/* Desktop dashed line */}
    <svg
      className="tw-hidden md:tw-block tw-w-1 tw-h-10 tw-overflow-visible"
      viewBox="0 0 4 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="2"
        y1="0"
        x2="2"
        y2="40"
        stroke="#60a5fa"
        strokeWidth="2"
        strokeDasharray="4 4"
        className="tw-animate-flow-dash"
      />
    </svg>

    <div
      className={[
        'tw-relative tw-z-[1] tw-flex tw-h-8 tw-w-8 tw-items-center tw-justify-center',
        'tw-rounded-full tw-border tw-border-brand-200 tw-bg-white',
        'tw-shadow-soft tw-text-brand-600',
        'tw-animate-arrow-bounce',
      ].join(' ')}
    >
      <ArrowDown size={16} strokeWidth={2.5} />
    </div>
  </div>
);

export default EcosystemConnector;
