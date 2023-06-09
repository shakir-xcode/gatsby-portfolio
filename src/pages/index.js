import * as React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/home.module.css";
import { Link, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image"

export default function Home({ data }) {
  const { title, description } = data.info.siteMetadata;

  return (
    <Layout>
      <section className={styles.header}>
        <div style={{ marginTop: "5rem" }}>
          <h1 >
            This is
          </h1>
          <h2 >Home page</h2>
          <p>this is some text this is some text this is some text...</p>
          <Link to="/projects"><button className={styles.btn}>Projects</button></Link>
        </div>
        <GatsbyImage image={data.image.childImageSharp.gatsbyImageData} />
      </section>
      <p>{title} - {description}</p>
    </Layout>
  )
}

export const query = graphql`
query queryInfo {
  info:site {
    siteMetadata {
      title
      description
    }
  }

  image:file(relativePath: {eq: "banner.png"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
}
`


