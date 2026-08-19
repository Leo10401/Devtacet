import Link from 'next/link'
import { Mail, MapPin } from 'lucide-react'

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
    </svg>
  )
}

function TwitterIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  )
}

export function SiteFooter() {
  return (
    <footer className="w-full border-t border-border/60 bg-[#090a0f] pt-10 pb-8">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8 xl:px-16">
        {/* Top Section: Brand & Link Grid */}
        <div className="grid grid-cols-1 gap-8 pb-10 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand & Entity Positioning Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <img src="/devtacet.svg" alt="Devtacet" className="h-8 w-8 logo-cyan" />
              <span className="font-display text-xl font-bold tracking-tight text-white">Devtacet</span>
            </Link>

            <p className="mt-4 max-w-md text-xs sm:text-sm leading-relaxed text-zinc-400">
              Devtacet is a digital solutions company based in Lucknow, India, helping startups and businesses build websites, mobile applications, custom software and analytics systems, while also providing SEO and social media marketing services.
            </p>

            <div className="mt-5 flex items-center gap-2 text-xs text-zinc-400 font-mono">
              <MapPin className="size-3.5 text-primary shrink-0" />
              <span>Lucknow, Uttar Pradesh, India</span>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://github.com/Leo10401/Devtacet"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Devtacet on GitHub"
                className="flex size-9 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900/80 text-zinc-400 transition-colors hover:border-primary hover:text-white"
              >
                <GithubIcon className="size-4" />
              </a>
              <a
                href="https://twitter.com/devtacet"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Devtacet on Twitter"
                className="flex size-9 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900/80 text-zinc-400 transition-colors hover:border-primary hover:text-white"
              >
                <TwitterIcon className="size-4" />
              </a>
              <a
                href="https://linkedin.com/company/devtacet"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Devtacet on LinkedIn"
                className="flex size-9 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900/80 text-zinc-400 transition-colors hover:border-primary hover:text-white"
              >
                <LinkedinIcon className="size-4" />
              </a>
              <a
                href="mailto:hello@devtacet.me"
                aria-label="Email Devtacet"
                className="flex size-9 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900/80 text-zinc-400 transition-colors hover:border-primary hover:text-white"
              >
                <Mail className="size-4" />
              </a>
            </div>
          </div>

          {/* Column 1: Services */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-white">Services</p>
            <ul className="mt-4 flex flex-col gap-2.5 text-xs sm:text-sm text-zinc-400">
              <li>
                <Link href="/services/web-development" className="transition-colors hover:text-white">
                  Website Development
                </Link>
              </li>
              <li>
                <Link href="/services/mobile-app-development" className="transition-colors hover:text-white">
                  Mobile App Development
                </Link>
              </li>
              <li>
                <Link href="/services/custom-software" className="transition-colors hover:text-white">
                  Custom Software & MIS
                </Link>
              </li>
              <li>
                <Link href="/services/analytics" className="transition-colors hover:text-white">
                  Data Analytics Tools
                </Link>
              </li>
              <li>
                <Link href="/services/seo" className="transition-colors hover:text-white">
                  Technical SEO & GEO
                </Link>
              </li>
              <li>
                <Link href="/services/social-media-marketing" className="transition-colors hover:text-white">
                  Social Media Marketing
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Case Studies */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-white">Case Studies</p>
            <ul className="mt-4 flex flex-col gap-2.5 text-xs sm:text-sm text-zinc-400">
              <li>
                <Link href="/case-studies/atlas-redesign" className="transition-colors hover:text-white">
                  Atlas Analytics SaaS
                </Link>
              </li>
              <li>
                <Link href="/case-studies/relay-cloud-api" className="transition-colors hover:text-white">
                  Relay Cloud Infrastructure
                </Link>
              </li>
              <li>
                <Link href="/case-studies/edge-deploy-ui" className="transition-colors hover:text-white">
                  Edge Deploy DevTool
                </Link>
              </li>
              <li>
                <Link href="/case-studies/pulseframe-mobile" className="transition-colors hover:text-white">
                  Pulseframe Mobile App
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-primary hover:underline">
                  All Case Studies →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Company & Local */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-white">Company</p>
            <ul className="mt-4 flex flex-col gap-2.5 text-xs sm:text-sm text-zinc-400">
              <li>
                <Link href="/about" className="transition-colors hover:text-white">
                  About Devtacet
                </Link>
              </li>
              <li>
                <Link href="/web-development-company-lucknow" className="transition-colors hover:text-white">
                  Web Development Lucknow
                </Link>
              </li>
              <li>
                <Link href="/compare/devtacet-vs-agency" className="transition-colors hover:text-white">
                  Devtacet vs Agency
                </Link>
              </li>
              <li>
                <Link href="/compare/devtacet-vs-freelancer" className="transition-colors hover:text-white">
                  Devtacet vs Freelancer
                </Link>
              </li>
              <li>
                <Link href="/blog" className="transition-colors hover:text-white">
                  Engineering Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="transition-colors hover:text-white">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-zinc-800/80 pt-6 text-xs text-zinc-500 sm:flex-row">
          <p>© {new Date().getFullYear()} Devtacet. All rights reserved.</p>
          <div className="flex items-center gap-6 text-xs text-zinc-500">
            <span>Lucknow, Uttar Pradesh, India</span>
            <Link href="/contact" className="transition-colors hover:text-zinc-300">
              hello@devtacet.me
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
