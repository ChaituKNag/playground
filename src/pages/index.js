import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Contact form</h1>
    <form>
      <div>
        <input type="text" name="name" />
      </div>
      <div>
        <input type="email" name="email" />
      </div>
      <div>
        <textarea name="message"></textarea>
      </div>
    </form>
  </Layout>
)

export default IndexPage
