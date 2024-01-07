import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  nike_clone,
  rate_movie_app,
  todo_list_app,
  simon_game,
  calculator,
  buttonComponent,
  pingPongScorer,
  whacAMole,
  ticTacToe,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const services = [
  {
    title: "Web Development",
    icon: web,
  },
  {
    title: "Front-end development (ReactJS)",
    icon: mobile,
  },
  {
    title: "Backend Development (Node + Express)",
    icon: backend,
  },
  {
    title: "Database Integration (MongoDB)",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Web Developer Intern",
    company_name: "Company Name",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Date From  - Date To",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Second Job Position",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const projects = [
  {
    name: "Nike Clone",
    description: "Nike website clone, fully responsive with all devices",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "green-text-gradient",
      },
    ],
    image: nike_clone,
    source_code_link:
      "https://github.com/pipiag314/nike_clone?tab=readme-ov-file",
    live_preview_link: "https://i-just-cant.netlify.app/",
  },
  {
    name: "Rate Movie App",
    description: "Simple project where user is able to authenticate as a guest. User is able to see popular movies and TV shows details and rate them.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "green-text-gradient",
      },
      {
        name: "react-router-dom",
        color: "pink-text-gradient",
      },
    ],
    image: rate_movie_app,
    source_code_link:
      "https://github.com/pipiag314/rate-movies-app",
    live_preview_link: "https://rate-movie-app.netlify.app/",
  },
  {
    name: "Todo-List",
    description: "Todo list app, user can add new todo, edit them, select as completed and delete",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: todo_list_app,
    source_code_link:
      "https://github.com/pipiag314/todo-list",
    live_preview_link: "https://pipiag314-todolist.netlify.app/",
  },
  {
    name: "Simon Game",
    description: "The Simon game is game of lights and sounds in which players must repeat random sequences of lights by pressing the colored pads in the correct order.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: simon_game,
    source_code_link:
      "https://github.com/pipiag314/simon_game",
    live_preview_link: "https://pipiag314.github.io/simon_game/",
  },
  {
    name: "Calculator",
    description: "Calculator with simple mathematical operations.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: calculator,
    source_code_link:
      "https://github.com/pipiag314/calculator/tree/master",
    live_preview_link: "https://pipiag314.github.io/calculator/",
  },
  {
    name: "Button Component",
    description: "Nice Button component with plain CSS",
    tags: [
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: buttonComponent,
    source_code_link:
      "https://github.com/pipiag314/Button",
    live_preview_link: "https://pipiag314.github.io/Button/",
  },
  {
    name: "Ping-Pong Scorer",
    description: "Players can keep track to their scores",
    tags: [
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
    ],
    image: pingPongScorer,
    source_code_link:
      "https://github.com/pipiag314/ping-pong-scorer",
    live_preview_link: "https://pipiag314.github.io/ping-pong-scorer/",
  },
  {
    name: "Whac A Mole Game",
    description: "Arcade game whac a mole ",
    tags: [
      {
        name: "reactjs",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: whacAMole,
    source_code_link:
      "https://github.com/pipiag314/whac_mole_game",
    live_preview_link: "https://whacmolegame.netlify.app/",
  },
  {
    name: "Tic Tac Toe",
    description: "2 multiplayer tic-tac-toe game",
    tags: [
      {
        name: "reactjs",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: ticTacToe,
    source_code_link:
      "https://github.com/pipiag314/tic-tac-toe",
    live_preview_link: "https://pipiag314.github.io/tic-tac-toe/",
  },
];

export { technologies, experiences, projects };
