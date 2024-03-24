import { useState } from "react";

const CreateUser = () => {
  const [formData, setFormData] = useState({
    username: "",
    emailAddress: "",
    password: "",
    passwordConfirmation: "",
  });

  const [formErrors, setFormErrors] = useState({
    username: "",
    emailAddress: "",
    password: "",
    passwordConfirmation: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    let valid = true;
    const errors = {};

    // Username validation
    if (!formData.username) {
      valid = false;
      errors.username = "Username is required";
    }

    // Email validation
    if (!formData.emailAddress) {
      valid = false;
      errors.emailAddress = "Email Address is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.emailAddress)) {
      valid = false;
      errors.emailAddress = "Invalid email address";
    }

    // Password validation
    if (!formData.password) {
      valid = false;
      errors.password = "Password is required";
    } else if (formData.password.length < 8) {
      valid = false;
      errors.password = "Password must be at least 8 characters long";
    }

    // Password confirmation validation
    if (!formData.passwordConfirmation) {
      valid = false;
      errors.passwordConfirmation = "Password Confirmation is required";
    } else if (formData.password !== formData.passwordConfirmation) {
      valid = false;
      errors.passwordConfirmation = "Passwords do not match";
    }

    setFormErrors(errors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form Data:", formData);
      // You can perform additional actions here, such as sending the form data to an API
    } else {
      console.log("Form validation failed");
    }
  };

  return (
    <>
      <section className="max-w-4xl mt-20 p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
        <h2 className="text-5xl text-center font-semibold text-gray-700 capitalize dark:text-white">
          Create A User Login
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-6 mt-8 sm:grid-cols-2">
            <div>
              <label
                htmlFor="username"
                className="text-gray-700 dark:text-gray-200"
              >
                Username
              </label>
              <input
                id="username"
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className={`block w-full px-4 py-2 mt-2 text-gray-700 bg-white border ${
                  formErrors.username ? "border-red-500" : "border-gray-200"
                } rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring`}
              />
              {formErrors.username && (
                <p className="text-red-500">{formErrors.username}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="emailAddress"
                className="text-gray-700 dark:text-gray-200"
              >
                Email Address
              </label>
              <input
                id="emailAddress"
                type="email"
                name="emailAddress"
                value={formData.emailAddress}
                onChange={handleChange}
                className={`block w-full px-4 py-2 mt-2 text-gray-700 bg-white border ${
                  formErrors.emailAddress ? "border-red-500" : "border-gray-200"
                } rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring`}
              />
              {formErrors.emailAddress && (
                <p className="text-red-500">{formErrors.emailAddress}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="password"
                className="text-gray-700 dark:text-gray-200"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={`block w-full px-4 py-2 mt-2 text-gray-700 bg-white border ${
                  formErrors.password ? "border-red-500" : "border-gray-200"
                } rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring`}
              />
              {formErrors.password && (
                <p className="text-red-500">{formErrors.password}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="passwordConfirmation"
                className="text-gray-700 dark:text-gray-200"
              >
                Password Confirmation
              </label>
              <input
                id="passwordConfirmation"
                type="password"
                name="passwordConfirmation"
                value={formData.passwordConfirmation}
                onChange={handleChange}
                className={`block w-full px-4 py-2 mt-2 text-gray-700 bg-white border ${
                  formErrors.passwordConfirmation
                    ? "border-red-500"
                    : "border-gray-200"
                } rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring`}
              />
              {formErrors.passwordConfirmation && (
                <p className="text-red-500">
                  {formErrors.passwordConfirmation}
                </p>
              )}
            </div>
          </div>

          <div className="flex justify-end mt-8">
            <button
              type="submit"
              className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
            >
              Create User
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default CreateUser;
