function Table({ data }) {
  const renderedData = data.map((fruit) => {
    return (
      <tr key={fruit.name}>
        <td>{fruit.name}</td>
        <td className={fruit.color}></td>
        <td>{fruit.score}</td>
      </tr>
    );
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Fruit</th>
          <th>Color</th>
          <th>Score</th>
        </tr>
      </thead>
      <tbody>{renderedData}</tbody>
    </table>
  );
}

export default Table;