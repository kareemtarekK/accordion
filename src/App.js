import { useState } from "react";
const data = [
  {
    title: "what is react ⚛️?",
    text: "Functional components with Hooks are simpler and more modern, replacing class components which use lifecycle methods. Hooks like useState and useEffect allow cleaner state and effect handling.",
  },
  {
    title: "what are tools for react?",
    text: "Essential tools include React Router (routing), Redux or Zustand (state), Jest (testing), and Tailwind CSS (styling). Dev tools like Vite, ESLint, and Prettier boost productivity.",
  },
  {
    title: "waht are Modern Technologies for react?",
    text: "React integrates well with GraphQL (via Apollo), TypeScript (for type safety), and Webpack/Vite (for bundling and performance). These tools enable scalable, maintainable apps",
  },
  {
    title: "what are job related to react?",
    text: "Employers seek React, TypeScript, Redux, REST/GraphQL, testing skills, and sometimes Next.js or CI/CD knowledge. Soft skills and teamwork are also crucial.",
  },
  {
    title: "how to master react?",
    text: "Start with JavaScript, JSX, hooks, and routing; then move to advanced tools like Redux, TypeScript, and performance optimization. Build projects and contribute to GitHub.",
  },
];
export default function App() {
  return <Accordion />;
}

function Accordion() {
  const [open, setIsOpen] = useState(null);
  return (
    <div className="accordion">
      {data.map((item, i) => (
        <Item item={item} num={i + 1} key={i} open={open} onSetOpen={setIsOpen}>
          {item.text}
        </Item>
      ))}
    </div>
  );
}

function Item({ item, num, open, onSetOpen, children }) {
  const isOpen = open === num;
  // const [isOpen, setIsOpen] = useState(false);

  // function handleToggle() {
  //   setIsOpen((isOpen) => !isOpen);
  // }
  function handleToggle() {
    onSetOpen(() => (isOpen ? null : num));
  }

  return (
    <div
      className={`accordion-content ${isOpen ? "clicked" : ""}`}
      onClick={handleToggle}
    >
      <span className={`${isOpen ? "num" : ""}`}>
        {num <= 9 ? `0${num}` : { num }}
      </span>
      <p>{item.title}</p>
      <span className="span-r">{isOpen ? `-` : "+"}</span>
      {isOpen && <p className="special">{children}</p>}
    </div>
  );
}
