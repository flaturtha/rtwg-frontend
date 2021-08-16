import Link from "next/link";
import groq from "groq";
import imageUrlBuilder from "@sanity/image-url";
import client from "../client";

function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}

const Posts = (props) => {
  const { posts = [] } = props;

  return (
    <h1>hi</h1>
  )
}



export default Posts