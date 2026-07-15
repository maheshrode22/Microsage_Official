import React from 'react';
import useInView from '../../hooks/useInView';

/**
 * Fade-up entrance wrapper for scroll animations.
 */
const FadeUp = ({ children, className = '', delay = 0, as: Tag = 'div' }) => {
  const { ref, isInView } = useInView();

  return (
    <Tag
      ref={ref}
      className={[
        'tw-opacity-0',
        isInView ? 'tw-animate-fade-up' : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      style={{ animationDelay: isInView ? `${delay}ms` : undefined }}
    >
      {children}
    </Tag>
  );
};

export default FadeUp;
