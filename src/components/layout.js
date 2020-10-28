/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { graphql } from "gatsby"
import "./layout.css"

import { ContextProviderComponent } from "../../context"

const Layout = props => {
  return (
    <>
      <ContextProviderComponent>{props.children}</ContextProviderComponent>
    </>
  )
}

export default Layout
