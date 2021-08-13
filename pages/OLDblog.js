// using the 2019 blog post ... use the index.js code to rebuild this page!


import client from "../client";
import groq from "groq";
import Posts from "../components/Posts"

export async function getStaticProps() {
  const query = groq`
  *[_type == 'post']{title, mainImage, publishedAt,
    'categories': categories[]->title,
    'authorName': author->name,
    'authorSlug': author->slug,
  }
  `;

  const data = await client.fetch(query);

  return {
    props: {
      posts: data,
    },
  };
}

export default function Blog(posts) {
  console.log(posts);
  return (
    <div className='bg-gray-300 container mx-auto'>
      <div className='max-w-screen-2xl mx-auto'>
        <h1 className='text-4xl font-black'>Blog</h1>
      </div>
      
      <div>
        LIST OF POSTS WITH TITLE, AUTHOR, CATEGORY GO HERE
      </div>



    </div>
  );
}
