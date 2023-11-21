import React from "react";
import dynamic from 'next/dynamic';

import BlogHero from "@/components/BlogHero";

import { loadBlogPost } from "@/helpers/file-helpers";

import styles from "./postSlug.module.css";
import { MDXRemote } from "next-mdx-remote/rsc";
import CodeSnippet from "@/components/CodeSnippet";

const DivisionGroupsDemo = dynamic(() => import('@/components/DivisionGroupsDemo'));

async function BlogPost({ params }) {
  const blogPost = await loadBlogPost(params.postSlug);

  return (
    <article className={styles.wrapper}>
      <BlogHero
        title={blogPost.frontmatter.title}
        publishedOn={blogPost.frontmatter.publishedOn}
      />
      <div className={styles.page}>
        <MDXRemote source={blogPost.content} components={{pre: CodeSnippet, DivisionGroupsDemo}} />
      </div>
    </article>
  );
}

export default BlogPost;

export async function generateMetadata({ params }) {
  const blogPost = await loadBlogPost(params.postSlug);

  return {
    title: blogPost.frontmatter.title,
    description: blogPost.frontmatter.abstract,
  };
}
