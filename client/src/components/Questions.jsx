<<<<<<< HEAD
import { useState } from "react";

const Questions = (data) => {
=======

import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Questions = () => {
  const navigate = useNavigate(); // Hook for navigation
  const location = useLocation(); // Hook for accessing location state
  const examData = location.state; // Extracting exam data from location state

  // State variables for form data and questions
>>>>>>> 7edb789057056f8318a1239b31f6d3adcf2416bb
  const [formData, setFormData] = useState({
    question: "",
    optionOne: "",
    optionTwo: "",
    optionThree: "",
    optionFour: "",
    answer: "one", // default answer
  });
<<<<<<< HEAD

  const { totalQuestions, name, number } = data.data;
  const [currentQuestion, setCurrentQuestion] = useState(1); // Counter for the current question being entered
  const Questions = [];
  const [question, setQuestion] = useState([]);
=======
  const [questionsData, setQuestionsData] = useState([]); // Array to store all questions
  const [currentQuestion, setCurrentQuestion] = useState(0); // Counter for the current question being entered
>>>>>>> 7edb789057056f8318a1239b31f6d3adcf2416bb

  // Function to handle changes in form inputs
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

<<<<<<< HEAD
  // const addQuestions = async () => {
  //   if (currentQuestion < totalQuestions) {
  //     setCurrentQuestion(currentQuestion + 1);
  //   }
  //   // console.log(formData);
  //   Questions.push(formData);

  //   setFormData({
  //     question: "",
  //     optionOne: "",
  //     optionTwo: "",
  //     optionThree: "",
  //     optionFour: "",
  //     answer: "one",
  //   });
  //   // console.log("Through add question " + Questions );
  // };

  const addExamQuestion = (event) => {
    Questions.push(formData);

    setQuestion({
      ...question,
      formData,
    });

    console.log("Through add question " + question);

=======
  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Create a new question object
    const newQuestion = { id: currentQuestion, ...formData };
    // Add the new question to the questionsData array
    setQuestionsData((prevQuestionsData) => [
      ...prevQuestionsData,
      newQuestion,
    ]);
    // Clear form data after submission
>>>>>>> 7edb789057056f8318a1239b31f6d3adcf2416bb
    setFormData({
      question: "",
      optionOne: "",
      optionTwo: "",
      optionThree: "",
      optionFour: "",
      answer: "one",
    });
<<<<<<< HEAD

    if (currentQuestion < totalQuestions) {
      setCurrentQuestion(currentQuestion + 1);
=======
    // Increment the current question counter
    setCurrentQuestion((prevCurrentQuestion) => prevCurrentQuestion + 1);
    // If all questions are entered
    if (currentQuestion === examData.numberOfQuestions - 1) {
      // Log all question data
      console.log("All Questions:", questionsData);
      // Navigate to dashboard after submitting questions
      navigate("/dashboard");
>>>>>>> 7edb789057056f8318a1239b31f6d3adcf2416bb
    }
  };

  const createExam = (event) => {
    Questions.push(formData);
    console.log(Questions);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-5xl w-full px-6 sm:px-6 lg:px-8 mb-12">
        <div className="bg-gray-900 w-full shadow rounded p-8 sm:p-12">
          <p className="text-3xl font-bold leading-7 text-center text-white">
<<<<<<< HEAD
            Enter Questions ({currentQuestion}/{totalQuestions})
          </p>
          <form>
=======
            Enter Questions ({currentQuestion + 1}/{examData.numberOfQuestions})
          </p>
          <form onSubmit={handleSubmit}>
            {/* Question input */}
>>>>>>> 7edb789057056f8318a1239b31f6d3adcf2416bb
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
            {/* Options inputs */}
            {/* Option one and option two */}
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
            {/* Option three and option four */}
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
            {/* Answer selection */}
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
            {/* Submit button */}
            <div className="flex items-center justify-center w-full mt-8">
<<<<<<< HEAD
              {currentQuestion < totalQuestions ? (
                <button
                  type="button"
                  className="font-semibold leading-none text-white py-4 px-10 bg-blue-700 rounded hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700
                  focus:outline-none"
                  onClick={addExamQuestion}
=======
              {currentQuestion < examData.numberOfQuestions - 1 ? (
                <button
                  type="submit"
                  className="font-semibold leading-none text-white py-4 px-10 bg-blue-700 rounded hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none"
>>>>>>> 7edb789057056f8318a1239b31f6d3adcf2416bb
                >
                  Add Question
                </button>
              ) : (
                <button
<<<<<<< HEAD
                  type="button"
                  onClick={createExam}
                  className="font-semibold leading-none text-white py-4 px-10 bg-blue-700 rounded hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700
                  focus:outline-none"
=======
                  type="submit"
                  className="font-semibold leading-none text-white py-4 px-10 bg-blue-700 rounded hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none"
>>>>>>> 7edb789057056f8318a1239b31f6d3adcf2416bb
                >
                  Create Exam
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Questions;
