import React from "react";
import { sentimentColorPicker } from "../../helpers/sentimentColorPicker";
import "./table.css";

const Table = ({ data, thead, viewHandler }) => {
  const tableData = (data) => {
    return thead.map((element, index) => {
      if (element === "view") {
        return (
          <td
            key={`table-element-${index}`}
            onClick={() => {
              viewHandler(data.id);
            }}
            className='view'
          >
            View
          </td>
        );
      }
      return (
        <td
          key={`table-element-${index}`}
          style={
            data.sentimentScore
              ? { color: sentimentColorPicker(data.sentimentScore) }
              : {}
          }
        >
          {data[element]}
        </td>
      );
    });
  };
  return (
    <table className="tableList">
      <tbody>
        <tr>
          {thead.map((list, index) => {
            return (
              <th key={`table-list-${index}`}>
                {list?.toUpperCase().replace(/[^a-zA-Z ]/g, " ")}
              </th>
            );
          })}
        </tr>
        {data?.length > 0 ? (
          data.map((singleData, index) => {
            return <tr key={`table-row-${index}`}>{tableData(singleData)}</tr>;
          })
        ) : (
          <tr>
            <td>No result!</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default Table;
