import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { PROJECTS } from "@/constants/projects";

export default function Projects() {

  return (
    <div className="dark">
      <h2 className="text-white text-4xl font-semibold font-mono">Projects</h2>
      <div className="flex gap-4 flex-wrap justify-center">
        {PROJECTS.map((project, index) => (
          <Card key={index} className="mt-4 max-w-80">
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <img
                src={project.img}
                alt={project.title}
                className="rounded-lg aspect-[4/3]"
              />
              <div className="flex gap-2 mt-1">
                {project.tech.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-primary-foreground text-primary py-1 px-2 rounded-full "
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-4">
              <div className="flex w-full justify-around">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-primary text-primary-foreground p-2 rounded-lg transition-colors duration-300 ease-in-out border-2 border-transparent lg:hover:border-card"
                >
                  View Project
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-slate-800 text-slate-200 p-2 rounded-lg transition-colors duration-300 ease-in-out border-2 border-transparent lg:hover:border-card"
                >
                  View Code
                </a>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
