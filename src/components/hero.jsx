import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { SOCIALS } from "../constants/socials";

export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center gap-10 mt-10 lg:mt-20 sm:bg-slate-950 sm:border sm:border-slate-800 sm:rounded-md sm:p-10 lg:flex-row lg:gap-20">
      <div className="w-full flex flex-col items-center justify-center gap-2 sm:flex-row sm:justify-evenly lg:flex-col">
        <img
          src="/avatar.png"
          alt="programmer avatar"
          className="w-60"
        />
        <h1 className="text-primary-foreground font-bold text-2xl text-center flex flex-col">
          Hi, I'm <span className="text-[#aef3f2] text-3xl">Ignacio Laena</span>
        </h1>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Front-End Developer</CardTitle>
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
          {SOCIALS.map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noreferrer"
              className="flex items-center space-x-2 p-2 rounded-md bg-slate-200 dark:bg-primary-foreground text-primary lg:hover:bg-primary lg:hover:text-primary-foreground transition-colors duration-300 ease-in-out"
            >
              <div className="*:size-5">{social.icon}</div>
              <span className="text-sm">{social.name}</span>
            </a>
          ))}
        </CardFooter>
      </Card>
    </div>
  );
}
