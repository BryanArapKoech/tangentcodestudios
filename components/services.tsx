import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2, Palette, Rocket } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Custom Web Development",
    description:
      "Tailored websites built with modern technologies. Fast, secure, and scalable solutions that grow with your business.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Beautiful, intuitive designs that capture your brand essence and provide exceptional user experiences across all devices.",
  },
  {
    icon: Rocket,
    title: "Performance Optimization",
    description:
      "Lightning-fast load times and optimized performance. We ensure your site ranks well and keeps visitors engaged.",
  },
];

export function Services() {
  return (
    <section className="bg-secondary py-20 md:py-28" id="services">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-wider text-accent">
            What We Do
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
            Services That Drive Results
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <Card
              key={index}
              className="border-border/50 bg-card transition-all hover:shadow-lg"
            >
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
                  <service.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl text-card-foreground">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
