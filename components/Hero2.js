import Jagged from "../components/Jagged";

export default function Hero() {
  return (
    <div className="relative">
      <img
        src="https://cdn.pixabay.com/photo/2019/03/14/22/12/blueprint-4056027_960_720.jpg"
        className="absolute inset-0 object-cover w-full h-full"
        alt=""
      />
      <div className="relative bg-opacity-75 bg-indigo-800">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pt-20 lg:pb-0">
          <div className="max-w-2xl sm:mx-auto lg:max-w-5xl">
            <div className="flex flex-col mb-16 sm:text-center sm:mb-0">
              <div className="mb-10 md:mx-auto sm:text-center md:mb-12">
                <h2 className="mb-6 font-sans uppercase text-3xl font-bold leading-none tracking-tight text-white sm:text-7xl md:mx-auto">
                  Site Under Construction &hellip;
                </h2>
                <h3 className="max-w-lg mb-6 md:mb-12 font-sans text-base font-bold leading-relaxed md:leading-relaxed tracking-tight text-white sm:text-base md:mx-auto">
                  Please be patient and you will be rewarded with lots of great
                  content that will guide you through understanding and creating
                  your own comprehensive content marketing blueprint.
                </h3>
              </div>
              <div className="text-white md:mb-32">
                <h2 className="text-2xl font-semibold text-center mt-8">
                  Have an immediate need?
                </h2>
                <p className="max-w-prose mx-auto text-center">
                  Email me at{" "}
                  <a
                    href="mailto:rich@richthewriterguy.com"
                    className="underline"
                  >
                    rich@richthewriterguy.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
