import vintage808Home from "@/assets/project-vintage808-home.png";
import vintage808Products from "@/assets/project-vintage808-products.png";
import nexDeskDashboard from "@/assets/project-nexdesk-dashboard.png";
import nexDeskLogin from "@/assets/project-nexdesk-login.png";
import awardsLogin from "@/assets/project-awards-login.png";
import awardsNominees from "@/assets/project-awards-nominees.png";
import crm from "@/assets/project-crm.jpg";
export const profile = {
  name: "Mixo Shibambo",
  firstName: "Mixo",
  role: "Full-stack developer",
  location: "Pretoria, South Africa",
  headline: "I build web apps that handle real money, real users and real workflows.",
  intro:
    "Full-stack developer working with Node.js, Express, MongoDB and React. I ship e-commerce platforms, management systems and web apps for freelance clients, and keep a TVET college campus running in IT support.",
  // Placeholder contact details: replace with the real ones.
  email: "mixo.shibambo@example.com",
  github: "https://github.com/",
  linkedin: "https://www.linkedin.com/",
  availability: "Open to junior / intermediate developer roles and freelance work",
};
export const projects = [
  {
    slug: "vintage808",
    title: "Vintage808",
    category: "E-commerce · Client project",
    year: "2025",
    summary: "Full-stack e-commerce platform for a streetwear brand, with PayFast payments.",
    problem:
      "A streetwear client was selling through social media DMs, tracking orders by hand and losing sales between messages. They needed a proper online store that could take payments securely.",
    solution: [
      "Product catalogue, cart and checkout built on a REST API",
      "PayFast integration with server-side ITN (webhook) verification before an order is marked paid",
      "JWT-protected admin area for managing products, stock and orders",
      "Layered backend: routes → controllers → services → models",
    ],
    role: "Sole developer: requirements with the client, backend, frontend, payments and deployment.",
    tech: ["Node.js", "Express", "MongoDB", "JWT", "PayFast", "JavaScript"],
    liveUrl: "https://vintage808.co.za",
    image: vintage808Home,
    screenshots: [vintage808Home, vintage808Products],
  },
  {
    slug: "nex-desk",
    title: "NexDesk",
    category: "Service desk · Web app",
    year: "2025",
    summary: "Service desk platform for managing support requests, SLAs and team knowledge.",
    problem:
      "Support requests arrived by email, phone and walk-ins with no single place to log, assign or follow up on them, so issues were forgotten and nobody could see the workload.",
    solution: [
      "Users log tickets; staff assign, update status and resolve them",
      "Track service performance, ticket priorities and SLA status from the dashboard",
      "Role-based access so staff and admins see different views",
      "Knowledge base and reports to help teams manage support operations",
    ],
    role: "Designed the data model and API, built the auth flow and the dashboard.",
    tech: ["Node.js", "Express", "MongoDB", "JWT", "REST API"],
    liveUrl: "https://nex-desk-iota.vercel.app/",
    image: nexDeskDashboard,
    screenshots: [nexDeskDashboard, nexDeskLogin],
  },
  {
    slug: "tvet-excellence-awards",
    title: "TVET Excellence Awards",
    category: "Web app · Deployed on Vercel",
    year: "2025",
    summary: "Judging and scoring web app used to run a college awards event.",
    problem:
      "Judges were scoring nominees on paper, and tallying the results by hand was slow and easy to get wrong on the night of the event.",
    solution: [
      "Judges log in and score each nominee against set criteria",
      "Scores are totalled automatically into a live ranking",
      "Simple, fast interface that works on phones and tablets",
      "Deployed on Vercel so it was available anywhere on the day",
    ],
    role: "Built and deployed the full app; supported judges during the event.",
    tech: ["JavaScript", "Node.js", "Vercel"],
    liveUrl: "https://adjudix.co.za/",
    image: awardsNominees,
    screenshots: [awardsLogin, awardsNominees],
  },
  {
    slug: "react-crm",
    title: "React CRM",
    category: "Learning project",
    year: "2024",
    summary: "Customer relationship manager built to practise React architecture.",
    problem:
      "I wanted to move beyond vanilla JavaScript and learn how to structure a larger React app with shared state, reusable components and clean data flow.",
    solution: [
      "Contact list, detail views and a simple sales pipeline",
      "Reusable component library for forms, tables and cards",
      "Centralised state management for contacts and deals",
      "Clear folder structure separating UI, state and data logic",
    ],
    role: "Personal project: planned, designed and built end to end.",
    tech: ["React", "JavaScript", "State management", "CSS"],
    image: crm,
  },
];
export const skillGroups = [
  {
    title: "Backend",
    blurb: "Where I spend most of my time.",
    items: [
      "Node.js & Express REST APIs",
      "Multi-layered architecture (routes, controllers, services, models)",
      "JWT authentication & protected routes",
      "Role-based access control",
      "PayFast payments incl. webhook / ITN verification",
      "Middleware, validation & error handling",
      "Environment config & secrets",
    ],
  },
  {
    title: "Frontend",
    blurb: "Clean, usable interfaces.",
    items: [
      "React (components, hooks, state)",
      "Vanilla JavaScript (ES6+)",
      "HTML & CSS, responsive layouts",
      "Consuming REST APIs",
    ],
  },
  {
    title: "Data",
    blurb: "Modelling and storing it properly.",
    items: ["MongoDB", "Mongoose schemas & models", "Password hashing (bcrypt)"],
  },
  {
    title: "IT support",
    blurb: "Day job at a TVET college campus.",
    items: [
      "End-user support for staff & students",
      "Hardware & software troubleshooting",
      "Keeping campus systems running",
    ],
  },
];
export const coreStack = [
  "Node.js",
  "Express",
  "MongoDB",
  "React",
  "JavaScript",
  "JWT",
  "PayFast",
  "REST APIs",
];
export function getProject(slug) {
  return projects.find((p) => p.slug === slug);
}
