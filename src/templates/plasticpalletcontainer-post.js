import 'core-js/es6/map';
import 'core-js/es6/set';

import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import { HTMLContent } from '../components/Content'
import ProductDetailTemplate from '../components/ProductDetailTemplate'
import SEO from '../components/SEO/SEO'
import { menu } from '../utils'

const PlasticPalletContainerPost = ({ data }) => {
  const { markdownRemark: post } = data
  let cat_link = menu.plasticPalletBoxes.url

  return (
    <Layout>
      <ProductDetailTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        model={post.frontmatter.model}
        external_long={post.frontmatter.external_long}
        external_width={post.frontmatter.external_width}
        external_height={post.frontmatter.external_height}
        internal_long={post.frontmatter.internal_long}
        internal_width={post.frontmatter.internal_width}
        internal_height={post.frontmatter.internal_height}
        volumn={post.frontmatter.volumn}
        weight={post.frontmatter.weight}
        images={post.frontmatter.images}
        static_load={post.frontmatter.static_load}
        dynamic_load={post.frontmatter.dynamic_load}
        helmet={
          <SEO 
            titleTemplate="%s | Plastic Pallet Containers"
            title={post.frontmatter.title}
            description = {post.frontmatter.description}
            image = {post.frontmatter.images[0]}
            pathname = {`${cat_link}${post.frontmatter.title.replace(/ +/g,"-")}/`}
          />
        }
        parentLevelLink = {cat_link}
        parentLevelLinkText="Plastic Pallet Containers"
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
      />
    </Layout>
  )
}

PlasticPalletContainerPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
  imagea: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
}

export default PlasticPalletContainerPost

export const pageQuery = graphql`
  query PlasticPalletContainerPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        tags
        title
        description
        model
        external_long
        external_width
        external_height
        internal_long
        internal_width
        internal_height
        volumn
        weight
        images
        static_load
        dynamic_load
      }
    }
  }
`
