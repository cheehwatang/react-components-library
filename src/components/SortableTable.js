import { useState } from "react";
import Table from "./Table";
import { FaCaretUp, FaCaretDown } from "react-icons/fa";

function SortableTable(props) {
  const [sortOrder, setSortOrder] = useState(null);
  const [sortBy, setSortBy] = useState(null);

  const { config, data } = props;

  const handleClick = (label) => {
    if (label !== sortBy) {
      setSortBy(label);
      setSortOrder("asc");
    } else {
      if (sortOrder === null) {
        setSortOrder("asc");
      } else if (sortOrder === "asc") {
        setSortOrder("desc");
      } else {
        setSortOrder(null);
      }
    }
  };

  let sortedData = data;
  if (sortOrder && sortBy) {
    const { sortValue } = config.find((column) => column.label === sortBy);
    sortedData = [...data].sort((a, b) => {
      const valueA = sortValue(a);
      const valueB = sortValue(b);
      const reverseOrder = sortOrder === "asc" ? 1 : -1;

      if (typeof valueA === "string") {
        return valueA.localeCompare(valueB) * reverseOrder;
      } else {
        return (valueA - valueB) * reverseOrder;
      }
    });
  }

  const updatedConfig = config.map((column) => {
    if (!column.sortValue) {
      return column;
    }

    return {
      ...column,
      header: () => (
        <th
          className="cursor-pointer"
          onClick={() => handleClick(column.label)}
        >
          <div className="flex items-center">
            {getIcons(column.label, sortBy, sortOrder)}
            {column.label}
          </div>
        </th>
      ),
    };
  });

  return <Table {...props} config={updatedConfig} data={sortedData} />;
}

function getIcons(label, sortBy, sortOrder) {
  if (label !== sortBy) {
    return (
      <div>
        <FaCaretUp />
        <FaCaretDown />
      </div>
    );
  }

  if (sortOrder === null) {
    return (
      <div>
        <FaCaretUp />
        <FaCaretDown />
      </div>
    );
  } else if (sortOrder === "asc") {
    return (
      <div>
        <FaCaretUp />
        <FaCaretDown className="invisible" />
      </div>
    );
  } else {
    return (
      <div>
        <FaCaretUp className="invisible" />
        <FaCaretDown />
      </div>
    );
  }
}

export default SortableTable;
