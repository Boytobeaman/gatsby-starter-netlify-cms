import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import ProductDetailTemplateCat from '../../components/ProductDetailTemplateCat'
import Layout from '../../components/Layout'
import SEO from '../../components/SEO/SEO'
import '../../cat-page-style.scss'

export default class MovingcratePage extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    let cat_link = '/moving-bins/'
    let images = posts[0].node.frontmatter.images
    let the_image
    if (images && images.length > 0 ) {
      the_image = images[0].replace("http:","https:")
    }
    return (
      <Layout>
        <section className="section">
          <SEO 
            titleTemplate="%s | Moving boxes for sale"
            title='Plastic Moving Bins, cheap plastic bins for moving'
            description = 'Wholesale Plastic moving bins, cheap moving crates for sale, make your move as environmentally-friendly as possible'
            pathname = {`${cat_link}`}
            image = {the_image}
            position = '2'
            ratingValue = '4.5'
            reviewCount = '78'
            price = '8.29'
            lowPrice = '5.69'
            highPrice = '21.69'
          />
          <div className="container-fluid">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb bg-white my-2">
                <li className="breadcrumb-item">
                  <Link to="/">
                    Home
                  </Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">Moving Bins</li>
              </ol>
            </nav>
            
            {posts
              .map(({ node: post }) => {
                return (
                  <div
                    className="clearfix mb-3"
                    key={post.id}
                  >
                    <div className="col-xs-12">
                      <Link className="cat-product-link" to={post.fields.slug}>
                        <ProductDetailTemplateCat 
                          data={post.frontmatter}
                        />
                      </Link>
                    </div>
                  </div>
                )
              })}

            <div className="cat-desc-section">
              <h4 className="">Plastic Moving Crates Description</h4>
              <div className="cat-desc-text">
                We manufacture and supplier moving crates for many companies
                Our plastic moving boxes help save money while saving the environment! Our attached lid containers are clean, green, and durable.
                many moving companies use this box as moving box,for example
              </div>
              <ul>
                <li> 
                  <a href="https://rentacrate.com/" target="_blank" rel="noopener noreferrer nofollow">Rentacrate</a>,
                  PRO Moving Service,
                  <a href="https://biggreentotes.com/" target="_blank" rel="noopener noreferrer nofollow">Big Green Totes</a>,
                  <a href="https://bluecrates.com/" target="_blank" rel="noopener noreferrer nofollow">BLUE CRATE LLC</a>,
                  First Responders Moving 
                  from USA </li>
                <li>Moveage Group,Boxes 2 You,
                  <a href="https://www.chessmoving.com.au/" target="_blank" rel="noopener noreferrer nofollow">Chess Moving Perth</a> 
                  from Australia
                </li>
                <li>Aaltonen International Removals & Storage from Ireland </li>
                <li>
                  <a href="https://www.boxitstorage.com/" target="_blank" rel="noopener noreferrer nofollow">BOXIT Co. </a> 
                   from Kuwait 
                </li>
              </ul>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

MovingcratePage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const MovingcratePageQuery = graphql`
  query MovingcrateIndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "movingcrate-post" } }}
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
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
          }
        }
      }
    }
  }
`
