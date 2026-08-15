export function SiteFooter() {
  return (
    <footer className="w-full border-t border-border/40 py-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 md:flex-row md:items-center md:justify-between md:px-6">
        <div>
          <img src="/devtacet.svg" alt="Devtacet" className="h-8 logo-cyan" />
        </div>

        <nav className="flex flex-wrap gap-x-8 gap-y-3" aria-label="Footer navigation">
          <a href="#services" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Services
          </a>
          <a href="#process" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Process
          </a>
          <a href="#about" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            About
          </a>
          <a href="/blog" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Blog
          </a>
          <a href="#contact" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Contact
          </a>
        </nav>

        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Devtacet. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
