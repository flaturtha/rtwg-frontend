export default function Home() {
  return (
  <>  
    <header className="mx-auto flex justify-between items-center bg-gray-700 text-indigo-100">
      <div className="container mx-auto flex justify-between items-center">
        <div className="py-8">
          <h1 className="text-4xl font-black">R&middot;T&middot;W&middot;G</h1>
        </div>
        <nav className="flex justify-around space-x-16">
          {/* <a>Home</a> */}
          <a className="font-semibold hover:text-indigo-300 transition-colors duration-300">R.O.P.E.™ Method</a>
          <a className="font-semibold hover:text-indigo-300 transition-colors duration-300">How I Work</a>
          <a className="font-semibold hover:text-indigo-300 transition-colors duration-300">Blog</a>
          <a className="font-semibold hover:text-indigo-300 transition-colors duration-300">About</a>
        </nav>
        <nav className="text-center py-4 px-4 bg-indigo-100 hover:bg-indigo-300 transition-colors duration-300 text-gray-700 rounded-md block">
          <a className="uppercase font-semibold">Book Roadmap Session</a>
        </nav>
      </div>
    </header>
    {/* <hr className="container mx-auto border-2 border-indigo-100" /> */}


    <div className="mx-auto flex justify-between items-center bg-gray-700 text-indigo-100 min-h-screen text-center">HERO</div>

    <div className="container mx-auto text-gray-700 py-20">
      <h2 className="text-3xl text-center font-bold text-indigo-600 pb-8">R.O.P.E.™ Tiers</h2>
      <ul>
        <li className="py-12">Platinum</li>
        <li className="py-12">Gold</li>
        <li className="py-12">Silver</li>
        <li className="py-12">Bronze</li>
      </ul>
    </div>

    <div className="container mx-auto text-gray-700 py-20">
      <h2 className="text-3xl text-center font-bold capitalize text-indigo-600 pb-8">à la carte</h2>
      <ul className="list-disc">
        <li>company roadmap questionnaire &amp; interview: $500 [required; 1x only]</li>
        <li>case study: $3,750+</li>
        <li>white papers: $7,500+</li>
        <li>articles (1,500 &ndash; 2,000 words: $3,000+</li>
        <li>blog posts (500 &ndash; 750 words: $1,250+</li>
        <li>video scripts: $2,000+</li>
        <li>small business books: $8,750+</li>
      </ul>
    </div>

    <div className="mx-auto py-20 bg-indigo-200 text-indigo-600">
        <h2 className="text-3xl text-center font-bold capitalize text-indigo-600 pb-8">Client List</h2>
        <ul className="flex justify-between">
          <li className="uppercase font-bold text-center mx-4">M-I SWACO</li>
          <li className="uppercase font-bold text-center mx-4">Schlumberger</li>
          <li className="uppercase font-bold text-center mx-4">Smith Tools</li>
          <li className="uppercase font-bold text-center mx-4">BP, Texas City Plant</li>
          <li className="uppercase font-bold text-center mx-4">Kroger</li>
          <li className="uppercase font-bold text-center mx-4">National Association of State Auditors, Comptrollers, &amp; Treasurers</li>
          <li className="uppercase font-bold text-center mx-4">Kentucky OSHA Journal</li>
          <li className="uppercase font-bold text-center mx-4">ForeFlight</li>
          <li className="uppercase font-bold text-center mx-4">International Bird Dog Association</li>
          <li className="uppercase font-bold text-center mx-4">National Tour Association</li>
        </ul>
    </div>

    <div className="border-t-2 border-inidgo-300 border-b-2 border-inidgo-300 py-20">
        <h2 className="text-3xl text-center font-bold capitalize text-indigo-600 pb-8">Testimonials</h2>

    </div>

  </>
  )
};