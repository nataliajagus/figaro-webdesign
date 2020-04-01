import React from "react"
import { Link, graphql } from "gatsby"
import PortfolioItem from "../components/PortfolioItem"
import PageLayout from "../layouts/page"
import PageTitle from "../components/PageTitle"
import styled from "styled-components"

import SEO from "../components/seo"

const PortfolioRow = styled.section`
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;

  
`;

const Realizacje = ({ data }) => {
  const { allMdx: { nodes }} = data;
  return (
  <PageLayout>
      <SEO title="Realizacje stron internetowych" />
      <PageTitle title="Nasze realizacje">Zobacz nad jakimi stronami pracowaliśmy</PageTitle>
      <div className="container">
        <PortfolioRow className="row">
        {nodes.map(({frontmatter: {title, type, link, featuredImage}}) => (
        <PortfolioItem title={title} link={link} image={featuredImage.childImageSharp.fluid} type={type} />
        ))}
        </PortfolioRow>
      </div>  
  </PageLayout>
  )
} 


export const query = graphql`
  {
    allMdx {
      nodes {
        frontmatter {
          title
          type
          link
          featuredImage {
            childImageSharp {
              fluid(maxWidth: 550, maxHeight: 315) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
      }
    }
  }
  `


export default Realizacje;
