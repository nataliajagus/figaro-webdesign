import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import styled from "styled-components"
import Hero from "../components/Hero"


const IndexPage = ({data}) => (
  <>
  <SEO title="Home" />
    <Hero />
  </>
)


export default IndexPage;
