import React from "react";

const Employee = ({ employee, deleteEmployee }) => {
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
            href="www.facebook.com"
            className="rounded bg-blue-600 hover:bg-blue-700 text-white mr-2 px-6 py-2 font-semibold"
          >
            Edit
          </a>
          <a
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
