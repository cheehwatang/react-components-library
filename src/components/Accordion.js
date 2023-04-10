import { useState } from "react";
import { FaAngleDown, FaAngleLeft } from "react-icons/fa";

function Accordion({ items }) {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const handleClick = (newIndex) => {
    setExpandedIndex(newIndex === expandedIndex ? -1 : newIndex);
  };

  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;

    const icon = (
      <span className="text-xl">
        {isExpanded ? <FaAngleLeft /> : <FaAngleDown />}
      </span>
    );

    return (
      <div key={item.id}>
        <div
          className="flex justify-between items-center p-3 bg-gray-50 border-b cursor-pointer"
          onClick={() => handleClick(index)}
        >
          {item.label}
          {icon}
        </div>
        {isExpanded && <div className="border-b p-5">{item.content}</div>}
      </div>
    );
  });

  return <div className="border-x border-t rounded">{renderedItems}</div>;
}

export default Accordion;
