import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Button,
} from "@nextui-org/react";

export default function App({project}) {
  return (
    <Card isFooterBlurred className="h-[300px] col-span-12 sm:col-span-5">
      <Image
        removeWrapper
        alt="Card example background"
        className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
        src={project.img}
      />
      <CardFooter className="absolute bg-black/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
        <div>
          <p className="text-black ">{project.name}</p>
        </div>

        <Button className="text-tiny" color="primary" radius="full" size="md">
          <a href={project.web_site} target="_blank">
            Ver Web Site
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}
