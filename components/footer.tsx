import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <span className="text-sm font-bold text-primary-foreground">TC</span>
            </div>
            <span className="text-lg font-semibold text-foreground">
              Tangent Code Studios
            </span>
          </div>
          <nav className="flex flex-wrap items-center justify-center gap-6">
            <Link
              href="#services"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Services
            </Link>
            <Link
              href="#portfolio"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Portfolio
            </Link>
            <Link
              href="#process"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Process
            </Link>
            <Link
              href="#contact"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Contact
            </Link>
          </nav>
        </div>
        <div className="mt-8 border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            {new Date().getFullYear()} Tangent Code Studios. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
