import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const FoldingcratePostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
  category,
  source,
  model,
  external_long,
  external_width,
  external_height,
  internal_long,
  internal_width,
  internal_height,
  folded_height,
  volumn,
  weight,
  galleryImages
}) => {
  const PostContent = contentComponent || Content
  console.log(`galleryImages  ${galleryImages.fields}`)
  console.log(`galleryImages  ${galleryImages}`)
  return (
    <section className="section">
      {helmet || ''}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>
            <p>{description}</p>
            <p>category:{category}</p>
            <p>source {source}</p>
            <p>model {model}</p>
            <p>external_long {external_long}</p>
            <p>external_width {external_width}</p>
            <p>external_height {external_height}</p>
            <p>internal_long {internal_long}</p>
            <p>internal_width {internal_width}</p>
            <p>internal_height {internal_height}</p>
            <p>folded_height {folded_height}</p>
            <p>volumn {volumn}</p>
            <p>weight {weight}</p>
            <p>volumn {volumn}</p>
            <PostContent content={content} />
            {tags && tags.length ? (
              <div style={{ marginTop: `4rem` }}>
                <h4>Tags</h4>
                <ul className="taglist">
                  {tags.map(tag => (
                    <li key={tag + `tag`}>
                      <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
}

FoldingcratePostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
}

const FoldingcratePost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <FoldingcratePostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        category={post.frontmatter.category}
        source={post.frontmatter.source}
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
        galleryImages={post.frontmatter.galleryImages}
        helmet={
          <Helmet
            titleTemplate="%s | Foldingcrate"
          >
            <title>{`${post.frontmatter.title}`}</title>
            <meta name="description" content={`${post.frontmatter.description}`} />
          </Helmet>
        }
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
        category
        source
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
        galleryImages
      }
    }
  }
`
