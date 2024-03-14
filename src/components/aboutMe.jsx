import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  
  import { SOCIALS } from "../constants/socials";

export default function AboutMe() {
  return (
    <div className="text-primary-foreground mb-20">
      <h2 className="text-4xl font-bold font-mono mb-4">About me</h2>
      <div className="flex justify-center md:justify-start">
        <Card>
          <CardHeader>
            <CardTitle>Front-End Developer</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-pretty">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              sit amet justo nec libero luctus ultricies. Nulla facilisi. Nunc
              in nunc eget dui sollicitudin tincidunt. Nulla facilisi. Nunc in
              nunc eget dui sollicitudin tincidunt.
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
                <div className="*:size-6">{social.icon}</div>
                <span>{social.name}</span>
              </a>
            ))}
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
