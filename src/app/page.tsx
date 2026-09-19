import Link from 'next/link'

import { Container } from '@/components/Container'
import { GitHubIcon, LinkedInIcon } from '@/components/SocialIcons'
import { log } from '@/lib/log'

function SocialLink({
  icon: Icon,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link> & {
  icon: React.ComponentType<{ className?: string }>
}) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

function Eyebrow({
  index,
  children,
}: {
  index: string
  children: React.ReactNode
}) {
  return (
    <h2 className="font-mono text-xs font-semibold tracking-widest text-zinc-500 uppercase dark:text-zinc-400">
      {index} — {children}
    </h2>
  )
}

function SectionLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      className="font-mono text-xs text-teal-500 transition hover:text-teal-600 dark:hover:text-teal-400"
    >
      {children}
    </Link>
  )
}

const facts = [
  {
    label: 'Currently',
    value:
      'Building Xylodesk solo — Rails 8 + GraphQL API, React/Next.js/TypeScript front end.',
  },
  {
    label: 'Background',
    value:
      '5+ years Tier 2–3 technical support at Shopify and Accenture. 95% SLA resolution rate.',
  },
  {
    label: 'Looking for',
    value:
      'A junior frontend role on a team that reviews code properly. Montreal or remote.',
  },
]

function Facts() {
  return (
    <div className="grid grid-cols-1 divide-y divide-zinc-100 border-y border-zinc-100 sm:grid-cols-3 sm:divide-x sm:divide-y-0 dark:divide-zinc-700/40 dark:border-zinc-700/40">
      {facts.map((fact) => (
        <div key={fact.label} className="py-6 sm:px-6 sm:first:pl-0">
          <div className="font-mono text-xs tracking-widest text-zinc-400 uppercase dark:text-zinc-500">
            {fact.label}
          </div>
          <p className="mt-2 text-sm font-medium text-zinc-800 dark:text-zinc-100">
            {fact.value}
          </p>
        </div>
      ))}
    </div>
  )
}

const xyloHighlights = [
  {
    label: 'The problem',
    value:
      'Recruiters live in spreadsheets; candidates apply into a black hole. Same data, two broken experiences.',
  },
  {
    label: 'The hard part',
    value:
      'Strict tenant isolation, fail-closed: a query with no tenant set raises rather than quietly leaking rows.',
  },
  {
    label: 'Scope',
    value:
      'ATS workflow, role-based access, public candidate profiles, resume tooling, fit-based matching.',
  },
]

const xyloStack = [
  'Rails 8 (API-only)',
  'GraphQL',
  'MySQL',
  'React',
  'Next.js',
  'TypeScript',
  'SolidQueue',
  'Gemini',
]

function FeaturedBuild() {
  return (
    <div className="rounded-2xl border border-zinc-100 bg-white dark:border-zinc-700/40 dark:bg-zinc-800/50">
      <div className="border-b border-zinc-100 p-6 dark:border-zinc-700/40">
        <div className="flex items-center gap-2 font-mono text-xs tracking-wide text-zinc-500 dark:text-zinc-400">
          <span className="text-teal-500">●</span>
          IN ACTIVE DEVELOPMENT · SOLO BUILD · SCHEMA TO UI
        </div>
        <h3 className="mt-4 max-w-lg text-2xl font-bold tracking-tight text-zinc-800 sm:text-3xl dark:text-zinc-100">
          Xylodesk — a career platform serving both sides of hiring
        </h3>
        <p className="mt-4 max-w-3xl text-base text-zinc-600 dark:text-zinc-400">
          Recruiters stitch together spreadsheets, job boards and a clunky
          ATS. Candidates apply into a black hole. Xylodesk puts both in one
          place: an applicant tracking workflow built around how a hiring
          team actually works, and a real candidate profile with resume
          tools and fit-based matching instead of a one-way form.
        </p>
      </div>
      <div className="grid grid-cols-1 divide-y divide-zinc-100 sm:grid-cols-3 sm:divide-x sm:divide-y-0 dark:divide-zinc-700/40">
        {xyloHighlights.map((highlight) => (
          <div key={highlight.label} className="p-6">
            <div className="font-mono text-xs tracking-widest text-teal-500 uppercase dark:text-teal-400">
              {highlight.label}
            </div>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              {highlight.value}
            </p>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap gap-2 rounded-b-2xl border-t border-zinc-100 bg-zinc-50 p-6 dark:border-zinc-700/40 dark:bg-zinc-900/40">
        {xyloStack.map((tech) => (
          <span
            key={tech}
            className="rounded-md border border-zinc-200 bg-white px-2 py-1 font-mono text-xs text-zinc-600 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-400"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  )
}

function LatestFromLog() {
  let recent = log.slice(0, 3)

  return (
    <div className="divide-y divide-zinc-100 border-t border-zinc-100 dark:divide-zinc-700/40 dark:border-zinc-700/40">
      {recent.map((entry) => (
        <article
          key={entry.dateTime + entry.title}
          className="grid grid-cols-1 gap-2 py-6 sm:grid-cols-[150px_1fr] sm:gap-6"
        >
          <div className="font-mono text-xs text-zinc-400 dark:text-zinc-500">
            <time dateTime={entry.dateTime}>{entry.date}</time>
            <br />
            {entry.week}
          </div>
          <div>
            <h3 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
              {entry.title}
            </h3>
            <p className="mt-2 max-w-2xl text-sm text-zinc-600 dark:text-zinc-400">
              {entry.body}
            </p>
          </div>
        </article>
      ))}
    </div>
  )
}

const stackGroups = [
  {
    label: 'Building with',
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'HTML / CSS', 'Git & GitHub'],
  },
  {
    label: 'Learning now',
    items: [
      'Rails 8 (API-only)',
      'GraphQL schema design',
      'Testing & flow verification',
      'Accessibility',
    ],
  },
  {
    label: 'Carried over',
    items: ['Chrome DevTools', 'Splunk & Grafana', 'Bash / PowerShell', 'SQL', 'Incident response'],
  },
]

function WhatIWorkIn() {
  return (
    <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-zinc-100 bg-zinc-100 sm:grid-cols-3 dark:border-zinc-700/40 dark:bg-zinc-700/40">
      {stackGroups.map((group) => (
        <div key={group.label} className="bg-white p-6 dark:bg-zinc-900">
          <div className="font-mono text-xs tracking-widest text-zinc-400 uppercase dark:text-zinc-500">
            {group.label}
          </div>
          <ul className="mt-4 space-y-2">
            {group.items.map((item) => (
              <li
                key={item}
                className="flex gap-2 font-mono text-sm text-zinc-800 dark:text-zinc-100"
              >
                <span className="text-teal-500">›</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default function Home() {
  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-teal-200 bg-teal-50 px-3 py-1 font-mono text-xs font-medium tracking-wide text-teal-700 uppercase dark:border-teal-400/20 dark:bg-teal-400/10 dark:text-teal-400">
            <span className="h-1.5 w-1.5 rounded-full bg-teal-500 dark:bg-teal-400" />
            Open to frontend roles
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            I spent five years fixing what engineers shipped. Now
            I&rsquo;m shipping it.
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            Brian Talugende — frontend developer in training, ex-Shopify
            technical services. I&rsquo;m learning in public by building one
            real, full-stack product instead of forty tutorials. Everything
            here is a work log, not a highlight reel.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-between gap-6">
            <div className="flex gap-6">
              <SocialLink
                href="https://github.com/BtaluW"
                aria-label="Follow on GitHub"
                icon={GitHubIcon}
              />
              <SocialLink
                href="https://www.linkedin.com/in/brian-talugende-bt/"
                aria-label="Follow on LinkedIn"
                icon={LinkedInIcon}
              />
            </div>
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 rounded-full bg-zinc-800 px-4 py-2 font-mono text-sm font-medium text-white transition hover:bg-teal-500 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-teal-400"
            >
              See what I&rsquo;ve built
              <span aria-hidden="true" className="transition group-hover:translate-x-0.5">
                →
              </span>
            </Link>
          </div>
        </div>
      </Container>

      <Container className="mt-16">
        <Facts />
      </Container>

      <Container className="mt-16">
        <div className="mb-6 flex items-baseline justify-between gap-4">
          <Eyebrow index="01">Featured build</Eyebrow>
          <SectionLink href="/projects">all projects →</SectionLink>
        </div>
        <FeaturedBuild />
      </Container>

      <Container className="mt-16">
        <div className="mb-2 flex items-baseline justify-between gap-4">
          <Eyebrow index="02">Latest from the log</Eyebrow>
          <SectionLink href="/now">full log →</SectionLink>
        </div>
        <LatestFromLog />
      </Container>

      <Container className="mt-16 mb-24">
        <div className="mb-6">
          <Eyebrow index="03">What I work in</Eyebrow>
        </div>
        <WhatIWorkIn />
      </Container>
    </>
  )
}
