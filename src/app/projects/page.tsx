import { type Metadata } from 'next'
import Link from 'next/link'

import { Container } from '@/components/Container'

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

const seekerPoints = [
  'One account across every org — track applications and follow-ups in one place, not scattered across employer portals.',
  'A real public profile and resume builder instead of retyping the same résumé into every form.',
  'AI-assisted resume writing on your own content, opt-in and consent-gated.',
  'Fit-based job discovery with an explained breakdown of why a role matches, not just a score.',
]

const orgPoints = [
  'One ATS workflow for the whole hiring team with role-based access: admin, HR, recruiter, hiring manager.',
  'Employee directory and reporting structure, with compensation gated by role.',
  "Every organization's data strictly isolated from every other's, by design.",
  'On the roadmap: retention-risk and internal-mobility signals the data already supports.',
]

const decisions = [
  {
    title: 'Fail-closed tenancy',
    body: 'acts_as_tenant configured so an unscoped query raises rather than returning nothing — silence is the dangerous failure mode. Deliberate cross-tenant paths carry an explicit record-level authorization check.',
  },
  {
    title: 'Two models, not one',
    body: 'Public candidate profile and internal HR record split early, so compensation data can never leak into a public page through a shared field.',
  },
  {
    title: 'Compliance by design',
    body: 'GDPR erasure that also respects employer retention duties: a 30-day window anonymizes retained records in place instead of deleting rows other data still references.',
  },
  {
    title: 'AI behind one gate',
    body: 'Every AI feature runs only after data-processing consent, checked at a single chokepoint rather than repeated — and possibly missed — at each call site.',
  },
]

const agents = [
  {
    name: 'Architect',
    body: "Reviews a design or open issue before any code exists: what's missing, what conflicts with the architecture, what's underspecified.",
  },
  {
    name: 'Bug-hunter',
    body: 'Line-level review of every diff for real defects — tenant-isolation leaks, authorization gaps, data-integrity and compliance risks.',
  },
  {
    name: 'PR-reviewer',
    body: 'Merge-readiness pass: does the change do what it claims, does it break something that worked, can each user see exactly what they should.',
  },
  {
    name: 'Flow-verifier',
    body: "The dynamic check — actually runs the system against real flows like sign-in, applying, and data erasure to catch what static review can't.",
  },
]

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-3 font-mono text-xs tracking-wide text-zinc-400 dark:text-zinc-500">
      {children}
    </div>
  )
}

export const metadata: Metadata = {
  title: 'Projects',
  description: "Things I'm building, and what they cost me.",
}

export default function Projects() {
  return (
    <Container className="mt-16 sm:mt-32">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
          Things I&rsquo;m building, and what they cost me.
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          Fewer, harder projects. Each one lists the decision I had to get
          right and the one I got wrong first.
        </p>
      </header>

      <div className="mt-16 space-y-8 pb-24">
        {/* Project 01 — Xylodesk */}
        <article className="overflow-hidden rounded-2xl border border-zinc-100 bg-white dark:border-zinc-700/40 dark:bg-zinc-800/50">
          <div className="border-b border-zinc-100 p-8 dark:border-zinc-700/40">
            <Eyebrow>
              PROJECT 01 ·{' '}
              <span className="text-teal-500 dark:text-teal-400">ACTIVE</span>{' '}
              · PRIVATE REPO
            </Eyebrow>
            <h2 className="text-2xl font-bold tracking-tight text-zinc-800 sm:text-3xl dark:text-zinc-100">
              Xylodesk
            </h2>
            <p className="mt-4 max-w-3xl text-base text-zinc-600 dark:text-zinc-400">
              An all-in-one career platform. Recruiting orgs get an ATS
              shaped around their real hiring workflow with role-based
              access; job seekers get one account, a real public profile, a
              resume builder, and fit-based matching instead of applying
              into a void. Built solo, from schema to UI.
            </p>
          </div>
          <div className="grid grid-cols-1 divide-y divide-zinc-100 sm:grid-cols-2 sm:divide-x sm:divide-y-0 dark:divide-zinc-700/40">
            <div className="p-8">
              <div className="mb-4 font-mono text-xs tracking-widest text-teal-500 uppercase dark:text-teal-400">
                For job seekers
              </div>
              <ul className="space-y-2">
                {seekerPoints.map((point) => (
                  <li
                    key={point}
                    className="flex gap-2 text-sm text-zinc-600 dark:text-zinc-400"
                  >
                    <span className="text-zinc-300 dark:text-zinc-600">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-8">
              <div className="mb-4 font-mono text-xs tracking-widest text-teal-500 uppercase dark:text-teal-400">
                For hiring teams
              </div>
              <ul className="space-y-2">
                {orgPoints.map((point) => (
                  <li
                    key={point}
                    className="flex gap-2 text-sm text-zinc-600 dark:text-zinc-400"
                  >
                    <span className="text-zinc-300 dark:text-zinc-600">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="border-t border-zinc-100 bg-zinc-50 p-8 dark:border-zinc-700/40 dark:bg-zinc-900/40">
            <div className="mb-5 font-mono text-xs tracking-widest text-zinc-400 uppercase dark:text-zinc-500">
              Decisions worth defending
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {decisions.map((decision) => (
                <div key={decision.title}>
                  <div className="mb-1 font-mono text-xs font-semibold text-zinc-800 dark:text-zinc-100">
                    {decision.title}
                  </div>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    {decision.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2 border-t border-zinc-100 p-6 dark:border-zinc-700/40">
            {xyloStack.map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-zinc-200 px-2 py-1 font-mono text-xs text-zinc-600 dark:border-zinc-700 dark:text-zinc-400"
              >
                {tech}
              </span>
            ))}
            <span className="ml-auto font-mono text-xs text-zinc-400 dark:text-zinc-500">
              Repo private while in development — happy to walk through the
              code.
            </span>
          </div>
        </article>

        {/* Project 02 — review pipeline */}
        <article className="overflow-hidden rounded-2xl border border-zinc-100 bg-white dark:border-zinc-700/40 dark:bg-zinc-800/50">
          <div className="border-b border-zinc-100 p-8 dark:border-zinc-700/40">
            <Eyebrow>
              PROJECT 02 ·{' '}
              <span className="text-teal-500 dark:text-teal-400">
                IN USE DAILY
              </span>
            </Eyebrow>
            <h2 className="text-xl font-bold tracking-tight text-zinc-800 sm:text-2xl dark:text-zinc-100">
              A review pipeline that gates my own pull requests
            </h2>
            <p className="mt-4 max-w-3xl text-base text-zinc-600 dark:text-zinc-400">
              Working solo means nobody catches what you miss. So I built
              four specialized Claude Code subagents that review my work
              before it ships — AI as a second set of eyes, not a faster
              typist. Nothing non-trivial gets pushed until a hunt → fix →
              re-hunt loop comes back clean.
            </p>
          </div>
          <div className="grid grid-cols-1 divide-y divide-zinc-100 sm:grid-cols-2 sm:divide-x sm:divide-y-0 dark:divide-zinc-700/40">
            {agents.map((agent) => (
              <div key={agent.name} className="p-6">
                <div className="mb-2 font-mono text-sm font-semibold text-teal-500 dark:text-teal-400">
                  {agent.name}
                </div>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  {agent.body}
                </p>
              </div>
            ))}
          </div>
        </article>

        {/* Project 03 — this site */}
        <article className="overflow-hidden rounded-2xl border border-zinc-100 bg-white p-8 dark:border-zinc-700/40 dark:bg-zinc-800/50">
          <Eyebrow>
            PROJECT 03 ·{' '}
            <span className="text-teal-500 dark:text-teal-400">SHIPPED</span>
          </Eyebrow>
          <h2 className="text-xl font-bold tracking-tight text-zinc-800 sm:text-2xl dark:text-zinc-100">
            This site
          </h2>
          <p className="mt-4 max-w-3xl text-base text-zinc-600 dark:text-zinc-400">
            Built with Next.js and Tailwind CSS on a customized base
            template, hosted on GitHub Pages. The exercise was less the
            scaffolding and more everything on top of it: real content
            instead of placeholder copy, and a deliberate pass on type
            scale, spacing, and getting a dense layout to survive a phone
            screen.
          </p>
          <Link
            href="https://github.com/BtaluW"
            target="_blank"
            rel="noopener"
            className="mt-4 inline-block font-mono text-sm text-teal-500 transition hover:text-teal-600 dark:hover:text-teal-400"
          >
            github.com/BtaluW ↗
          </Link>
        </article>
      </div>
    </Container>
  )
}
