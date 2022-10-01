import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AddEmployee from "./components/AddEmployee";
import EditEmployee from "./components/EditEmployee";
import EmployeeList from "./components/EmployeeList";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<EmployeeList />}></Route>
          <Route path="/" element={<EmployeeList />}></Route>
          <Route path="/employee-list" element={<EmployeeList />}></Route>
          <Route path="/employee-add" element={<AddEmployee />}></Route>
          <Route path="/employee-edit/:id" element={<EditEmployee />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
