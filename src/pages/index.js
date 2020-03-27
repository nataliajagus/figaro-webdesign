import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import styled from "styled-components"
import Hero from "../components/Hero"
import MobileSection from "../components/MobileSection";
import SecuritySection from "../components/SecuritySection";
import OfferSection from "../components/OfferSection";





const IndexPage = ({data}) => (
  <>
  <SEO title="Home" />
    <Hero />
    <OfferSection />
    <MobileSection />
    <SecuritySection />
  </>
)


export default IndexPage;
