import Hero from '../components/Hero'
import How from '../components/How'
import Packages from '../components/Packages'
import Alacarte from '../components/Alacarte'
// import TandP from '../components/TandP'
import Blog from '../components/Blog'

export default function Home() {
  return (
    <>
      <Hero />
      <Packages />
      <How />
      <Alacarte />
      {/* <TandP /> */}
      <Blog />
    </>
  );
}
