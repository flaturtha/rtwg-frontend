export default function Feature() {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="903f4a9e-7ac3-441c-9613-04c15fcc0a14"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#903f4a9e-7ac3-441c-9613-04c15fcc0a14)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative">Client</span>
          </span>{' '}
          List
        </h2>
        <p className="hidden text-base text-gray-700 md:text-lg">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque rem aperiam, eaque ipsa quae.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-5 row-gap-6 mb-10 sm:grid-cols-3 lg:grid-cols-6">
        <div className="text-center">
          <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
            <img src="mi-swaco-combo.jpg" />
          </div>
          <h6 className="mb-2 font-semibold leading-5">M-I SWACO</h6>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
            <img src="schlumberger.svg" />
          </div>
          <h6 className="mb-2 font-semibold leading-5">Schlumberger</h6>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
            <img src="nasact.png" />
          </div>
          <h6 className="mb-2 font-semibold leading-5">NASACT</h6>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
            <img src="Momentum.jpg" />
          </div>
          <h6 className="mb-2 font-semibold leading-5">MOMENTUM Magazine</h6>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
            <img src="nta.svg" />
          </div>
          <h6 className="mb-2 font-semibold leading-5">National Tour Association</h6>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
            <img src="foreflight.png" />
          </div>
          <h6 className="mb-2 font-semibold leading-5">Foreflight</h6>
        </div>
      </div>
    </div>
  );
};