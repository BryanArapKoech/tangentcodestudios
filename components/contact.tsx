import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";

export function Contact() {
  return (
    <section className="bg-background py-20 md:py-28" id="contact">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-wider text-accent">
            Get In Touch
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
            Ready to Start Your Project?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Reach out to us directly and let&apos;s discuss how we can help bring your vision to life.
          </p>
        </div>
        <div className="mx-auto max-w-3xl">
          <div className="grid gap-8 sm:grid-cols-3">
            <div className="flex flex-col items-center rounded-lg bg-secondary p-6 text-center">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
                <Mail className="h-6 w-6 text-primary-foreground" />
              </div>
              <p className="mb-1 font-medium text-foreground">Email</p>
              <a
                href="mailto:hello@tangentcodestudios.com"
                className="text-sm text-muted-foreground hover:text-accent transition-colors"
              >
                hello@tangentcodestudios.com
              </a>
            </div>
            <div className="flex flex-col items-center rounded-lg bg-secondary p-6 text-center">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
                <Phone className="h-6 w-6 text-primary-foreground" />
              </div>
              <p className="mb-1 font-medium text-foreground">Phone</p>
              <a
                href="tel:+15551234567"
                className="text-sm text-muted-foreground hover:text-accent transition-colors"
              >
                +1 (555) 123-4567
              </a>
            </div>
            <div className="flex flex-col items-center rounded-lg bg-secondary p-6 text-center">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
                <MapPin className="h-6 w-6 text-primary-foreground" />
              </div>
              <p className="mb-1 font-medium text-foreground">Location</p>
              <p className="text-sm text-muted-foreground">
                Remote-first, worldwide
              </p>
            </div>
          </div>
          <div className="mt-10 text-center">
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90"
            >
              <a href="mailto:hello@tangentcodestudios.com">
                Send Us an Email
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
