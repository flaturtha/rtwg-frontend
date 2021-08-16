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
        <div className="container mx-auto">
            <h1>News &amp; Tips You Can Use</h1>
            {posts.map(
                ({ _id, title = '', slug = '', publishedAt = '', blurb = '', mainImage = '' }) =>
                slug && (
                    <li className="list-none mb-8" key={_id}>
                        <Link href="/blog/[slug]" as={`/blog/${slug.current}`}>
                            <a>{title}</a>
                        </Link>{' '}
                        ({new Date(publishedAt).toDateString()})
                        <p>{blurb}</p>
                        {mainImage && (
        <div>
          <img
            src={urlFor(mainImage)
              .width(50)
              .url()}
          />
        </div>
      )}
                    </li>
                )
            )}

        </div>
    )
}

Blog.getInitialProps = async () => ({
    posts: await client.fetch(groq`
        *[_type == "post"]
    `)
})

export default Blog