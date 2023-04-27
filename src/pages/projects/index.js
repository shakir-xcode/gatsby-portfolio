import React from 'react'
import Layout from '../../components/Layout'
import { Link, graphql } from 'gatsby';
import * as styles from '../../styles/projects.module.css';

function index({ data }) {

    const projects = data.projects.nodes;
    const contact = data.contact.siteMetadata.contact;

    return (
        <Layout>
            <div className={styles.projectContainer}>
                <h1>My Projects</h1>
                <div className={styles.projects} >
                    {projects.map(project => (
                        <Link to={'/projects/' + project.frontmatter.slug} key={project.key} >
                            <h3>{project.frontmatter.title}</h3>
                            <p>{project.frontmatter.stack}</p>
                        </Link>
                    ))}
                </div>
                <div>
                    <p>Like what you see? contact me  {contact} for a quote!
                    </p>
                </div>
            </div>
        </Layout>

    )
}

export default index;
export const query = graphql`
query projectsPage {
    projects: allMarkdownRemark(sort: {frontmatter: {title: ASC}}) {
        nodes {
          frontmatter {
                title
                stack
                slug
            }
            id
        }
    }

    contact: site {
        siteMetadata {
          contact
        }
      }
}
`
