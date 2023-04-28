import React from 'react'
import * as style from "../styles/project-detail.module.css";
import GatsbyImage from 'gatsby-image'
import Layout from '../components/Layout';
import { graphql } from 'gatsby';

function ProjectDetail({ data }) {
  const { html } = data.markdownRemark;
  const { title, stack, featuredImg } = data.markdownRemark.frontmatter;

  return (
    <Layout>
      <div className={style.details}>
        <h1>{title}</h1>
        <h3>{stack}</h3>
        <div className={style.featureImage}>
          <GatsbyImage fluid={featuredImg.childImageSharp.fluid} />
        </div>
        <div className={style.html} dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </Layout>
  )
}

export default ProjectDetail

export const query = graphql`
query projectDetail($slug: String) {
    markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      html
      frontmatter {
        stack
        title
        featuredImg {
          childImageSharp {
            fluid{
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
` 