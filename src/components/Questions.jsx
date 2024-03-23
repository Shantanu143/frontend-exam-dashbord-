import { useState } from "react";

const Questions = () => {
  const [formData, setFormData] = useState({
    question: "",
    optionOne: "",
    optionTwo: "",
    optionThree: "",
    optionFour: "",
    answer: "one", // default answer
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // You can add further logic here, like sending data to an API
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-5xl w-full px-6 sm:px-6 lg:px-8 mb-12">
        <div className="bg-gray-900 w-full shadow rounded p-8 sm:p-12">
          <p className="text-3xl font-bold leading-7 text-center text-white">
            Enter Questions
          </p>
          <form onSubmit={handleSubmit}>
            <div className="md:flex items-center mt-8">
              <div className="w-full flex flex-col">
                <label className="font-semibold leading-none text-gray-300">
                  Question
                </label>
                <input
                  type="text"
                  name="question"
                  value={formData.question}
                  onChange={handleChange}
                  className="leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded"
                />
              </div>
            </div>
            <div className="md:flex items-center mt-8">
              <div className="w-full md:w-1/2 flex flex-col">
                <label className="font-semibold leading-none text-gray-300">
                  Option one
                </label>
                <input
                  type="text"
                  name="optionOne"
                  value={formData.optionOne}
                  onChange={handleChange}
                  className="leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded"
                />
              </div>
              <div className="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
                <label className="font-semibold leading-none text-gray-300">
                  Option two
                </label>
                <input
                  type="text"
                  name="optionTwo"
                  value={formData.optionTwo}
                  onChange={handleChange}
                  className="leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded"
                />
              </div>
            </div>
            <div className="md:flex items-center mt-8">
              <div className="w-full md:w-1/2 flex flex-col">
                <label className="font-semibold leading-none text-gray-300">
                  Option three
                </label>
                <input
                  type="text"
                  name="optionThree"
                  value={formData.optionThree}
                  onChange={handleChange}
                  className="leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded"
                />
              </div>
              <div className="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
                <label className="font-semibold leading-none text-gray-300">
                  Option four
                </label>
                <input
                  type="text"
                  name="optionFour"
                  value={formData.optionFour}
                  onChange={handleChange}
                  className="leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded"
                />
              </div>
            </div>
            <div className="w-full flex flex-col mt-4">
              <label className="font-semibold leading-none text-gray-300">
                Answer
              </label>
              <select
                name="answer"
                value={formData.answer}
                onChange={handleChange}
                className="leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded"
              >
                <option value="one">Option one</option>
                <option value="two">Option two</option>
                <option value="three">Option three</option>
                <option value="four">Option four</option>
              </select>
            </div>
            <div className="flex items-center justify-center w-full mt-8">
              <button
                type="submit"
                className="font-semibold leading-none text-white py-4 px-10 bg-blue-700 rounded hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none"
              >
                Submit Question
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Questions;
