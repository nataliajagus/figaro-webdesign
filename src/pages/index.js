import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import styled from "styled-components"
import Hero from "../components/Hero"
import MobileSection from "../components/MobileSection";
import SecuritySection from "../components/SecuritySection";
import OfferSection from "../components/OfferSection";
import IndexLayout from "../layouts/index";


const IndexPage = ({data}) => (
  <IndexLayout>
  <SEO title="Home" />
    <Hero />
    <OfferSection />
    <MobileSection />
    <SecuritySection />
  </IndexLayout>
)


export default IndexPage;
