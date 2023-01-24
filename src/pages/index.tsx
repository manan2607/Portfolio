import Head from 'next/head'
import { Inter } from '@next/font/google'
import Header from 'components/Header'
import Hero from 'components/Hero'
import About from 'components/About'
import WorkXP from 'components/WorkXP'
import Skills from 'components/Skills'
import Projects from 'components/Projects'
import ContactMe from 'components/ContactMe'
import Footer from 'components/Footer'
import Link from 'next/dist/client/link'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll  overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[red]/80'>
      
      <Head>
      <link rel='icon' href='./img/logo.png' />
        <title>Manan's World</title>
      </Head>
      
      {/* Header */}
      <Header />

      {/* Hero */}
      <section id='hero' className='snap-start'>
        <Hero />
      </section>

      {/* About */}
      <section id='about' className='snap-center'>
        <About />
      </section>

      {/* Experience */}
      {/* <section id='workxp' className='snap-center'>
        <WorkXP />
      </section> */}

      {/* Skills */}
      <section id='skills' className='snap-start'>
        <Skills />
      </section>

      {/* Project */}
      <section id='projects' className='snap-start'>
        <Projects />
      </section>

      {/* Contact Me */}
      <section id='contact' className='snap-center'>
        <ContactMe />
      </section>

      <Link className='transition-all duration-3000' href='#hero'>
        <Footer />
      </  Link>
    </div>
  )
}
