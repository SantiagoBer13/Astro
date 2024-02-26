import React from "react";
import {Tabs, Tab, Card, CardBody} from "@nextui-org/react";
import CardProjectDev from "./CardProjectDev";
import CardProyectQA from "./CardProyectQA";

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
    img: "http://imgfz.com/i/lg3CyQA.png",
    web_site: "https://club-harmony.web.app/",
  }
];

const projectsQA = [
  {
    id: 1,
    name: "Testing Club Harmony",
    responsabilities: [
      "Diseñar casos de prueba.",
      "Ejecutar casos de prueba.",
      "Monitoreo de Casos de prueba.",
      "Documentacion de funcionalidades.",
      "Comunicarme con los desarrolladores.",
      "Informe de Pruebas por Sprint.",
      "Presentacion del Informe.",
      "Participar en la creacion de las HU."
    ],
    img: "http://imgfz.com/i/lg3CyQA.png",
    test_plan: "https://drive.google.com/file/d/1LwUbCiiKh7A72UhzGOVlVHwGjaYhaeB0/view?usp=sharing",
    matrix: "https://docs.google.com/spreadsheets/d/12iXHd982ncG0pL-zrNeVIWIobxljmkQZ/edit?usp=drive_web&ouid=112308100768374687674&rtpof=true"
  },
  {
    id: 2,
    name: "Testing Home Banking",
    responsabilities: [
      "Diseñar casos de prueba para 2 HU",
      "Ejecutar casos de prueba para 2 HU",
      "Informe Final",
      "Presentacion Del Informe",
      "Comunicarme con el equipo QA"
    ],
    img: "https://static.vecteezy.com/ti/vettori-gratis/p3/685938-computer-con-carta-di-credito-e-chiave-per-l-39-online-banking-gratuito-vettoriale.jpg",
    test_plan: "https://drive.google.com/file/d/1wjIrRjxeEY_UI7EsD8yXiLo9CmymnwnL/view?usp=sharing",
    matrix: ""
  },
];

export default function NextTabsProjects() {
  return (
    <div className="flex flex-col">
      <Tabs aria-label="Options">
        <Tab key="quality assurance" title="QA">
          <Card>
            <CardBody>
              <div className="flex flex-wrap justify-around">
                {
                  projectsQA.map((item) => (
                    <div className="lg:w-2/5 w-full mx-2">
                      <CardProyectQA project={item}/>
                    </div>
                  ))
                }
              </div>
            </CardBody>
          </Card>  
        </Tab>
        <Tab key="developer" title="DEV">
          <Card>
            <CardBody>
              <div className="flex flex-wrap justify-around">
              {
                projects.map((item) => (
                  <div className="lg:w-2/5 w-full mx-2">
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
