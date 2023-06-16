export const metadata = {
  title: 'Home - Open PRO',
  description: 'Page description',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import Zigzag from '@/components/zigzag'
import Members from '@/components/members'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Zigzag />
      <Members />
    </>
  )
}
