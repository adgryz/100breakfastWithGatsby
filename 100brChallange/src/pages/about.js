import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const SecondPage = () => (
  <Layout>
    <h1>About</h1>
    <p>I like cooking breakfast - especially eggs</p>
    <p>And I wanted to create some gatsby project ofc ! :)</p>
    <Link 
       style={{
        color: 'salmon',
        textDecoration: 'none',
      }}
    to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
