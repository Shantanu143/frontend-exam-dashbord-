import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ManageExam = () => {
    const navigate = useNavigate();
  const [exams, SetExam] = useState([
    {
      _id: "",
      name: "",
      creator: {
        email: "",
        _id: "",
      },
      exam_number: "",
    },
  ]);

  useEffect(() => {
    const data = async () => {
      const res = await fetch("/api/exam/all");

      const { success, exams } = await res.json();
      SetExam(exams);
      console.log(exams);
    };

    data();
  }, []);

  const AddUser = async(id) => {
    navigate(`/dashboard/addUser/${id}`)
  }

  return (
    <section className="container px-4 mx-auto">
      <div className="flex items-center gap-x-3">
        <h1 className="flex items-center m-auto font-semibold text-gray-800">
          Manage Exam
        </h1>
      </div>

      <div className="flex flex-col mt-6">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="flex items-center flex-col gap-3 min-w-full py-2 align-middle md:px-6 lg:px-8">
            {exams.map((exam) => (
              <div className="w-[60vw] h-14 bg-slate-300 flex flex-row justify-between">
                <div className="flex ml-4 flex-col gap-1">
                  <h1>{exam.name}</h1>
                  <p>{exam.exam_number}</p>
                </div>

                <div className="flex flex-row gap-1">
                  <button className="bg-green-500 p-4 rounded-md">
                    Edit Exam
                  </button>
                  <button onClick={()=> AddUser(exam._id)} className="bg-green-500 p-4 rounded-md">
                    Add Students
                  </button>
                  <button className="bg-green-500 p-4 rounded-md">
                    delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManageExam;
