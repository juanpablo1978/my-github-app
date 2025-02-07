import React from "react";
import { FaDocker, FaNpm } from "react-icons/fa";
import { SiApache,SiNuget, SiRubygems } from "react-icons/si";
import { GoContainer } from "react-icons/go";

//import { dataPortfolio } from "../../../public/Data/Data";
export const itemsPackages = [
    {
      id: 1,
      icon: <FaDocker  className="h-6 w-6" />,
      title: "Docker",
      description: "A software platform used for building applications based on containers — small and lightweight execution environments.",
      link: "https://docs.github.com/es/packages/working-with-a-github-packages-registry/working-with-the-docker-registry",
    },
    {
      id: 2,
      icon: <SiApache className="h-6 w-6" />,
      title: "Apache Maven",
      description: "A default package manager used for the Java programming language and the Java runtime environment.",
      link: "https://docs.github.com/es/packages/working-with-a-github-packages-registry/working-with-the-apache-maven-registry",
    },
    {
      id: 3,
      icon: <SiNuget className="h-6 w-6" />,
      title: "NuGet",
      description: "A free and open source package manager used for the Microsoft development platforms including .NET.",
      link: "https://docs.github.com/es/packages/working-with-a-github-packages-registry/working-with-the-nuget-registry",
    },
    {
      id: 4,
      icon: < SiRubygems className="h-6 w-6" />,
      title: " RubyGems",
      description: "A standard format for distributing Ruby programs and libraries used for the Ruby programming language.",
      link: "https://docs.github.com/es/packages/working-with-a-github-packages-registry/working-with-the-rubygems-registry",
    },
    {
      id: 5,
      icon: <FaNpm className="h-6 w-6" />,
      title: "npm",
      description: "A package manager for JavaScript, included with Node.js. npm makes it easy for developers to share and reuse code.",
      link: "https://docs.github.com/es/packages/working-with-a-github-packages-registry/working-with-the-npm-registry",
    },
    {
        id: 6,
        icon: <GoContainer  className="h-6 w-6" />,
        title: "Containers",
        description: "A single place for your team to manage Docker images and decide who can see and access your images.",
        link: "https://docs.github.com/es/packages/working-with-a-github-packages-registry/working-with-the-container-registry",
      }
  ];
  
  