import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

interface Props {
  data: {
    markdownRemark: {
      html: string;
      frontmatter: {
        title: string;
        date: string;
        duration: string;
        translations?: { [key: string]: string }[];
      };
    };
  };
}

const formatLocale = (str: string) => str.replace('_', '-');

const Template: React.FC<Props> = ({ data }) => {
  const {
    frontmatter: { translations = [], date, duration, title },
    html,
  } = data.markdownRemark;

  return (
    <Layout>
      <SEO title={title} />
      <h1 className="mt-2 text-2xl lg:text-3xl text-gray-800">{title}</h1>
      <time className="mb-6">
        {date} - {duration} read
      </time>
      {translations && translations.length && (
        <div className="my-8">
          Article also available in{' '}
          {translations.map(translation => {
            const [locale] = Object.keys(translation);

            return (
              <Link
                key={locale}
                to={translation[locale]}
                className="font-bold text-pink-900 underline"
              >
                {formatLocale(locale)}
              </Link>
            );
          })}
        </div>
      )}
      <div className="markdown" dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  );
};

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY", locale: "pt-BR")
        path
        title
        duration
        translations {
          pt_BR
        }
      }
    }
  }
`;

export default Template;
