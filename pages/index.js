import Hero from '../components/Hero'
import Rope from '../components/Rope'
import Packages from '../components/Packages'
import ClientList from '../components/ClientList'
import How from '../components/How'
import Alacarte from '../components/Alacarte'
import Testimonials from '../components/Testimonials.js'

export default function Home() {
  return (
    <>
      <Hero />
      <Rope />
      <Packages />
      <ClientList />
      <Testimonials />
      <How />
      <Alacarte />
    </>
  );
}
