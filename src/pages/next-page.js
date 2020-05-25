import React from 'react'
import BodyParagraph from '../components/BodyParagraph'
import PrimaryHeading from '../components/PrimaryHeading'
import SimpleLink from '../components/SimpleLink'
import Layout from '../components/Layout'

export default () => (
  <Layout>
    <PrimaryHeading>
      This is the next page
    </PrimaryHeading>
    <BodyParagraph>
      Another paragraph text. Donec ut dolor non mauris viverra consectetur.
      Vivamus et nunc orci. Sed quis odio aliquet, consequat massa sit amet,
      posuere orci. Duis efficitur quam quis eleifend iaculis.
    </BodyParagraph>
    <BodyParagraph>
      Integer tempus consequat nisi, quis sodales lectus dapibus eget. Morbi nec
      ex id eros ullamcorper faucibus rhoncus eu sapien.
      <br />
      <br />
      <SimpleLink to='/'>Home</SimpleLink>
    </BodyParagraph>
  </Layout>
)