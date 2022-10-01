import React from "react";
import { useNavigate } from "react-router-dom";

const Employee = ({ employee, deleteEmployee }) => {
  const navigate = useNavigate();
  const editEmployee = (e, id) => {
    e.preventDefault();
    navigate(`/employee-edit/${id}`);
  };

  return (
    <tr key={employee.id}>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{employee.firstName}</div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{employee.lastName}</div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{employee.emailId}</div>
      </td>
      <td className="text-right px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">
          <a
            href="/#"
            onClick={(e, id) => editEmployee(e, employee.id)}
            className="rounded bg-blue-600 hover:bg-blue-700 text-white mr-2 px-6 py-2 font-semibold hover:cursor-pointer"
          >
            Edit
          </a>
          <a
            href="/#"
            onClick={(e, id) => deleteEmployee(e, employee.id)}
            className="rounded bg-red-600 hover:bg-red-700 text-white px-6 py-2 font-semibold hover:cursor-pointer"
          >
            Delete
          </a>
        </div>
      </td>
    </tr>
  );
};

export default Employee;
