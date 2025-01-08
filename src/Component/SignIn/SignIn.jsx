  import { Link } from "react-router-dom";

  const SignIn = () => {
      return (
          <div>
              <section className="bg-white mt-24">
                  <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
                      <aside className="relative block h-16 lg:order-last lg:col-span-5 lg:h-[600px] xl:col-span-6">
                          <img
                              alt="Library Interior"
                              src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                              className="absolute inset-0 h-full w-full object-cover object-center transform hover:scale-105 transition-transform duration-300"
                          />
                      </aside>

                      <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
                          <div className="max-w-xl lg:max-w-3xl">
                              <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl mb-6">
                                  Sign In to Your Account
                              </h1>

                              <p className="text-gray-600 mb-8">
                                  Welcome back! Please enter your credentials to access your account.
                              </p>

                              <form action="#" className="grid grid-cols-6 gap-6">
                                  <div className="col-span-6">
                                      <label htmlFor="Email" className="block text-sm font-medium text-gray-700">Email</label>

                                      <input
                                          type="email"
                                          id="Email"
                                          name="email"
                                          className="mt-1 w-full border-gray-200 bg-white text-sm text-gray-700 shadow-sm hover:border-blue-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 h-12"
                                      />
                                  </div>

                                  <div className="col-span-6">
                                      <label htmlFor="Password" className="block text-sm font-medium text-gray-700">Password</label>

                                      <input
                                          type="password"
                                          id="Password"
                                          name="password"
                                          className="mt-1 w-full border-gray-200 bg-white text-sm text-gray-700 shadow-sm hover:border-blue-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 h-12"
                                      />
                                  </div>

                                  <div className="col-span-6">
                                      <label htmlFor="RememberMe" className="flex gap-4">
                                          <input
                                              type="checkbox"
                                              id="RememberMe"
                                              name="remember_me"
                                              className="size-5 border-gray-200 bg-white shadow-sm"
                                          />

                                          <span className="text-sm text-gray-600">
                                              Remember me
                                          </span>
                                      </label>
                                  </div>

                                  <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                                      <button
                                          className="inline-block bg-blue-600 px-8 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                      >
                                          Sign In
                                      </button>

                                      <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                                          Don't have an account?
                                          <Link to="/signUp" className="text-blue-600 hover:text-blue-700 underline ml-1">Sign up</Link>
                                      </p>
                                  </div>
                              </form>
                          </div>
                      </main>
                  </div>
              </section>
          </div>
      );
  };

  export default SignIn;