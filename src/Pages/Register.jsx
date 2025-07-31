import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const { createUser, signInGoogle } = useContext(AuthContext);
  const navigate = useNavigate()

  const handleRegister = (e) => {
    e.preventDefault();
    // Handle registration form data here
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log('Registering:', name, email, password);


    // user creating
    createUser(email, password)
      .then((result) => {
        console.log('User created:', result.user);
        navigate('/login'); // Redirect to login after successful registration
        e.target.reset(); // Reset the form
      })
      .catch((error) => {
        console.error('Error when creating user:', error);
      });
  };

  const handleGoogleSignIn = () => {
    signInGoogle()
      .then((result) => {
        console.log('Google sign-in successful:', result.user);
        navigate('/'); // Redirect to home after successful sign-in
      })
      .catch((error) => {
        console.error('Error during Google sign-in:', error);
      });
  }

  return (
    <div className=" mt-10 flex items-center justify-center px-4">
      <div className="max-w-5xl w-full mx-auto">
        <div className="md:pe-8 md:w-1/2 xl:pe-0 xl:w-5/12 mx-auto">
          {/* Title */}
          <h1 className="text-3xl text-gray-800 font-bold md:text-4xl md:leading-tight lg:text-5xl lg:leading-tight text-center">
            Register Now
          </h1>

          {/* Form */}
          <form className="mt-8" onSubmit={handleRegister}>
            <div className="mb-4">
              <label
                htmlFor="hs-hero-name-2"
                className="block text-sm font-medium"
              >
                <span className="sr-only">Full name</span>
              </label>
              <input
                type="text"
                name="name"
                id="hs-hero-name-2"
                className="py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none border"
                placeholder="Full name"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="hs-hero-email-2"
                className="block text-sm font-medium"
              >
                <span className="sr-only">Email address</span>
              </label>
              <input
                type="email"
                name="email"
                id="hs-hero-email-2"
                className="py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none border"
                placeholder="Email address"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="hs-hero-password-2"
                className="block text-sm font-medium"
              >
                <span className="sr-only">Password</span>
              </label>
              <input
                type="password"
                name="password"
                id="hs-hero-password-2"
                className="py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none border"
                placeholder="Password"
              />
            </div>

            <div className="grid">
              <button
                type="submit"
                className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
              >
                Register
              </button>
            </div>
          </form>
          {/* End Form */}

          <div className="py-6 flex items-center text-sm text-gray-400 uppercase before:flex-1 before:border-t before:border-gray-200 before:me-6 after:flex-1 after:border-t after:border-gray-200 after:ms-6">
            Or
          </div>

          <div className="grid">
            <button onClick={handleGoogleSignIn}
              type="button"
              className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
            >
              {/* Google Logo */}
              <svg
                className="w-4 h-auto"
                width="46"
                height="47"
                viewBox="0 0 46 47"
                fill="none"
              >
                <path
                  d="M46 24.0287C46 22.09 45.8533 20.68 45.5013 19.2112H23.4694V27.9356H36.4069C36.1429 30.1094 34.7347 33.37 31.5957 35.5731L31.5663 35.8669L38.5191 41.2719L38.9885 41.3306C43.4477 37.2181 46 31.1669 46 24.0287Z"
                  fill="#4285F4"
                />
                <path
                  d="M23.4694 47C29.8061 47 35.1161 44.9144 39.0179 41.3012L31.625 35.5437C29.6301 36.9244 26.9898 37.8937 23.4987 37.8937C17.2793 37.8937 12.0281 33.7812 10.1505 28.1412L9.88649 28.1706L2.61097 33.7812L2.52296 34.0456C6.36608 41.7125 14.287 47 23.4694 47Z"
                  fill="#34A853"
                />
                <path
                  d="M10.1212 28.1413C9.62245 26.6725 9.32908 25.1156 9.32908 23.5C9.32908 21.8844 9.62245 20.3275 10.0918 18.8588V18.5356L2.75765 12.8369L2.52296 12.9544C0.909439 16.1269 0 19.7106 0 23.5C0 27.2894 0.909439 30.8731 2.49362 34.0456L10.1212 28.1413Z"
                  fill="#FBBC05"
                />
                <path
                  d="M23.4694 9.07688C27.8699 9.07688 30.8622 10.9863 32.5344 12.5725L39.1645 6.11C35.0867 2.32063 29.8061 0 23.4694 0C14.287 0 6.36607 5.2875 2.49362 12.9544L10.0918 18.8588C11.9987 13.1894 17.25 9.07688 23.4694 9.07688Z"
                  fill="#EB4335"
                />
              </svg>
              Sign up with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
