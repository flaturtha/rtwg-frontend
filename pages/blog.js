import Link from 'next/link'
import groq from 'groq'
import client from '../client'

const Blog = (props) => {
    const { posts = [] } = props
    console.log(posts);
    return (
        <div>
            <h1>Welcome to the Blog!</h1>
            {posts.map(
                ({ _id, title = '', slug = '', publishedAt = '' }) =>
                slug && (
                    <li key={_id}>
                        <Link href="/blog/[slug]" as={`/blog/${slug.current}`}>
                            <a>{title}</a>
                        </Link>{' '}
                        ({new Date(publishedAt).toDateString()})
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