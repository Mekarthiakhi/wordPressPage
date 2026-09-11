import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import MissionVision from './components/MissionVision'
import Curriculum from './components/Curriculum'
import ContactCTA from './components/ContactCTA'
import Discover from './components/Discover'
import Testimonials from './components/Testimonials'
import EnquiryForm from './components/EnquiryForm'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-[#82C9C7] selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <MissionVision />
        <Curriculum />
        <ContactCTA />
        <Discover />
        <Testimonials />
        <EnquiryForm />
      </main>
      <Footer />
    </div>
  )
}
