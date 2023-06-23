export const metadata = {
    title: 'Mopar Insanity',
    description: 'Car enthusiastic website',
  }
  
  import Hero from '@/components/hero'
  import Features from '@/components/features'
  import Zigzag from '@/components/zigzag'
  import Members from '@/components/members'
  
  export default function Home() {
    return (
      <>
        <Hero />
        <Members />
      </>
    )
  }
  