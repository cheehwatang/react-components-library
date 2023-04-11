import Link from "./Link";

function Sidebar() {
  const links = [
    { label: "Dropdown", path: "/dropdown" },
    { label: "Accordion", path: "/accordion" },
    { label: "Button", path: "/button" },
  ];

  const renderedLinks = links.map((link) => {
    return (
      <Link key={link.label} to={link.path} className="mb-3">
        {link.label}
      </Link>
    );
  });

  return (
    <div className="sticky top-0 overflow-y-scroll flex flex-col">
      {renderedLinks}
    </div>
  );
}

export default Sidebar;
