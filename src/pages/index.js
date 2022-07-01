import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>Welcome to my Gatsby Site</p>
      <StaticImage 
        src='../images/me.jpeg' 
        alt='A portrait of me dawg'>
      </StaticImage>
    </Layout>
  )
}

export default IndexPage
