import React from "react";

interface Props {
  data: any[];
  title: string;
}

const DataGrid: React.FC<Props> = ({ data, title }) => {
  if (!data.length) return null;

  const headers = Object.keys(data[0]);

  return (
    <div>
      <h4>{title}</h4>
      <table border={1}>
        <thead>
          <tr>
            {headers.map((h) => <th key={h}>{h}</th>)}
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i}>
              {headers.map(h => <td key={h}>{String(row[h])}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataGrid;
