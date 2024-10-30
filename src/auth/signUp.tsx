function SignUp() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 p-4">
      <div className="max-w-md w-full space-y-8 bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-3xl shadow-2xl p-10">
        <div>
          <h2 className="mt-6 text-center text-4xl font-extrabold text-white">
            Join Todo
          </h2>
          <p className="mt-2 text-center text-sm text-pink-200">
            Create your account to get started
          </p>
        </div>
        <form className="mt-8 space-y-6">
          <div className="space-y-4">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none relative block w-full px-5 py-3 border border-transparent bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg text-white placeholder-white rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                className="appearance-none relative block w-full px-5 py-3 border border-transparent bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg text-white placeholder-white rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-xl text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 transition duration-150 ease-in-out">
              Sign up
            </button>
          </div>
        </form>
        <div className="text-center">
          <p className="mt-2 text-sm text-pink-200">
            Already have an account?{" "}
            <a href="#" className="font-medium text-white hover:text-pink-100">
              Sign in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
