import React from "react";
import {Tabs, Tab, Card, CardBody} from "@nextui-org/react";
import CardProjectDev from "./CardProjectDev"

const projects = [
  {
    name: "Club Harmony",
    description: "",
    technologies: [
      "HTML",
      "CSS",
      "Bootstrap",
      "Javascript",
      "Angular",
      "Node.js",
      "Express",
      "PrimeNG",
    ],
    img: "http://imgfz.com/i/7UwFytQ.png",
    web_site: "https://club-harmony.web.app/",
  }
];


export default function NextTabsProjects() {
  return (
    <div className="flex flex-col" id="portfolio">
      <Tabs aria-label="Options">
        <Tab key="quality assurance" title="QA">
          <Card>
            <CardBody>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </CardBody>
          </Card>  
        </Tab>
        <Tab key="developer" title="DEV">
          <Card>
            <CardBody>
              <div className="flex flex-wrap gap-8">
              {
                projects.map((item) => (
                  <div className="lg:w-1/2 w-full">
                    <CardProjectDev project={item}/>
                  </div>
                ))
              }
              </div>
            </CardBody>
          </Card>  
        </Tab>
      </Tabs>
    </div>  
  );
}
