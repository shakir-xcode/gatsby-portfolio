import React from 'react'
import * as style from "../styles/project-detail.module.css";
import GatsbyImage from 'gatsby-image'
import Layout from '../components/Layout';

function ProjectDetail() {
    return (
        <Layout>
            <div className={style.details}>
                <h1>title</h1>
                <h3>stack</h3>
                <div>
                    {/* <GatsbyImage fluid={}/> */}
                </div>
                {/* <div className={style.html} dangerouslySetInnerHTML={}/> */}
            </div>
        </Layout>
    )
}

export default ProjectDetail