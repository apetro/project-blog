import React from "react";

import BlogSummaryCard from "@/components/BlogSummaryCard";

import { getBlogPostList } from "@/helpers/file-helpers";

import styles from "./homepage.module.css";

async function Home() {
  const blogPosts = await getBlogPostList();

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.mainHeading}>Latest Content:</h1>

      {/* TODO: Iterate over the data read from the file system! */}
      {blogPosts.map(blogPost => (
        <BlogSummaryCard
          slug={blogPost.slug}
          key={blogPost.slug}
          title={blogPost.title}
          abstract={blogPost.abstract}
          publishedOn={Date.parse(blogPost.publishedOn)}
        />
      ))}
    </div>
  );
}

export default Home;
