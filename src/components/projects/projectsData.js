import { blogapp, datagrid, movieapp, stockapp } from "./projectsImg";

export const projects = [
  {
    id: 1,
    name: "Blog App",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "frontend",
        color: "red",
      },
      {
        name: "react",
        color: "#2196f3",
      },
      {
        name: "redux",
        color: "#ffef62",
      },
      {
        name: "material ui",
        color: "#c6ff00",
      },
    ],
    image: blogapp,
    link: "https://github.com/HakanCava/blogPageWithReact",
  },
  {
    id: 2,
    name: "Stock App",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location",
    tags: [
      {
        name: "frontend",
        color: "red",
      },
      {
        name: "react",
        color: "#2196f3",
      },
      {
        name: "restApi",
        color: "#ffef62",
      },
      {
        name: "material ui",
        color: "#c6ff00",
      },
    ],
    image: stockapp,
    link: "https://github.com/HakanCava/stockApp",
  },
  {
    id: 3,
    name: "Movie App",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "frontend",
        color: "red",
      },
      {
        name: "react",
        color: "#2196f3",
      },
      {
        name: "firebase",
        color: "#ffef62",
      },
      {
        name: "tailwind",
        color: "#c6ff00",
      },
    ],
    image: movieapp,
    link: "https://github.com/HakanCava/movieAppProject",
  },
  {
    id: 4,
    name: "DataGrid",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "frontend",
        color: "red",
      },
      {
        name: "react",
        color: "#2196f3",
      },
      {
        name: "figma",
        color: "#ffef62",
      },
      {
        name: "bootstrap",
        color: "#c6ff00",
      },
    ],
    image: datagrid,
    link: "https://github.com/HakanCava/datagridTask",
  },
];
