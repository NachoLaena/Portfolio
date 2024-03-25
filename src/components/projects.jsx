import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PROJECTS } from "@/constants/projects";
import { FaCode, FaExternalLinkAlt } from "react-icons/fa";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function Projects() {
  return (
    <div id="projects" className="dark w-full">
      <h2 className="text-white text-4xl font-bold mb-4">Projects</h2>
      <div
        className="flex gap-4 flex-wrap justify-center sm:justify-around lg:justify-between"
      >
        {PROJECTS.map((project, index) => (
          <Card
            key={index}
            className="max-w-96 lg:max-w-80"
          >
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
              <div className="flex w-full justify-end gap-4">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button size="icon" asChild>
                        <a href={project.link} target="_blank" rel="noopener">
                          <FaExternalLinkAlt />
                        </a>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Ir a la pagina</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline" size="icon" asChild>
                        <a href={project.github} target="_blank" rel="noopener">
                          <FaCode />
                        </a>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Ir al repositorio</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
