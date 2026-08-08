import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { ServicesSection } from '@/components/services-section'
import { ProjectsSection } from '@/components/projects-section'
import { ProcessSection } from '@/components/process-section'
import { AboutSection } from '@/components/about-section'
import { ContactSection } from '@/components/contact-section'
import { TeamSection } from '@/components/team-section'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main className="snap-container">
        <div className="snap-section-flush">
          <Hero />
        </div>
        <div className="snap-section">
          <ServicesSection />
        </div>
        <div className="snap-section">
          <ProjectsSection />
        </div>
        <div className="snap-section">
          <ProcessSection />
        </div>
        <div className="snap-section">
          <AboutSection />
        </div>
        <div className="snap-section">
          <TeamSection />
        </div>
        <div className="snap-section-contact">
          <ContactSection />
          <SiteFooter />
        </div>
      </main>
    </>
  )
}
