import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'

const IndexPage = () => (
  <Layout>
    <h1>Day 6 : </h1>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image />
    </div>
    <Link 
    style={{
      color: 'salmon',
      textDecoration: 'none',
    }}
    to="/about/">Go to about page</Link>
  </Layout>
)

export default IndexPage
