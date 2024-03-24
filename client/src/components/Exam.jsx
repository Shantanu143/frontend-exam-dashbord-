import { useState, useEffect } from 'react';

const Exam = () => {
  const questionsData = [
    {
      id: 1,
      question: "What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Rome"],
      answer: "Paris",
    },
    {
      id: 2,
      question: "What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Rome"],
      answer: "Paris",
    },
    {
      id: 3,
      question: "What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Rome"],
      answer: "Paris",
    },
    {
      id: 4,
      question: "What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Rome"],
      answer: "Paris",
    },
    // Add more questions here...
  ];

  const [timeLeft, setTimeLeft] = useState(30 * 60); // 30 minutes in seconds
  const [answers, setAnswers] = useState({});
  const [unansweredQuestions, setUnansweredQuestions] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(prevTimeLeft => prevTimeLeft - 1);
    }, 1000);

    // Disable right-click
    document.addEventListener("contextmenu", disableRightClick);
    // Disable keyboard shortcuts
    document.addEventListener("keydown", disableKeyboardShortcuts);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("contextmenu", disableRightClick);
      document.removeEventListener("keydown", disableKeyboardShortcuts);
    };
  }, [timeLeft]);

  const disableRightClick = (e) => {
    e.preventDefault();
  };

  const disableKeyboardShortcuts = (e) => {
    e.preventDefault();
  };

  const handleSubmitExam = () => {
    // Calculate score based on answers
    let score = 0;
    const unanswered = [];

    questionsData.forEach(question => {
      if (answers[question.id] === question.answer) {
        score++;
      } else if (!answers[question.id]) {
        unanswered.push(question.id);
      }
    });

    // Highlight unanswered questions
    setUnansweredQuestions(unanswered);

    // Submit exam if all questions are answered
    if (unanswered.length === 0) {
      console.log('Exam submitted. Score:', score);
    } else {
      console.log('Please answer all questions before submitting.');
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const handleAnswerSelection = (questionId, selectedOption) => {
    setAnswers(prevAnswers => ({
      ...prevAnswers,
      [questionId]: selectedOption,
    }));
  };

  return (
    <div className="grid place-items-center">
      <h1 className="text-2xl font-bold mt-16">Exam Number: 1</h1>
      <h2 className="text-lg my-4">Time Left: {formatTime(timeLeft)}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
        {questionsData.map((question, index) => (
          <div key={question.id} className={`p-4 border rounded ${unansweredQuestions.includes(question.id) ? 'border-red-500' : 'border-gray-300'}`}>
            <p className="font-medium mb-2">{`${index + 1}. ${question.question}`}</p>
            <div className="flex flex-col space-y-2">
              {question.options.map((option, optionIndex) => (
                <label key={optionIndex}>
                  <input
                    type="radio"
                    name={`question${question.id}`}
                    value={option}
                    onChange={() => handleAnswerSelection(question.id, option)}
                    className="peer hidden"
                  />
                  <div className="hover:bg-gray-50 flex items-center justify-between px-4 py-2 border-2 rounded-lg cursor-pointer text-sm border-gray-200 group peer-checked:border-blue-500">
                    <h2 className="font-medium text-gray-700">{option}</h2>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-9 h-9 text-blue-600 invisible group-[.peer:checked+&]:visible"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="col-span-full">
        <button
          className="bg-blue-500 text-white my-8 px-4 py-2 rounded hover:bg-blue-600"
          onClick={handleSubmitExam}
        >
          Submit Exam
        </button>
      </div>
    </div>
  );
};

export default Exam;
