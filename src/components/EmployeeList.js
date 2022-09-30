import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";

const EmployeeList = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [employees, setEmployees] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await EmployeeService.getEmployees();
        setEmployees(response.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div className="container mx-auto my-8">
      <div className="h-12">
        <button
          onClick={() => navigate("/employee-add")}
          className="rounded bg-slate-600 text-white px-6 py-2 font-semibold"
        >
          Add Employee
        </button>
      </div>
      <div className="flex shadow border-b">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                First Name
              </th>
              <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                Last Name
              </th>
              <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                Email
              </th>
              <th className="text-right font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                Action
              </th>
            </tr>
          </thead>
          {!loading && (
            <tbody className="bg-white">
              {employees.map((employee) => (
                <tr>
                  <td className="text-left px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">
                      {employee.firstName}
                    </div>
                  </td>
                  <td className="text-left px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">
                      {employee.lastName}
                    </div>
                  </td>
                  <td className="text-left px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">
                      {employee.emailId}
                    </div>
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
                        href="www.facebook.com"
                        className="rounded bg-red-600 hover:bg-red-700 text-white px-6 py-2 font-semibold"
                      >
                        Delete
                      </a>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
};

export default EmployeeList;
