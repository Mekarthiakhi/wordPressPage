import Cursor from './components/ui/Cursor'
import ScrollProgress from './components/ui/ScrollProgress'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Stats from './components/Stats'
import EducationHighlight from './components/EducationHighlight'
import Community from './components/Community'
import SkillsPlayground from './components/SkillsPlayground'
import PhotoMarquee from './components/PhotoMarquee'
import MissionVision from './components/MissionVision'
import AcademicCards from './components/AcademicCards'
import FAQ from './components/FAQ'
import Discover from './components/Discover'
import Testimonials from './components/Testimonials'
import EnquiryForm from './components/EnquiryForm'
import ContactCTA from './components/ContactCTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Cursor />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Stats />
        <EducationHighlight />
        <AcademicCards />
        <Community />
        <SkillsPlayground />
        <PhotoMarquee />
        <MissionVision />
        <Discover />
        <Testimonials />
        <FAQ />
        <ContactCTA />
        <EnquiryForm />
      </main>
      <Footer />
    </>
  )
}
