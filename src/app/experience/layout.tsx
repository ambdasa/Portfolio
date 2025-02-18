import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Experience | Developer Portfolio',
  description: 'My professional journey and work experience',
}

export default function ExperienceLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
} 