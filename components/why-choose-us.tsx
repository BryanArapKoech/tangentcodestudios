import { CheckCircle, Clock, Headphones } from "lucide-react";

const benefits = [
  {
    icon: CheckCircle,
    title: "Quality Guaranteed",
    description:
      "We stand behind our work with a satisfaction guarantee. If you are not happy, we will make it right.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description:
      "We respect your deadlines and deliver projects on schedule, every time. No surprises, no delays.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description:
      "Our team is always available to help. Get responsive support whenever you need assistance.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="bg-secondary py-20 md:py-28" id="about">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-wider text-accent">
            Why Us
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
            Why Choose Tangent Code Studios
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-accent/10">
                <benefit.icon className="h-7 w-7 text-accent" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-foreground">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
