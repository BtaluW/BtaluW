export interface LogEntry {
  date: string
  dateTime: string
  week: string
  title: string
  body: string
  tags: string[]
}

// Dates verified against the Xylodesk repo's git history, not estimated.
export const log: LogEntry[] = [
  {
    date: '18 Jul 2026',
    dateTime: '2026-07-18',
    week: 'week 29',
    title: 'Heuristic matching first, AI second',
    body: 'Shipped skills and experience overlap scoring before touching Gemini. The AI tier now layers on top and falls back to the heuristic when a call fails. A working, explainable baseline beats a clever thing that sometimes returns nothing.',
    tags: ['Matching', 'Gemini'],
  },
  {
    date: '31 May 2026',
    dateTime: '2026-05-31',
    week: 'week 22',
    title: 'Made tenant scoping fail loudly instead of quietly',
    body: 'Switched acts_as_tenant to fail-closed. An unscoped query now raises instead of returning an empty set — because an empty set looks like "no results" in the UI and like a passing test in CI.',
    tags: ['Rails', 'Multi-tenancy'],
  },
  {
    date: '31 May 2026',
    dateTime: '2026-05-31',
    week: 'week 22',
    title: 'Wrote a reviewer instead of writing more code',
    body: 'Spent the day building subagents that review my diffs rather than shipping features. Felt slow. It has since caught authorization gaps and tenant-isolation issues I personally wrote and personally approved.',
    tags: ['Tooling', 'Review'],
  },
  {
    date: '30 May 2026',
    dateTime: '2026-05-30',
    week: 'week 22',
    title: 'GDPR erasure is not a DELETE statement',
    body: 'Candidates can erase their data; employers must retain some of it. Landed on a 30-day window that anonymizes retained records in place, so foreign keys survive and the person does not. The hardest part was accepting that the naive answer was wrong.',
    tags: ['Compliance', 'Data'],
  },
  {
    date: '14 May 2026',
    dateTime: '2026-05-14',
    week: 'week 20',
    title: 'Split the two things I kept calling a "profile"',
    body: 'A candidate profile and an employee HR record looked like one model for about a week. They are not: one is public, one holds compensation. Splitting them early cost an afternoon and removed an entire category of future leak.',
    tags: ['Schema', 'Privacy'],
  },
]
