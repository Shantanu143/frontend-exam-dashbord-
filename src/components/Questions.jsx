// import React from 'react';

const Questions = () => {
  return (
    <div className="flex justify-center m-9 items-center h-screen">
      <div className="max-w-5xl w-full px-6 sm:px-6 lg:px-8 mb-12">
        <div className="bg-gray-900 w-full shadow rounded p-8 sm:p-12">
          <p className="text-3xl font-bold leading-7 text-center text-white">
            Enter Questions
          </p>
          <form action="" method="post">
            <div className="md:flex items-center mt-8">
              <div className="w-full flex flex-col">
                <label className="font-semibold leading-none text-gray-300">
                  Question
                </label>
                <input
                  type="text"
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
                  className="leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded"
                />
              </div>
              <div className="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
                <label className="font-semibold leading-none text-gray-300">
                  Option two
                </label>
                <input
                  type="email"
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
                  className="leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded"
                />
              </div>
              <div className="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
                <label className="font-semibold leading-none text-gray-300">
                  Option four
                </label>
                <input
                  type="email"
                  className="leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded"
                />
              </div>
            </div>
            <div className="w-full flex flex-col mt-4">
              <label className="font-semibold leading-none text-gray-300">
                Answer
              </label>

              <select className="leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded">
                <option className="leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded">
                  one
                </option>
                <option className="leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded">
                  two{" "}
                </option>
                <option className="leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded">
                  three
                </option>
                <option className="leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded">
                  four
                </option>
              </select>
            </div>
            <div className="flex items-center justify-center w-full mt-8">
              <button className="font-semibold leading-none text-white py-4 px-10 bg-blue-700 rounded hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none">
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
