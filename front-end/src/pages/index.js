
import { Bebas_Neue } from 'next/font/google'
import Landing from '@/components/Landing'

const bebas = Bebas_Neue({ subsets: ['latin'], weight: '400' })

export default function Home() {
  return (
  <div className={bebas}>
    <Landing />
  </div>
  )
}
