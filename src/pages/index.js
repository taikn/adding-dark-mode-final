import React from 'react'
import BodyParagraph from '../components/BodyParagraph'
import PrimaryHeading from '../components/PrimaryHeading'
import SimpleLink from '../components/SimpleLink'
import Layout from '../components/Layout'

export default () => (
  <Layout>
    <PrimaryHeading>
      Hello and Welcome!
    </PrimaryHeading>
    <BodyParagraph>
      Here comes our long paragraph text. Fusce ultrices justo porttitor ipsum
      pellentesque, a sodales augue eleifend. Sed non eros quam. Nulla lectus odio,
      commodo in ultrices in, consectetur ut mauris. Nam mattis, augue sed fringilla
      pellentesque, nibh velit vehicula lectus, sit amet vehicula mi massa a ante.
      <br />
      <br />
      <SimpleLink to='/next-page/'>Next page</SimpleLink>
    </BodyParagraph>
  </Layout>
)