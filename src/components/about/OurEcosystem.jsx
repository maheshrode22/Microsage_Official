import React from 'react';
import {
  Building2,
  Brain,
  GraduationCap,
  Target,
  Users,
  School,
  Briefcase,
  Globe2,
} from 'lucide-react';
import FadeUp from './FadeUp';
import EcosystemFlowCard from './EcosystemFlowCard';
import EcosystemConnector from './EcosystemConnector';
import EcosystemEndUserCard from './EcosystemEndUserCard';

const FLOW_NODES = [
  {
    id: 'microsage',
    icon: Building2,
    title: 'Microsage Private Limited',
    subtitle: null,
    description:
      'The parent technology company responsible for building AI-powered digital platforms.',
    accent: 'brand',
    featured: true,
  },
  {
    id: 'gatetutor',
    icon: GraduationCap,
    title: 'GATEtutor',
    subtitle: 'Digital Learning & Assessment Platform',
    description:
      'An AI-powered platform that enables learning, practice, assessments, coding tests, institution management, and employability preparation.',
    accent: 'sky',
  },
  {
    id: 'pragyaai',
    icon: Brain,
    title: 'PragyaAI',
    subtitle: 'AI Intelligence Layer',
    description:
      'The proprietary AI engine that powers intelligent recommendations, analytics, personalization, and decision-making across the ecosystem.',
    accent: 'indigo',
  },
  {
    id: 'apex',
    icon: Target,
    title: 'APEX',
    subtitle: 'AI Productivity & Excellence Platform',
    description:
      "Microsage's flagship AI benchmarking framework that evaluates real-world AI productivity, professional competencies, and employability readiness — powered by PragyaAI and integrated with GATEtutor.",
    accent: 'emerald',
  },
];

const END_USERS = [
  {
    id: 'students',
    icon: Users,
    title: 'Students',
    accent: 'brand',
    points: ['Learn', 'Practice', 'Build Skills', 'Become Career Ready'],
  },
  {
    id: 'institutions',
    icon: School,
    title: 'Educational Institutions',
    accent: 'violet',
    points: ['Digital Learning', 'Analytics', 'Performance Tracking', 'Accreditation Support'],
  },
  {
    id: 'employers',
    icon: Briefcase,
    title: 'Corporate Employers',
    accent: 'teal',
    points: ['Discover Talent', 'Skill Benchmarking', 'Hiring Intelligence', 'Workforce Readiness'],
  },
  {
    id: 'society',
    icon: Globe2,
    title: 'Society & Nation',
    accent: 'amber',
    points: [
      'Stronger Workforce',
      'Better Employability',
      'AI-Driven Education',
      'Digital Transformation',
    ],
  },
];

/**
 * Our Ecosystem — connected product & AI architecture section for About.
 */
const OurEcosystem = () => (
  <section
    id="our-ecosystem"
    className={[
      'tw-relative tw-mt-5 tw-mb-4 tw-overflow-hidden',
      'tw-rounded-[24px]',
      'tw-border tw-border-brand-100/70',
      'tw-bg-gradient-to-b tw-from-brand-50/80 tw-via-white tw-to-slate-50',
      'tw-px-4 tw-py-10 sm:tw-px-6 sm:tw-py-12 md:tw-px-8 md:tw-py-14 lg:tw-px-10',
    ].join(' ')}
    aria-labelledby="ecosystem-heading"
  >
    {/* Atmospheric backdrop — soft gradients, no imagery */}
    <div
      className="tw-pointer-events-none tw-absolute tw-inset-0 tw-opacity-60"
      aria-hidden="true"
    >
      <div className="tw-absolute tw--left-20 tw-top-10 tw-h-64 tw-w-64 tw-rounded-full tw-bg-brand-200/40 tw-blur-3xl" />
      <div className="tw-absolute tw--right-16 tw-bottom-20 tw-h-72 tw-w-72 tw-rounded-full tw-bg-sky-200/35 tw-blur-3xl" />
    </div>

    <div className="tw-relative tw-mx-auto tw-max-w-4xl">
      <FadeUp className="tw-mb-8 tw-text-center sm:tw-mb-10 md:tw-mb-12">
        <h2
          id="ecosystem-heading"
          className="tw-m-0 tw-text-2xl tw-font-extrabold tw-tracking-tight tw-text-slate-900 sm:tw-text-3xl md:tw-text-4xl"
        >
          Our Ecosystem
        </h2>
        <p className="tw-mx-auto tw-mt-3 tw-mb-0 tw-max-w-2xl tw-text-sm tw-leading-relaxed tw-text-slate-600 sm:tw-mt-4 sm:tw-text-base">
          Building an intelligent ecosystem that connects learning, artificial intelligence,
          employability, and industry.
        </p>
      </FadeUp>

      {/* Connected vertical flow — timeline on mobile, centered stack on desktop */}
      <div className="tw-relative tw-mx-auto tw-max-w-2xl">
        {/* Mobile continuous timeline rail */}
        <div
          className={[
            'tw-absolute tw-bottom-8 tw-left-[1.35rem] tw-top-8 tw-w-0.5',
            'tw-bg-gradient-to-b tw-from-brand-200 tw-via-brand-400 tw-to-brand-200',
            'md:tw-hidden',
          ].join(' ')}
          aria-hidden="true"
        />

        <ol className="tw-m-0 tw-list-none tw-p-0">
          {FLOW_NODES.map((node, index) => (
            <li key={node.id} className="tw-relative">
              <FadeUp delay={index * 90} className="tw-pl-8 md:tw-pl-0">
                {/* Mobile timeline node dot */}
                <span
                  className={[
                    'tw-absolute tw-left-[1.1rem] tw-top-7 tw-z-[1]',
                    'tw-h-2.5 tw-w-2.5 tw-rounded-full',
                    'tw-border-2 tw-border-white tw-bg-brand-500 tw-shadow-sm',
                    'md:tw-hidden',
                  ].join(' ')}
                  aria-hidden="true"
                />
                <EcosystemFlowCard
                  icon={node.icon}
                  title={node.title}
                  subtitle={node.subtitle}
                  description={node.description}
                  accent={node.accent}
                  featured={node.featured}
                />
              </FadeUp>

              <EcosystemConnector />
            </li>
          ))}
        </ol>

        {/* End Users label */}
        <FadeUp delay={360} className="tw-mb-5 tw-pl-8 tw-text-center md:tw-mb-6 md:tw-pl-0">
          <p className="tw-m-0 tw-text-xs tw-font-bold tw-uppercase tw-tracking-[0.12em] tw-text-brand-600 sm:tw-text-sm">
            End Users
          </p>
        </FadeUp>

        <div className="tw-grid tw-grid-cols-1 tw-gap-4 tw-pl-8 sm:tw-grid-cols-2 sm:tw-pl-0 lg:tw-gap-5">
          {END_USERS.map((user, index) => (
            <FadeUp key={user.id} delay={420 + index * 80} className="tw-h-full">
              <EcosystemEndUserCard
                icon={user.icon}
                title={user.title}
                points={user.points}
                accent={user.accent}
              />
            </FadeUp>
          ))}
        </div>
      </div>

      {/* Closing statement */}
      <FadeUp delay={200} className="tw-mt-10 sm:tw-mt-12">
        <div
          className={[
            'tw-relative tw-overflow-hidden tw-rounded-card',
            'tw-border tw-border-brand-200/80',
            'tw-bg-gradient-to-br tw-from-brand-600 tw-via-brand-700 tw-to-brand-800',
            'tw-px-6 tw-py-7 tw-text-center tw-shadow-soft-lg',
            'sm:tw-px-8 sm:tw-py-8',
          ].join(' ')}
        >
          <div
            className="tw-pointer-events-none tw-absolute tw-inset-0 tw-opacity-30"
            aria-hidden="true"
          >
            <div className="tw-absolute tw--right-10 tw--top-10 tw-h-40 tw-w-40 tw-rounded-full tw-bg-white/20 tw-blur-2xl" />
            <div className="tw-absolute tw--bottom-8 tw--left-8 tw-h-32 tw-w-32 tw-rounded-full tw-bg-sky-300/30 tw-blur-2xl" />
          </div>
          <p className="tw-relative tw-m-0 tw-text-base tw-font-semibold tw-leading-relaxed tw-tracking-tight tw-text-white sm:tw-text-lg md:tw-text-xl">
            One Company. One AI Intelligence Layer. One Digital Ecosystem. Infinite Opportunities.
          </p>
        </div>
      </FadeUp>
    </div>
  </section>
);

export default OurEcosystem;
