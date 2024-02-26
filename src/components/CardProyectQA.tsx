import React from "react";
import { Card, CardFooter, Image, Button } from "@nextui-org/react";
import NextModalQA from "./NextModalQA";

export default function App({ project }: { project: any }) {
  return (
    <Card isFooterBlurred className="h-[300px] col-span-12 sm:col-span-5">
      <Image
        removeWrapper
        alt="Card example background"
        className="z-0 w-full h-full scale-125 -translate-y-6 object-scale-down"
        src={project.img}
      />
      <CardFooter className="absolute bg-black/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
        <div>
          <p className="text-black text-sm">{project.name}</p>
        </div>
        <div>
          <Button
            className="text-tiny w-auto"
            color="primary"
            radius="full"
            size="sm"
          >
            <a href={project.test_plan} target="_blank">
              Ver Test Plan
            </a>
          </Button>
          <NextModalQA responsabilities={project.responsabilities} />
        </div>
      </CardFooter>
    </Card>
  );
}
