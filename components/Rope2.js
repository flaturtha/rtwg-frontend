export default function Feature() {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex flex-col mb-6 lg:flex-row md:mb-10">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
        <div className="flex flex-col justify-center">
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
            <div className="prose">
          <p className="text-base text-gray-700 md:text-lg">
            <em>Content is no longer king.</em> It is a freely available commondity &hellip; just ask Alexa, Siri, or &hellip; !
          </p>
          <p className="text-base text-gray-700 md:text-lg">
            Today, <strong className="text-indigo-600">CONTEXT</strong> is king. Where that information appears, in what format, in relation to your business ... <em>that</em> is what matters.
          </p>
          <p className="text-base text-gray-700 md:text-lg">
            But most content, the stuff the average copywriter will sell you, is without context. Without meaning. <em>To you, or to your audience!</em>
          </p>
          <p className="text-base text-gray-900 md:text-lg">
            What if you could get the research phase completed once, with all of the data collected that would enable the creation of multiple types of content, each with its own context and use case?
          </p>
          <ul>
            <li>Customer Success Stories</li>
            <li>Trade Publication Articles</li>
            <li>Blog or Customer Newsletter Articles</li>
            <li>Press Releases</li>
            <li>SEO Magnets</li>
          </ul>
          <p className="text-base text-gray-700 md:text-lg">
            Introducing the <strong>R.O.P.E.™ Method</strong>: <strong>R</strong>ESEARCH <strong>O</strong>NCE, <strong>P</strong>UBLISH <strong>E</strong>VERYWHERE:
          </p>
        </div>
          </div>
          <a
            href="/"
            aria-label=""
            className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
          >
            Learn more
            <svg
              className="inline-block float-right w-3 ml-2"
              fill="currentColor"
              viewBox="0 0 12 12"
            >
              <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
            </svg>
          </a>
        </div>
        <div className="relative">
          <svg
            className="absolute w-full text-teal-accent-400"
            fill="currentColor"
            viewBox="0 0 600 392"
          >
            <rect x="0" y="211" width="75" height="181" rx="8" />
            <rect x="525" y="260" width="75" height="132" rx="8" />
            <rect x="105" y="83" width="75" height="309" rx="8" />
            <rect x="210" y="155" width="75" height="237" rx="8" />
            <rect x="420" y="129" width="75" height="263" rx="8" />
            <rect x="315" y="0" width="75" height="392" rx="8" />
          </svg>
          <svg
            className="relative w-full text-deep-purple-accent-400"
            fill="currentColor"
            viewBox="0 0 600 392"
          >
            <rect x="0" y="311" width="75" height="81" rx="8" />
            <rect x="525" y="351" width="75" height="41" rx="8" />
            <rect x="105" y="176" width="75" height="216" rx="8" />
            <rect x="210" y="237" width="75" height="155" rx="8" />
            <rect x="420" y="205" width="75" height="187" rx="8" />
            <rect x="315" y="83" width="75" height="309" rx="8" />
          </svg>
        </div>
      </div>
    </div>
      </div>
    </div>
  );
};