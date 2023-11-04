import Container from "../components/container";
import MoreStories from "../components/more-stories";
import HeroPost from "../components/hero-post";
import Intro from "../components/intro";
import Layout from "../components/layout";
import GearMalarkey from "../components/gear-malarkey";
import { getAllPosts } from "../lib/api";
import Head from "next/head";

export default function Index({ allPosts }) {
  // const heroPost = allPosts[0];
  // const morePosts = allPosts.slice(1);
  return (
    <>
      <Layout>
        <Head>
          <title>factorio-type-kit</title>
        </Head>
        <Container>
          <h1>Please use <a 
            target="_blank" 
            href="https://github.com/GlassBricks/typed-factorio">https://github.com/GlassBricks/typed-factorio
          </a> instead
        </h1>
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]);

  return {
    props: { allPosts },
  };
}

export const config = {
  // :| i want the JS _just_ for the animation!
  // unstable_runtimeJS: false
}
