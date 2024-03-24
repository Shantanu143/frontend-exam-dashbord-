
import { useState } from 'react';

const Signin = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  // Function to handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    // You can perform other actions here, such as sending data to the server
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <section className="flex flex-col max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-lg md:flex-row md:h-80">
        <div className="md:flex md:items-center md:justify-center md:w-1/2 md:bg-gray-700">
          <div className="px-6 py-6 md:px-8 md:py-0">
            <h2 className="text-lg font-bold text-gray-700 dark:text-white md:text-gray-100">
              Sign Up For <span className="text-blue-600 dark:text-blue-400 md:text-blue-300">Project</span> Updates
            </h2>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 md:text-gray-400">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur obcaecati odio
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center pb-6 md:py-0 md:w-1/2">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col p-1.5 my-3 overflow-hidden border rounded-lg lg:flex-row focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300">
              <input
                className="px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent"
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Enter your Username"
                aria-label="Enter your Username"
              />
            </div>
            <div className="flex flex-col p-1.5 my-3 overflow-hidden border rounded-lg lg:flex-row focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300">
              <input
                className="px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent"
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                aria-label="Enter your email"
              />
            </div>
            <div className="flex flex-col p-1.5 my-3 overflow-hidden border rounded-lg lg:flex-row focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300">
              <input
                className="px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                aria-label="Enter your password"
              />
            </div>
            <button
              type="submit"
              className="px-5 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none"
            >
              Sign In
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Signin;
