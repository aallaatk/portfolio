
import Contact from './Contact'
import Blog from './Blog'
import AboutMe from './AboutMe'
import Services from './Services'
import Skills from './Technologies'

function Home() {
  return (
    <>
    <AboutMe birthday={''} phone={''} email={''} nationality={''} languages={''} freelance={''}/>
    <Services/>
    <Skills/>
    <Blog/>
    <Contact/>

    </>
  )
}

export default Home