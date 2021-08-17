export default function Feature() {
  return (
    <div className="max-w-6xl px-4 py-16 mx-auto md:px-24 lg:px-8 lg:py-20">
      <div className="md:float-right mr-12 mt-12">
        <img className="w-auto h-96 ml-8 mb-8" src="/dc3-flying.jpg" />
      </div>
      <div className="">
        <div className="mb-6">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-black uppercase rounded-full bg-yellow-400">
              R&middot;T&middot;W&middot;G&middot; Exlusive
            </p>
          </div>
          <h2 className="mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
            <strong>R</strong>esearch <strong>O</strong>nce,
            <span className="inline-block text-deep-purple-accent-400">
              <strong>P</strong>ublish <strong>E</strong>verywhere!
            </span>
          </h2>
          <div className="">
            <p className="text-base text-gray-700  mb-8 md:text-lg">
              <em>Content is no longer king.</em> It is a freely available
              commondity &hellip; just ask Alexa, Siri, or &hellip; !
            </p>
            <p className="text-base text-gray-700  mb-8 md:text-lg">
              Today, <strong className="text-indigo-600">CONTEXT</strong> is
              king. Where that information appears, in what format, in relation
              to your business ... <em>that</em> is what matters.
            </p>
            <p className="text-base text-gray-700  mb-8 md:text-lg">
              But most content, the stuff the average copywriter will sell you,
              is without context. Without meaning.{" "}
              <em>To you, or to your audience!</em>
            </p>
            <p className="text-base text-gray-900 md:text-lg">
              What if you could get the research phase completed once, with all
              of the data collected that would enable the creation of multiple
              types of content, each with its own context and use case?
            </p>
            <div className="grid gap-8 row-gap-5 my-8 md:row-gap-8 lg:grid-cols-4 sm:grid-cols-2">
              <div className="duration-300 transform bg-white border-l-4 border-deep-purple-accent-400 hover:-translate-y-2">
                <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
                  <h6 className="mb-2 font-semibold leading-5">
                    CUSTOMER SUCCESS STORIES
                  </h6>
                  <p className="text-sm text-gray-900">
                    Let your customer's brag on how your solution was their solution!
                  </p>
                </div>
              </div>
              <div className="duration-300 transform bg-white border-l-4 border-deep-purple-accent-400 hover:-translate-y-2">
                <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
                  <h6 className="mb-2 font-semibold leading-5">
                    TRADE PUBLICATION ARTICLES
                  </h6>
                  <p className="text-sm text-gray-900">
                    Establish your expertise and demonstrate it to your industry.
                  </p>
                </div>
              </div>
              <div className="duration-300 transform bg-white border-l-4 border-deep-purple-accent-400 hover:-translate-y-2">
                <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
                  <h6 className="mb-2 font-semibold leading-5">
                    BLOG/NEWSLETTER ARTICLES
                  </h6>
                  <p className="text-sm text-gray-900">
                    Go ahead and brag about your accomplishments!
                  </p>
                </div>
              </div>
              <div className="duration-300 transform bg-white border-l-4 border-deep-purple-accent-400 hover:-translate-y-2">
                <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
                  <h6 className="mb-2 font-semibold leading-5">
                    PRESS RELEASES
                  </h6>
                  <p className="text-sm text-gray-900">
                    Get consumer and trade press coverage of your latest innovation!
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-20">
              <p className="text-center text-5xl leading-relaxed text-gray-700 text-indigo-800">
                Introducing the<br /><strong>R.O.P.E.™ Method</strong>:<span className="block mt-8 text-7xl">
                <strong>R</strong><em>esearch</em> <strong>O</strong><em>nce,<br /></em>{" "}
                <strong>P</strong><em>ublish</em> <strong>E</strong><em>verywhere</em></span>
              </p>
            </div>
            
          </div>
        </div>
        <div className="text-center">
        <a
          href="/"
          className="inline-flex items-center justify-center w-full h-18 px-6 py-8 mt-12 font-semibold text-3xl tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
        >
          Learn more &raquo;
        </a>
      </div>
      </div>
      <hr className="mt-24 text-indigo-300 border-3 border-indigo-300" />
    </div>
  );
}
