import { type Metadata } from 'next'

import { Container } from '@/components/Container'
import { log } from '@/lib/log'

const nowFocus = [
  {
    label: 'Building',
    value: 'Xylodesk — Resume Studio, the résumé builder with templates and live editing.',
  },
  {
    label: 'Learning',
    value: 'GraphQL schema design, and testing enough to trust a refactor.',
  },
  {
    label: 'Next up',
    value: 'Shipping this site to GitHub Pages, then a proper accessibility pass.',
  },
]

export const metadata: Metadata = {
  title: 'Now',
  description: 'A dated log of what I built, what broke, and what I finally understood.',
}

export default function Now() {
  return (
    <Container className="mt-16 sm:mt-32">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
          Now
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          A dated log of what I built, what broke, and what I finally
          understood. Written per milestone, unedited afterwards — the
          wrong turns are the useful part.
        </p>
      </header>

      <div className="mt-12 grid grid-cols-1 gap-8 rounded-2xl border border-zinc-100 bg-white p-6 sm:grid-cols-3 dark:border-zinc-700/40 dark:bg-zinc-800/50">
        {nowFocus.map((item) => (
          <div key={item.label}>
            <div className="font-mono text-xs tracking-widest text-zinc-400 uppercase dark:text-zinc-500">
              {item.label}
            </div>
            <p className="mt-2 text-sm text-zinc-800 dark:text-zinc-100">
              {item.value}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-16 divide-y divide-zinc-100 border-t border-zinc-100 pb-24 dark:divide-zinc-700/40 dark:border-zinc-700/40">
        {log.map((entry) => (
          <article
            key={entry.dateTime + entry.title}
            className="grid grid-cols-1 gap-3 py-8 sm:grid-cols-[150px_1fr] sm:gap-6"
          >
            <div className="font-mono text-xs text-zinc-400 dark:text-zinc-500">
              <time dateTime={entry.dateTime}>{entry.date}</time>
              <br />
              <span className="text-zinc-300 dark:text-zinc-600">
                {entry.week}
              </span>
            </div>
            <div>
              <h2 className="text-lg font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                {entry.title}
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-zinc-600 dark:text-zinc-400">
                {entry.body}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {entry.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-zinc-200 px-2 py-0.5 font-mono text-[10px] tracking-wide text-zinc-500 uppercase dark:border-zinc-700 dark:text-zinc-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </Container>
  )
}
