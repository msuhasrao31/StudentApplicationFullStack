import axios from "axios";
import { useEffect, useState } from "react";

const Student = () => {
  const [studentId, setId] = useState("");
  const [studentName, setStudentName] = useState("");
  const [address, setAddress] = useState("");
  const [mobile, setMobile] = useState("");
  const [active, setStatus] = useState("select"); // Set initial state to "select"
  const [students, setStudents] = useState([]);

  useEffect(() => {
    (async () => await Load())();
  }, []);

  async function Load() {
    try {
      const result = await axios.get(
        "http://localhost:8075/api/v1/student/getAllStudents"
      );
      setStudents(result.data);
    } catch (err) {
      console.error(err);
    }
  }

  async function save(event) {
    event.preventDefault();
    try {
      await axios.post("http://localhost:8075/api/v1/student/save", {
        studentName: studentName,
        address: address,
        mobile: mobile,
        active: active === "select" ? null : active,
      });
      alert("Student Registration Successfully");
      setId("");
      setStudentName("");
      setAddress("");
      setMobile("");
      setStatus("select"); // Reset to "select"
      await Load();
    } catch (err) {
      alert(err);
    }
  }

  async function editStudent(student) {
    setStudentName(student.studentName);
    setAddress(student.address);
    setMobile(student.mobile);
    setStatus(student.active);
    setId(student.studentId);
  }

  async function DeleteStudent(studentId) {
    try {
      await axios.delete(
        "http://localhost:8075/api/v1/student/deletestudentid/" + studentId
      );
      alert("Student deleted Successfully");
      await Load();
    } catch (err) {
      alert(err);
    }
  }

  async function update(event) {
    event.preventDefault();
    try {
      await axios.put("http://localhost:8075/api/v1/student/update", {
        studentId: studentId,
        studentName: studentName,
        address: address,
        mobile: mobile,
        active: active === "select" ? null : active,
      });
      alert("Student Updated");
      setId("");
      setStudentName("");
      setAddress("");
      setMobile("");
      setStatus("select"); // Reset to "select"
      await Load();
    } catch (err) {
      alert(err);
    }
  }

  return (
    <div className="mt-8 p-5 border-2 cursor-pointer border-neutral-900 shadow-2xl">
      <div className="flex justify-between items-center w-full space-x-12">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Student Admission Services
        </h1>
      </div>

      <div className="flex justify-between items-center w-full space-x-12">
        <input
          type="text"
          className="w-1/2 border-2 borderzinc-800 py-2 pl-2"
          placeholder="StudentName"
          id="studentName"
          value={studentName}
          onChange={(event) => {
            setStudentName(event.target.value);
          }}
        />

        <input
          type="text"
          className="w-1/2 border-2 borderzinc-800 py-2 pl-2"
          placeholder="Address"
          id="address"
          value={address}
          onChange={(event) => {
            setAddress(event.target.value);
          }}
        />
      </div>

      <div className="flex justify-between items-center w-full space-x-12">
        <input
          type="text"
          className="w-1/2 border-2 borderzinc-800 py-2 pl-2"
          placeholder="Mobile"
          id="mobile"
          value={mobile}
          onChange={(event) => {
            setMobile(event.target.value);
          }}
        />

        <select
          id="active"
          className="w-1/2 border-2 borderzinc-800 py-2 pl-2"
          value={active}
          onChange={(e) => setStatus(e.target.value === "true")}
        >
          <option value="select">Select</option>
          <option value="true">Completed</option>
          <option value="false">Not Completed</option>
        </select>
      </div>

      <div className="mt-8 p-5 border-2 cursor-pointer border-neutral-900 shadow-2xl">
        <div className="flex justify-end items-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={save}
          >
            Save
          </button>
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            onClick={update}
          >
            Update
          </button>
        </div>
      </div>

      <div className="mt-8 p-5 border-2 cursor-pointer border-neutral-900 shadow-2xl">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Student Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Address
                </th>
                <th scope="col" className="px-6 py-3">
                  Mobile
                </th>
                <th scope="col" className="px-6 py-3">
                  Status
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            {students.map((student) => (
              <tbody key={student.studentId}>
                <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {student.studentName}
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {student.address}
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {student.mobile}
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {student.active ? (
                      <span style={{ color: "green", fontWeight: "bold" }}>
                        Completed
                      </span>
                    ) : (
                      <span style={{ color: "red", fontWeight: "bold" }}>
                        Not Completed
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <button
                      className="bg-blue-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                      onClick={() => editStudent(student)}
                    >
                      Edit
                    </button>
                    <button
                      className="bg-red-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                      onClick={() => DeleteStudent(student.studentId)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default Student;
