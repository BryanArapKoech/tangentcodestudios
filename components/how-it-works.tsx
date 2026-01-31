const steps = [
  {
    number: "01",
    title: "Discovery Call",
    description:
      "We start with a free consultation to understand your business goals, target audience, and project requirements.",
  },
  {
    number: "02",
    title: "Design & Develop",
    description:
      "Our team creates custom designs and builds your website using the latest technologies, keeping you updated throughout.",
  },
  {
    number: "03",
    title: "Launch & Support",
    description:
      "We deploy your site, provide training, and offer ongoing support to ensure your continued success online.",
  },
];

export function HowItWorks() {
  return (
    <section className="bg-primary py-20 md:py-28" id="process">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-wider text-orange-400">
            Our Process
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-primary-foreground md:text-4xl text-balance">
            How It Works
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <div key={index} className="relative text-center">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-accent text-2xl font-bold text-accent-foreground">
                {step.number}
              </div>
              {index < steps.length - 1 && (
                <div className="absolute left-[calc(50%+40px)] top-8 hidden h-0.5 w-[calc(100%-80px)] bg-primary-foreground/20 md:block" />
              )}
              <h3 className="mb-3 text-xl font-semibold text-primary-foreground">
                {step.title}
              </h3>
              <p className="text-primary-foreground/70">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
