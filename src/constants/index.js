// index.js
export const servicesData = [
  {
    title: "Teaching & Mentorship",
    description:
      "Courses taught: Data Structures & Algorithms, Web Technologies, C Programming, Business Communication. Placement training and personality development.",
    items: [
      { title: "DSA", description: "(Core CS concepts)" },
      { title: "Web Technologies", description: "(Frontend basics)" },
      { title: "Communication", description: "(Professional skills)" },
    ],
  },
  {
    title: "Cloud Infrastructure & Security",
    description:
      "AWS EC2, IAM, CloudFront, CloudWatch. LAMP/WordPress setup, identity & access management, deployment and monitoring.",
    items: [
      { title: "AWS IAM & Security", description: "(Access control, policies)" },
      { title: "EC2 & Monitoring", description: "(Instances, CloudWatch)" },
      { title: "LAMP/WordPress", description: "(Server setup & hardening)" },
    ],
  },
  {
    title: "Enterprise Java Development",
    description:
      "Client tier with HTML/JS, server-side using JSP/JSF & JPA, POJO-based business tier, UNIX tooling.",
    items: [
      { title: "Java (JSP/JSF/JPA)", description: "(Backend & web)" },
      { title: "UNIX & Shell", description: "(Tooling & scripts)" },
      { title: "MS-SQL", description: "(Data & reporting)" },
    ],
  },
  {
    title: "Data Analysis & Reporting",
    description:
      "SQL queries, report generation and dashboards for systems like financial management.",
    items: [
      { title: "SQL & Extraction", description: "(Data analysis)" },
      { title: "Reports & Dashboards", description: "(Insights)" },
      { title: "Network Tools", description: "(NS2, CISCO)" },
    ],
  },
];
export const projects = [
  {
    id: 1,
    name: "Cloud Computing — AWS Infrastructure & Security",
    description:
      "Managed EC2 instances, IAM, CloudFront, CloudWatch; set up LAMP and WordPress; deployed and monitored applications.",
    href: "",
    image: "/assets/projects/electronics-store.jpg",
    bgImage: "/assets/backgrounds/poster.jpg",
    frameworks: [
      { id: 1, name: "AWS" },
      { id: 2, name: "Linux" },
      { id: 3, name: "MySQL" },
      { id: 4, name: "WordPress" },
    ],
  },
  {
    id: 2,
    name: "Virtual Air Hockey",
    description:
      "Designed and developed the front-end experience for a virtual air hockey game.",
    href: "",
    image: "/assets/projects/game-store.jpg",
    bgImage: "/assets/backgrounds/curtains.jpg",
    frameworks: [
      { id: 1, name: "HTML/CSS/JS" },
      { id: 2, name: "Java" },
    ],
  },
];
export const socials = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/aishwarya-anand-arora-558507214/",
  },
];
