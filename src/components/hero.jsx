import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

export default function Hero() {
  const socials = [
    {
      name: "GitHub",
      link: "https://github.com/NachoLaena",
      icon: <FaGithub />,
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/ignacio-laena-2577ba244/",
      icon: <FaLinkedin />,
    },
    {
      name: "ignaciolaena@gmail.com",
      link: "mailto:ignaciolaena@gmail.com",
      icon: <IoMail />,
    },
  ];
  
  return (
    <div className="flex flex-col h-dvh p-4 items-center justify-center sm:flex-row gap-2">
      <img src="/avatar.png" alt="programmer avatar" className="rounded-3xl dark:bg-opacity-30 w-64 md:w-80" />
      <Card>
        <CardHeader>
          <CardTitle>Ignacio Laena</CardTitle>
          <CardDescription>Front-End Developer</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-pretty">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            sit amet justo nec libero luctus ultricies. Nulla facilisi. Nunc in
            nunc eget dui sollicitudin tincidunt. Nulla facilisi. Nunc in nunc
            eget dui sollicitudin tincidunt.
          </p>
        </CardContent>
        <CardFooter className="gap-4 flex-wrap">
          {socials.map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noreferrer"
              className="flex items-center space-x-2 p-2 rounded-md bg-slate-200 dark:bg-primary-foreground text-primary lg:hover:bg-primary lg:hover:text-primary-foreground transition-colors duration-300 ease-in-out"
            >
              <div className="*:size-6">{social.icon}</div>
              <span>{social.name}</span>
            </a>
          ))}
        </CardFooter>
      </Card>
    </div>
  );
}
