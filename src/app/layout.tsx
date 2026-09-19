import { type Metadata } from 'next'

import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: '%s - Brian Talugende',
    default: 'Brian Talugende - Software developer in training',
  },
  description:
    'Software developer in training, documenting what I build as I learn — including Xylodesk, a multi-tenant career platform for recruiters and job seekers.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark h-full antialiased">
      <body className="flex h-full bg-black">
        <div className="flex w-full">
          <Layout>{children}</Layout>
        </div>
      </body>
    </html>
  )
}
