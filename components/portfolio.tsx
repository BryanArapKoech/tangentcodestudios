import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Meridian Finance",
    category: "Financial Services",
    description:
      "A modern fintech platform with real-time dashboards and secure transactions.",
    image: "bg-gradient-to-br from-blue-600 to-blue-800",
  },
  {
    title: "GreenLeaf Organic",
    category: "E-Commerce",
    description:
      "Full-featured online store with subscription model and inventory management.",
    image: "bg-gradient-to-br from-emerald-600 to-emerald-800",
  },
  {
    title: "Atlas Consulting",
    category: "Corporate Website",
    description:
      "Professional corporate site with booking system and client portal.",
    image: "bg-gradient-to-br from-slate-600 to-slate-800",
  },
];

export function Portfolio() {
  return (
    <section className="bg-background py-20 md:py-28" id="portfolio">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-wider text-accent">
            Our Work
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
            Recent Projects
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group cursor-pointer overflow-hidden border-border/50 transition-all hover:shadow-xl"
            >
              <div
                className={`relative h-48 ${project.image} flex items-center justify-center`}
              >
                <span className="text-4xl font-bold text-white/20">
                  {project.title.charAt(0)}
                </span>
                <div className="absolute inset-0 flex items-center justify-center bg-primary/80 opacity-0 transition-opacity group-hover:opacity-100">
                  <ExternalLink className="h-8 w-8 text-primary-foreground" />
                </div>
              </div>
              <CardContent className="p-6">
                <Badge variant="secondary" className="mb-3">
                  {project.category}
                </Badge>
                <h3 className="mb-2 text-lg font-semibold text-card-foreground">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {project.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
