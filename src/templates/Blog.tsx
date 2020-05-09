import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

interface Props {
  data: {
    markdownRemark: {
      html: string;
      frontmatter: {
        title: string;
        date: string;
      };
    };
  };
}

const Template: React.FC<Props> = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark;

  return (
    <Layout>
      <SEO title={frontmatter.title} />
      <h1 className="mt-2 text-3xl text-gray-800">{frontmatter.title}</h1>
      <h2 className="mb-6">{frontmatter.date}</h2>
      <div className="markdown" dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  );
};

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`;

export default Template;
