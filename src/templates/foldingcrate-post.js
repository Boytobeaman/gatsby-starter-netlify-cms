import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import { HTMLContent } from '../components/Content'
import ProductDetailTemplate from '../components/ProductDetailTemplate'
import SEO from '../components/SEO/SEO'
import { menu } from '../utils'

const FoldingcratePost = ({ data }) => {
  const { markdownRemark: post } = data
  let cat_link = menu.foldingCrates.url
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
        folded_height={post.frontmatter.folded_height}
        volumn={post.frontmatter.volumn}
        weight={post.frontmatter.weight}
        images={post.frontmatter.images}
        helmet={
          <SEO 
            titleTemplate="%s | Folding Crate"
            title={post.frontmatter.title}
            description = {post.frontmatter.description}
            image = {post.frontmatter.images[0]}
            pathname = {`${cat_link}${post.frontmatter.title.replace(/ +/g,"-")}/`}
          />
        }
        parentLevelLink = {cat_link}
        parentLevelLinkText = "Folding Crates"
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
      />
    </Layout>
  )
}

FoldingcratePost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
  imagea: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
}

export default FoldingcratePost

export const pageQuery = graphql`
  query FoldingcratePostByID($id: String!) {
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
        folded_height
        volumn
        weight
        images
      }
    }
  }
`
