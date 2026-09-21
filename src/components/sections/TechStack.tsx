import Link from "next/link";
import { techStack } from "@/data/site";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

type SkillCardProps = {
  skill: string;
  category: string;
};

function SkillCard({ skill, category }: SkillCardProps) {
  return (
    <div className="rounded-xl border bg-card p-4 shadow-sm transition hover:shadow-md">
      <p className="mb-1 text-xs font-medium text-muted-foreground">
        {category}
      </p>

      <h3 className="text-sm font-semibold tracking-tight">
        {skill}
      </h3>
    </div>
  );
}

export function TechStack() {
  const skills = [
    ...techStack.frontend.map((skill) => ({
      skill,
      category: "Frontend",
    })),

    ...techStack.backend.map((skill) => ({
      skill,
      category: "Backend",
    })),

    ...techStack.devops.map((skill) => ({
      skill,
      category: "Research & Analysis",
    })),

    ...techStack.modeling.map((skill) => ({
      skill,
      category: "Database & Design",
    })),
  ];

  return (
    <section id="tech-stack" className="border-b py-6 md:py-8">
      <div className="mx-auto max-w-4xl px-4">

        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-base font-semibold tracking-tight md:text-lg">
            Skills
          </h2>

          <Button
            variant="ghost"
            size="sm"
            className="h-7 text-xs"
            asChild
          >
            <Link href="/tech-stack" className="gap-1">
              View All
              <ChevronRight className="h-3 w-3" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((item) => (
            <SkillCard
              key={`${item.category}-${item.skill}`}
              skill={item.skill}
              category={item.category}
            />
          ))}
        </div>

      </div>
    </section>
  );
}