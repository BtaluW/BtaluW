import { type Metadata } from 'next'
import Link from 'next/link'

import { Container } from '@/components/Container'
import { GitHubIcon, LinkedInIcon } from '@/components/SocialIcons'
import { asset } from '@/lib/basePath'

function DownloadIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M12 3.75v10.5m0 0 4-4m-4 4-4-4M4.75 16.75v2a2 2 0 0 0 2 2h10.5a2 2 0 0 0 2-2v-2"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const contacts = [
  {
    label: 'GitHub',
    value: 'github.com/BtaluW',
    href: 'https://github.com/BtaluW',
    target: '_blank',
    icon: GitHubIcon,
  },
  {
    label: 'LinkedIn',
    value: '/in/brian-talugende-bt',
    href: 'https://www.linkedin.com/in/brian-talugende-bt/',
    target: '_blank',
    icon: LinkedInIcon,
  },
  {
    label: 'Resume',
    value: 'Download PDF ↓',
    href: asset('brian-talugende-resume.pdf'),
    target: '_self',
    icon: DownloadIcon,
  },
]

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Say hello.',
}

export default function Contact() {
  return (
    <Container className="mt-16 sm:mt-32">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
          Say hello.
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          I&rsquo;m looking for a junior frontend role on a team that
          reviews code properly. Happy to walk through Xylodesk&rsquo;s
          codebase live — it&rsquo;s the fastest way to see how I think.
        </p>
      </header>

      <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-zinc-100 bg-zinc-100 sm:grid-cols-3 dark:border-zinc-700/40 dark:bg-zinc-700/40">
        {contacts.map((contact) => (
          <Link
            key={contact.label}
            href={contact.href}
            target={contact.target}
            rel={contact.target === '_blank' ? 'noopener' : undefined}
            className="group bg-white p-6 transition hover:bg-zinc-50 dark:bg-zinc-900 dark:hover:bg-zinc-800"
          >
            <contact.icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-teal-500 dark:fill-zinc-400" />
            <div className="mt-4 font-mono text-xs tracking-widest text-zinc-400 uppercase dark:text-zinc-500">
              {contact.label}
            </div>
            <div className="mt-1 font-mono text-sm text-teal-500 dark:text-teal-400">
              {contact.value}
            </div>
          </Link>
        ))}
      </div>
    </Container>
  )
}
