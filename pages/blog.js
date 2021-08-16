import Link from 'next/link'
import groq from 'groq'
import imageUrlBuilder from '@sanity/image-url'
import client from '../client'

function urlFor (source) {
  return imageUrlBuilder(client).image(source)
}

const Blog = (props) => {
    const { posts = [] } = props
    return (
      <>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg order-last lg:order-first">
              <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-teal-accent-400">
                <svg className="text-teal-900 w-7 h-7" viewBox="0 0 24 24">
                  <polyline
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeMiterlimit="10"
                    points=" 8,5 8,1 16,1 16,5"
                    strokeLinejoin="round"
                  />
                  <polyline
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeMiterlimit="10"
                    points="9,15 1,15 1,5 23,5 23,15 15,15"
                    strokeLinejoin="round"
                  />
                  <polyline
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeMiterlimit="10"
                    points="22,18 22,23 2,23 2,18"
                    strokeLinejoin="round"
                  />
                  <rect
                    x="9"
                    y="13"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeMiterlimit="10"
                    width="6"
                    height="4"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="max-w-xl mb-6">
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                  News
                  <br className="block" />
                  and{' '}
                  <span className="inline-block text-deep-purple-accent-400">
                    Tips You Can Use
                  </span>
                </h2>
                <p className="text-base text-gray-700 md:text-lg">
                  Need to do it in house? Or just want to learn more? Check out the articles, below, on topics such as <em>how to write better case studies, the Socratic Method for research, tips for structuring articles &amp; blog posts</em>, and much more!
                </p>
              </div>
              <div>
                <a
                  href="#bloglist"
                  aria-label=""
                  className="inline-flex items-center text-xl font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                >
                  Read Blog
                  <svg
                    className="inline-block w-3 ml-2"
                    fill="currentColor"
                    viewBox="0 0 12 12"
                  >
                    <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="flex items-center justify-center -mx-4 lg:pl-8">
              <div className="flex flex-col items-end px-3">
                <img
                  className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
                  src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                  alt=""
                />
                <img
                  className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
                  src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                  alt=""
                />
              </div>
              <div className="px-3">
                <img
                  className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
                  src="https://images.pexels.com/photos/3182739/pexels-photo-3182739.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

        <div id="bloglist" className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
            {posts.map(
            ({
              _id,
              title = "",
              slug = "",
              _createdAt = "",
              blurb = "",
              mainImage = "",
              categories = "",
            }) =>
              slug && (
                <li className="list-none mb-8" key={_id}>
                  {mainImage && (
                    <div>
                      <img src={urlFor(mainImage).width(600).url()} />
                    </div>
                  )}
              <div className="p-5 border border-t-0">
                <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                <p className="text-gray-500 italics list-none text-sm">
              CATEGORY &rarr; XXXX
            </p>
                  <span className="text-gray-600 italic ">— {new Date(_createdAt).toDateString()}</span>
                </p>
                <Link href="/blog/[slug]" as={`/blog/${slug.current}`}>
                    <a className="font-semibold">{title}</a>
                  </Link>{" "}
                <p className="mt-4 mb-2 text-gray-700">
                  {blurb}
                </p>
                <Link href="/blog/[slug]" as={`/blog/${slug.current}`}>
                    <a>Read &hellip;</a>
                  </Link>{" "}  
                  </div>
                </li>
                
              )
          )}
              
            </div>
          </div>
    
    </>
    )
}

Blog.getInitialProps = async () => ({
    posts: await client.fetch(groq`
    *[_type == "post"]
    `)
})

export default Blog