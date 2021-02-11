import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import PostLink from '../components/PostLink';

interface PostFrontmatter {
  date: string;
  path: string;
  title: string;
  description: string;
  duration: string;
  locale: string;
}

interface Node {
  node: {
    id: string;
    frontmatter: PostFrontmatter;
  };
}

interface PostsQuery {
  allMarkdownRemark: {
    edges: Node[];
  };
}

const IndexPage: React.FC<{}> = () => {
  const {
    allMarkdownRemark: { edges },
  }: PostsQuery = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
        edges {
          node {
            id
            frontmatter {
              date(formatString: "MMMM DD, YYYY", locale: "pt-BR")
              path
              title
              locale
              description
              duration
            }
          }
        }
      }
    }
  `);

  const Posts = edges
    .filter(post => post.node.frontmatter.locale === 'pt-BR')
    .map(({ node: { id, frontmatter } }) => (
      <article key={id} className="mt-2 mb-4">
        <PostLink {...frontmatter} />
      </article>
    ));

  return (
    <Layout>
      <SEO title="Home" />
      {Posts}
    </Layout>
  );
};

export default IndexPage;
