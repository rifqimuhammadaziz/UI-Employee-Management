import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";

const EditEmployee = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [employee, setEmployee] = useState({
    id: id,
    firstName: "",
    lastName: "",
    emailId: "",
  });

  // put value on input form
  const handleChange = (e) => {
    const value = e.target.value;
    setEmployee({ ...employee, [e.target.name]: value });
  };

  // get data by id when render page
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await EmployeeService.getEmployeeById(id);
        setEmployee(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
    // eslint-disable-next-line
  }, []);

  // function to update employee
  const updateEmployee = (e) => {
    e.preventDefault();
    EmployeeService.updateEmployee(employee, id)
      .then((response) => {
        navigate("/employee-list");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container mx-auto my-8">
      <div className="h-12">
        <div className="flex max-w-2xl mx-auto shadow border-b">
          <div className="px-8 py-8 w-full">
            <div className="font-thin text-center tracking-wider">
              <p className="mb-4 text-xl font-extrabold tracking-tight leading-none text-gray-900 md:text-2xl lg:text-4xl dark:text-white">
                Update{" "}
                <span class="text-blue-600 dark:text-blue-500">Employee</span> :{" "}
                {employee.emailId}
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
                onClick={updateEmployee}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Update Employee
              </button>
              <button
                type="submit"
                onClick={() => navigate("/employee-list")}
                className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    // <div className="flex max-w-2xl mx-auto shadow border-b">
    //   <div className="px-8 py-8">
    //     <div className="font-thin text-2xl tracking-wider">
    //       <h1>Edit Employee</h1>
    //     </div>
    //     <div className="items-center justify-center h-14 w-full my-4">
    //       <label className="block text-gray-600 text-sm font-normal">
    //         First Name
    //       </label>
    //       <input
    //         type="text"
    //         name="firstName"
    //         value={employee.firstName}
    //         onChange={(e) => handleChange(e)}
    //         className="h-10 w-96 border mt-2 px-2 py-2"
    //       ></input>
    //     </div>
    //     <div className="items-center justify-center h-14 w-full my-4">
    //       <label className="block text-gray-600 text-sm font-normal">
    //         Last Name
    //       </label>
    //       <input
    //         type="text"
    //         name="lastName"
    //         value={employee.lastName}
    //         onChange={(e) => handleChange(e)}
    //         className="h-10 w-96 border mt-2 px-2 py-2"
    //       ></input>
    //     </div>
    //     <div className="items-center justify-center h-14 w-full my-4">
    //       <label className="block text-gray-600 text-sm font-normal">
    //         Email
    //       </label>
    //       <input
    //         type="email"
    //         name="emailId"
    //         value={employee.emailId}
    //         onChange={(e) => handleChange(e)}
    //         className="h-10 w-96 border mt-2 px-2 py-2"
    //       ></input>
    //     </div>

    //     <div className="items-center justify-center h-14 w-full my-4 space-x-4 pt-4">
    //       <button
    //         onClick={updateEmployee}
    //         className="rounded text-white font-semibold bg-green-600 py-2 px-6 hover:bg-green-700"
    //       >
    //         Update
    //       </button>
    //       <button
    //         onClick={() => navigate("/employee-list")}
    //         className="rounded text-white font-semibold bg-red-600 py-2 px-6 hover:bg-red-700"
    //       >
    //         Cancel
    //       </button>
    //     </div>
    //   </div>
    // </div>
  );
};

export default EditEmployee;
