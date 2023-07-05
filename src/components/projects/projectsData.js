import { blogapp, datagrid, movieapp, stockapp } from "./projectsImg";

export const projects = [
  {
    id: 1,
    name: "Blog App",
    description:
      " Blog App is a blog web application using that user to create his/her blogs and display them on the dashboard. Posting, deleting, and updating blog posts can be done. In this project, each user has their blog page, used Material UI and Tailwind libraries for styling, profit by react-router-dom library for page transitions, a react-toastify library for notifications, and react-helmet for SEO. In addition, Redux-persist was used to keep user information in local storage. Swagger documentation which was created by Python Django was used for CRUD operations and authentication authorization in backend. Redux  Toolkit was used for state management.",
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
      " Stock App is an online single-page web application that enables you to manage orders. You can get, add, edit, or delete products, firms, brands, sales, and purchases. Technical tools and libraries: HTML, CSS, JavaScript, React, Material.UI, Formik, Yup, Axios, Toastify, React-router-dom libraries in frontend. Redux-persist was used to keep user information in local storage. Swagger documentation which was created by Python Django was used for CRUD operations and authentication authorization in backend. Redux Toolkit was used for state management",
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
        name: "materialUI",
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
      "Movie App is a movie web application using Firebase realtime-database and displays them on the dashboard. If a user exists, some features can appear. For example, each movie’s score and favorite button. Also, each movie is grouped by its score. In the project, the Firebase realtime-database library was used for storing data, Tailwind library for styling, react-router-dom library for page transitions, and react-toastify library for notifications. In addition, firebase was used for login, register, and authorization processes.",
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
      "In this project, we create a data table. The data user can add a new data by clicking the 'add new account' button. The added data is kept in local storage and printed on the screen. I used the useContext structure for global states.",
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
