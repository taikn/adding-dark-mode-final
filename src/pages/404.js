import React from 'react'
import PrimaryHeading from '../components/PrimaryHeading'
import BodyParagraph from '../components/BodyParagraph'
import SimpleLink from '../components/SimpleLink'
import Layout from '../components/Layout'

export default () => (
  <Layout>
    <PrimaryHeading>
      Page not found
    </PrimaryHeading>
    <BodyParagraph>
      The page you are looking for doesn’t exist, or has been moved.
      <br />
      <br />
      <SimpleLink to='/'>To the homepage</SimpleLink>
    </BodyParagraph>
  </Layout>
)
