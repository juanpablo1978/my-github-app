
import { FaDocker, FaNpm } from "react-icons/fa";
import { SiApache,SiNuget, SiRubygems } from "react-icons/si";
import { GoContainer } from "react-icons/go";
import { GiPlainCircle } from "react-icons/gi";


//import { itemsPackages } from "../../../public/Data/Data";
export const itemsPackages = [
    {
      id: 1,
      icon: FaDocker,
      iconClassName: "text-[18px] text-blue-600",
      title: "Docker",
      description: "A software platform used for building applications based on containers — small and lightweight execution environments.",
      link: "https://docs.github.com/es/packages/working-with-a-github-packages-registry/working-with-the-docker-registry",
    },
    {
      id: 2,
      icon: SiApache,
      iconClassName: "text-[18px] text-orange-800" , 
      title: "Apache Maven",
      description: "A default package manager used for the Java programming language and the Java runtime environment.",
      link: "https://docs.github.com/es/packages/working-with-a-github-packages-registry/working-with-the-apache-maven-registry",
    },
    {
      id: 3,
      icon: SiNuget,
         iconClassName: "text-[18px] text-blue-900" ,
      title: "NuGet",
      description: "A free and open source package manager used for the Microsoft development platforms including .NET.",
      link: "https://docs.github.com/es/packages/working-with-a-github-packages-registry/working-with-the-nuget-registry",
    },
    {
      id: 4,
      icon: SiRubygems,
        iconClassName:"text-[18px] text-orange-800",
      title: " RubyGems",
      description: "A standard format for distributing Ruby programs and libraries used for the Ruby programming language.",
      link: "https://docs.github.com/es/packages/working-with-a-github-packages-registry/working-with-the-rubygems-registry",
    },
    {
      id: 5,
      icon: FaNpm,
       iconClassName:"text-[18px] text-red-600",
      title: "npm",
      description: "A package manager for JavaScript, included with Node.js. npm makes it easy for developers to share and reuse code.",
      link: "https://docs.github.com/es/packages/working-with-a-github-packages-registry/working-with-the-npm-registry",
    },
    {
        id: 6,
        icon:GoContainer,
         iconClassName:"text-[18px] text-white",
        title: "Containers",
        description: "A single place for your team to manage Docker images and decide who can see and access your images.",
        link: "https://docs.github.com/es/packages/working-with-a-github-packages-registry/working-with-the-container-registry",
      }
  ];
  
  export const popularRepositories = [
    {
      id: 1,
      title: "react-movies",
      visibility: "Public",
      description: "Una app de pelícuas con React + Vite",
      language: "JavaScript",
      icon: GiPlainCircle,
       iconClassName: "w-3 h-3 text-yellow-300"
    },
    {
      id: 2,
      title: "alkemy-challenge",
      visibility: "Public",
      description: "Desafio de Alkemy con Create react App + Tailwind",
      language: "JavaScript",
      icon: GiPlainCircle,
         iconClassName: "w-3 h-3 text-yellow-300"
    },
    {
      id: 3,
      title: "asociacion.github.io",
      visibility: "Public",
      description: "Sitio web de la Asociación Civil Nueva polonia",
      language: "HTML",
      icon: GiPlainCircle,
      iconClassName: "w-3 h-3 text-orange-600"
    },
    {
      id: 4,
      title: "e-commerce",
      visibility: "Public",
      description: "Una aplicacion creada con Vite y Tailwind",
      language: "JavaScript",
      icon:GiPlainCircle,
         iconClassName: "w-3 h-3 text-yellow-300"
    },
    {
      id: 5,
      title: "portfolio-jpa",
      visibility: "Public",
      description: "Portfolio para presentar mis proyectos, desarrollado con Vite + Tailwind CSS",
      language: "JavaScript",
      icon: GiPlainCircle,
        iconClassName: "w-3 h-3 text-yellow-300"
    },
    {
      id: 6,
      title: "portfolio",
      visibility: "Public",
      description: "Es un portfolio maquetado con Sass",
      language: "HTML",
      icon: GiPlainCircle,
        iconClassName: "w-3 h-3 text-orange-600"
      }
  ];