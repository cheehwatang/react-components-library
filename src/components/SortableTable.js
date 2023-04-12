import Table from "./Table";
import useSort from "../hooks/use-sort";
import { FaCaretUp, FaCaretDown } from "react-icons/fa";

function SortableTable(props) {
  const { config, data } = props;

  const { sortOrder, sortBy, sortedData, setSortColumn } = useSort({
    config,
    data,
  });

  const updatedConfig = config.map((column) => {
    if (!column.sortValue) {
      return column;
    }

    return {
      ...column,
      header: () => (
        <th
          className="cursor-pointer"
          onClick={() => setSortColumn(column.label)}
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
