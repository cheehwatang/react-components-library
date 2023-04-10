import Accordion from "../components/Accordion";

function AccordionPage() {
  const items = [
    {
      id: "1",
      label: "Can I use JavaScript on a project?",
      content:
        "Yes, you can use JavaScript on a project. Yes, you can use JavaScript on a project. Yes, you can use JavaScript on a project.",
    },
    {
      id: "2",
      label: "Can I use React on a project?",
      content:
        "Yes, you can use React on a project. Yes, you can use React on a project. Yes, you can use React on a project.",
    },
    {
      id: "3",
      label: "Can I use TailwindCSS on a project?",
      content:
        "Yes, you can use TailwindCSS on a project. Yes, you can use TailwindCSS on a project. Yes, you can use TailwindCSS on a project.",
    },
  ];

  return <Accordion items={items} />;
}

export default AccordionPage;
