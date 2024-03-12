import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Projects() {
  const projects = [
    {
      title: "Chess-timer",
      img: "/chess-timer.png",
      description:
        "Chess timer app to play chess with friends. It has settings were you can change the time of the game and the increment.",
      link: "https://chess-timer-laena.netlify.app",
      github: "",
      tech: ["React", "Tailwind CSS"],
    },
    {
      title: "Project 2",
      img: "/project2.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet justo nec libero luctus ultricies.",
      link: "",
      github: "",
      tech: ["Next.js", "Tailwind CSS"],
    },
    {
      title: "Project 3",
      img: "/project3.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet justo nec libero luctus ultricies.",
      link: "",
      github: "",
      tech: ["Gatsby", "Tailwind CSS"],
    }
  ];

  return (
    <div className="dark">
      <h2 className="text-white text-4xl font-semibold font-mono">Projects</h2>
      <div className="flex gap-4 flex-wrap justify-center">
        {projects.map((project, index) => (
          <Card key={index} className="mt-4 max-w-80">
            <div>

            </div>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <img src={project.img} alt={project.title} className="rounded-lg aspect-[4/3]" />
            </CardContent>
            <CardFooter className="flex-wrap gap-4">
              {project.tech.map((tech, index) => (
                <span key={index} className="bg-slate-200 dark:bg-primary-foreground text-primary p-2 rounded-md">
                  {tech}
                </span>
              ))}
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="bg-primary dark:bg-primary-foreground text-slate-200 p-2 rounded-md"
              >
                View Project
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="bg-primary dark:bg-primary-foreground text-slate-200 p-2 rounded-md"
              >
                View Code
              </a>
            </CardFooter>
          </Card>
        
        ))}
      </div>
    </div>
  );
}
