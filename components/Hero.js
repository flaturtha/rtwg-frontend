import Swoopy from "../components/Swoopy";

export default function Hero() {
  return (
    <div className="relative">
      <img
        src="https://images.pexels.com/photos/685311/pexels-photo-685311.jpeg?cs=srgb&dl=pexels-frans-van-heerden-685311.jpg&fm=jpg"
        className="absolute inset-0 object-cover w-full h-full"
        alt=""
      />
      <div className="relative bg-opacity-75 bg-indigo-800">
        <Swoopy />
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="max-w-2xl sm:mx-auto lg:max-w-5xl">
            <div className="flex flex-col mb-16 sm:text-center sm:mb-0">
              <div className="mb-10 md:mx-auto sm:text-center md:mb-12">
                <h2 className="mb-6 font-sans uppercase text-3xl font-bold leading-none tracking-tight text-white sm:text-7xl md:mx-auto">
                  You need content &hellip;
                </h2>
                <h3 className="max-w-lg mb-6 md:mb-12 font-sans text-xl font-bold leading-relaxed md:leading-relaxed tracking-tight text-white sm:text-4xl md:mx-auto">
                  but content written specifically for{" "}
                  <span className="bg-white text-indigo-800 px-1">
                    CASE STUDIES
                  </span>
                  !
                </h3>
                <div className="md:flex md:justify-between text-left md:my-8">
                  <p className="text-base text-white pb-3 md:pb-0 md:pr-5 md:text-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="inline h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                      />
                    </svg>{" "}
                    But what if I told you that multiple versions of the same
                    content should'nt require multiple projects?
                  </p>
                  <p className="text-base text-white pb-3 md:pb-0 md:pr-5  md:text-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="inline h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </svg>{" "}
                    What if you could hire ONE writer for ONE project and get
                    ALL the content you need in one easy package?
                  </p>
                  <p className="text-base text-white pb-3 md:pb-0 md:pr-5  md:text-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="inline h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                      />
                    </svg>{" "}
                    For:{" "}
                    <em>
                      case studies, customer succcess stories, white papers,
                      trade publication articles, blog articles, email/print
                      newsletters, etc.
                    </em>
                    !
                  </p>
                </div>
              </div>
              <div className="flex justify-around flex-col md:flex-row md:mb-32">
                <a
                  href="/"
                  className="inline-flex items-center justify-center h-12 mb-6 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                >
                  Book Roadmap Session
                </a>
                <a
                  href="/"
                  className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-deep-purple-accent-400 transition duration-200 rounded shadow-md bg-white hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                >
                  Download R.O.P.E.™ Method Guide
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
