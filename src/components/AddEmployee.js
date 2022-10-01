import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";

const AddEmployee = () => {
  const [employee, setEmployee] = useState({
    id: "",
    firstName: "",
    lastName: "",
    emailId: "",
  });

  const navigate = useNavigate();

  // function to get data value from input
  const handleChange = (e) => {
    const value = e.target.value;
    setEmployee({ ...employee, [e.target.name]: value });
  };

  // function to save data
  const saveEmployee = (e) => {
    e.preventDefault(); // disable refresh of the page
    EmployeeService.saveEmployee(employee)
      .then((response) => {
        console.log(response);
        navigate("/employee-list"); // redirect
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // function to reset form input
  const reset = (e) => {
    e.preventDefault();
    setEmployee({
      id: "",
      firstName: "",
      lastName: "",
      emailId: "",
    });
  };

  return (
    <div className="container mx-auto my-8">
      <div className="h-12">
        <div className="flex max-w-2xl mx-auto shadow border-b">
          <div className="px-8 py-8 w-full">
            <div className="font-thin text-center tracking-wider">
              <p className="mb-4 text-xl font-extrabold tracking-tight leading-none text-gray-900 md:text-2xl lg:text-4xl dark:text-white">
                Add New{" "}
                <span class="text-blue-600 dark:text-blue-500">Employee</span>{" "}
              </p>{" "}
            </div>
            <div className="mb-6 mt-4">
              <label
                htmlFor="firstName"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={employee.firstName}
                onChange={(e) => handleChange(e)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="First Name"
                required
              />
            </div>
            <div className="mb-6 mt-4">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={employee.lastName}
                onChange={(e) => handleChange(e)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Last Name"
                required
              />
            </div>

            <div className="mb-6 mt-4">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Your Email
              </label>
              <input
                type="email"
                id="emailId"
                name="emailId"
                value={employee.emailId}
                onChange={(e) => handleChange(e)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="example@mail.com"
                required
              />
              <p
                id="helper-text-explanation"
                class="mt-2 text-sm text-gray-500 dark:text-gray-400"
              >
                We’ll never share your details. Read our{" "}
                <a
                  href="/#"
                  class="font-medium text-blue-600 hover:underline dark:text-blue-500"
                >
                  Privacy Policy
                </a>
                .
              </p>
            </div>

            <div className="h-14 w-full space-x-4">
              <button
                type="submit"
                onClick={saveEmployee}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Add Employee
              </button>
              <button
                type="submit"
                onClick={reset}
                className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEmployee;
