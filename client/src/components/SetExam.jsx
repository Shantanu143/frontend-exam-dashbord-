import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Questions from "./Questions";

const SetExam = (maxQuestion) => {
  const navigate = useNavigate();

  // State variables to store user inputs
  const [examNumber, setExamNumber] = useState("");
  const [examName, setExamName] = useState("");
  const [dateOfExam, setDateOfExam] = useState("");
  const [numberOfQuestions, setNumberOfQuestions] = useState("");
  const [data, setData] = useState({
    totalQuestions: "",
    name: "",
    number: "",
  });

  const [open, setOpen] = useState(false);

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Log user inputs to the console
    console.log("Exam Number:", examNumber);
    console.log("Exam Name:", examName);
    console.log("Date Of Exam:", dateOfExam);
    console.log("Number of Questions:", numberOfQuestions);
    
    setData({
      totalQuestions: numberOfQuestions,
      name: examName,
      number: examNumber
    })
    setOpen(true);
  };

  return (
    <section className="flex justify-center items-center h-screen">
      {open && data.totalQuestions && data.name && data.number ? (
        <Questions data={data} />
      ) : (
        <>
          <div
            className={`max-w-4xl p-6 bg-white rounded-md shadow-md dark:bg-gray-800`}
          >
            <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">
              Set Exam
            </h2>

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                <div>
                  <label
                    className="text-gray-700 dark:text-gray-200"
                    htmlFor="examNumber"
                  >
                    Exam Number
                  </label>
                  <input
                    id="examNumber"
                    type="number"
                    min={1}
                    value={examNumber}
                    onChange={(e) => setExamNumber(e.target.value)}
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  />
                </div>

                <div>
                  <label
                    className="text-gray-700 dark:text-gray-200"
                    htmlFor="examName"
                  >
                    Exam Name
                  </label>
                  <input
                    id="examName"
                    type="text"
                    value={examName}
                    onChange={(e) => setExamName(e.target.value)}
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  />
                </div>

                <div>
                  <label
                    className="text-gray-700 dark:text-gray-200"
                    htmlFor="dateOfExam"
                  >
                    Date Of Exam
                  </label>
                  <input
                    id="dateOfExam"
                    type="date"
                    value={dateOfExam}
                    onChange={(e) => setDateOfExam(e.target.value)}
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  />
                </div>

                <div>
                  <label
                    className="text-gray-700 dark:text-gray-200"
                    htmlFor="numberOfQuestions"
                  >
                    Number of Questions
                  </label>
                  <input
                    id="numberOfQuestions"
                    type="number"
                    min={1}
                    defaultValue={1}
                    value={numberOfQuestions}
                    onChange={(e) => setNumberOfQuestions(e.target.value)}
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  />
                </div>
              </div>

              <div className="flex justify-end mt-6">
                <button
                  type="submit"
                  className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
                >
                  Create Exam
                </button>
              </div>
            </form>
          </div>
        </>
      )}
    </section>
  );
};

export default SetExam;
