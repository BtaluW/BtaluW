import { type Metadata } from 'next'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { GitHubIcon, LinkedInIcon } from '@/components/SocialIcons'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

const receipts = [
  { stat: '95%', text: 'SLA resolution rate across Tier 2–3 support at Shopify' },
  { stat: '−30%', text: 'business downtime during incidents I ran comms for' },
  {
    stat: '50+',
    text: 'knowledge-base articles and SOPs written, cutting repeat tickets 15%',
  },
  {
    stat: '−25%',
    text: 'engineering escalations, by finishing the diagnosis before handing it over',
  },
]

interface TimelineJob {
  dates: string
  place: string
  role: string
  org: string
  bullets: string[]
}

const timeline: TimelineJob[] = [
  {
    dates: 'Oct 2020 – Jul 2025',
    place: 'Montreal, QC',
    role: 'Technician, Technical Services',
    org: 'Shopify',
    bullets: [
      'Ran Tier 2–3 support through Zendesk and Freshservice at a 95% SLA resolution rate, cutting average turnaround 20%.',
      'Primary point of contact for high-priority incidents — deployed workarounds that cut downtime 30% during disruptions.',
      'Isolated root causes in Chrome DevTools and Splunk, reducing engineering escalations by 25%.',
      'SME for Twilio call-centre operations across 20+ projects supporting platforms doing $100M+ GMV.',
      'Streamlined joiner/leaver SOPs on Okta RBAC and Google Workspace with zero day-one access delays.',
    ],
  },
  {
    dates: 'May 2018 – Sep 2019',
    place: 'Toronto, ON',
    role: 'Business & Integration Architecture Analyst',
    org: 'Accenture',
    bullets: [
      'Provisioned and deployed 200+ Android transit endpoints via MDM at a 99% patch success rate.',
      'Held 99.5% operational uptime troubleshooting network, software, and hardware issues on live transit hardware.',
      'Defined requirements and user stories for a Salesforce support portal used by 10,000+ people globally.',
      'Cut deployment downtime 15% across 20+ server instances with cutover tracking and end-user SOPs.',
    ],
  },
  {
    dates: '2017',
    place: 'Toronto, ON',
    role: 'Test Technician',
    org: 'Tyco Security Products',
    bullets: [
      'Assembled, imaged, and verified Windows and Linux server towers to 100% accuracy against client build sheets.',
      'Ran root-cause failure analysis and validated OS patches on CCTV platforms needing 24/7 availability.',
    ],
  },
]

const education = [
  { year: '2018', what: 'IT Service Analyst Certification', where: 'NPower Canada, Mississauga' },
  { year: '2013', what: 'Diploma in Computer Engineering', where: 'Centennial College, Toronto' },
  { year: '2010', what: 'BSc Internet Computing', where: 'University of Liverpool, UK' },
]

export const metadata: Metadata = {
  title: 'About',
  description: 'The five years are the point, not the detour.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-y-12">
        <div className="lg:order-first lg:row-span-2">
          <h1 className="max-w-xl text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            The five years are the point, not the detour.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              I was the person engineers escalated to. Five years at Shopify
              in technical services: Tier 2–3 incidents, identity and
              access, outage comms in the war-room Slack channel,
              log-diving in DevTools and Splunk until the actual cause fell
              out. Before that, Accenture — deploying and troubleshooting
              endpoints and enterprise platforms for clients who noticed
              instantly when something broke.
            </p>
            <p>
              That work taught me the thing bootcamps can&rsquo;t: what
              software looks like from the receiving end. I&rsquo;ve read
              the ticket that says &ldquo;it just stopped working.&rdquo;
              I&rsquo;ve written the SOP that stopped fifty of them. When I
              build a UI now, I&rsquo;m thinking about the person who will
              file the bug.
            </p>
            <p>
              So I&rsquo;m building the other side. React, Next.js, and
              TypeScript on the front, Rails and GraphQL behind it —
              learned by shipping one genuinely hard product rather than
              collecting certificates. I&rsquo;m early, and I&rsquo;m loud
              about being early. That&rsquo;s what this site is for.
            </p>
          </div>
        </div>

        <div className="lg:pl-4">
          <div className="rounded-2xl border border-zinc-100 bg-white p-6 dark:border-zinc-700/40 dark:bg-zinc-800/50">
            <div className="font-mono text-xs tracking-widest text-zinc-400 uppercase dark:text-zinc-500">
              Receipts
            </div>
            <dl className="mt-4 divide-y divide-zinc-100 dark:divide-zinc-700/40">
              {receipts.map((receipt) => (
                <div key={receipt.text} className="flex gap-4 py-3 first:pt-0">
                  <dt className="w-16 flex-none font-mono text-lg font-semibold text-teal-500 dark:text-teal-400">
                    {receipt.stat}
                  </dt>
                  <dd className="text-sm text-zinc-600 dark:text-zinc-400">
                    {receipt.text}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <ul role="list" className="mt-10">
            <SocialLink href="https://github.com/BtaluW" icon={GitHubIcon}>
              Follow on GitHub
            </SocialLink>
            <SocialLink
              href="https://www.linkedin.com/in/brian-talugende-bt/"
              icon={LinkedInIcon}
              className="mt-4"
            >
              Follow on LinkedIn
            </SocialLink>
          </ul>
        </div>
      </div>

      <h2 className="mt-24 font-mono text-xs font-semibold tracking-widest text-zinc-500 uppercase dark:text-zinc-400">
        Timeline
      </h2>
      <div className="mt-2 divide-y divide-zinc-100 border-t border-zinc-100 dark:divide-zinc-700/40 dark:border-zinc-700/40">
        {timeline.map((job) => (
          <article
            key={job.role + job.org}
            className="grid grid-cols-1 gap-3 py-8 sm:grid-cols-[190px_1fr] sm:gap-6"
          >
            <div className="font-mono text-xs text-zinc-400 dark:text-zinc-500">
              <div>{job.dates}</div>
              <div>{job.place}</div>
            </div>
            <div>
              <h3 className="text-lg font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                {job.role}
              </h3>
              <div className="mb-3 text-sm font-medium text-teal-500 dark:text-teal-400">
                {job.org}
              </div>
              <ul className="space-y-2">
                {job.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex gap-3 text-sm text-zinc-600 dark:text-zinc-400"
                  >
                    <span className="text-zinc-300 dark:text-zinc-600">—</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>

      <h2 className="mt-16 font-mono text-xs font-semibold tracking-widest text-zinc-500 uppercase dark:text-zinc-400">
        Education
      </h2>
      <div className="mt-2 divide-y divide-zinc-100 border-t border-zinc-100 dark:divide-zinc-700/40 dark:border-zinc-700/40">
        {education.map((entry) => (
          <div
            key={entry.what}
            className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-[190px_1fr] sm:gap-6"
          >
            <div className="font-mono text-xs text-zinc-400 dark:text-zinc-500">
              {entry.year}
            </div>
            <div className="text-sm text-zinc-800 dark:text-zinc-100">
              {entry.what}{' '}
              <span className="text-zinc-400 dark:text-zinc-500">
                · {entry.where}
              </span>
            </div>
          </div>
        ))}
      </div>
    </Container>
  )
}
