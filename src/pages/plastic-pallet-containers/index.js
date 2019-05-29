import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import ProductDetailTemplateCat from '../../components/ProductDetailTemplateCat'
import Layout from '../../components/Layout'
import SEO from '../../components/SEO/SEO'
import '../../cat-page-style.scss'

export default class PlasticPalletContainerPage extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    let cat_link = '/plastic-pallet-containers/'

    return (
      <Layout>
        <section className="section">
          <SEO 
            titleTemplate="%s | Plastic pallet boxes"
            title='Plastic bulk containers Manufacturer & Supplier'
            description = 'Wholesale Plastic moving bins, cheap moving crates for sale, make your move as environmentally-friendly as possible'
            pathname = {`${cat_link}`}
            position = '2'
          />
          <div className="container-fluid">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb bg-white my-2">
                <li className="breadcrumb-item">
                  <Link to="/">
                    Home
                  </Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">Plastic Pallet Boxes</li>
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
              <h4 className="">Plastic Pallet Boxes Description</h4>
              <div className="cat-desc-text">
                Joinplastic is an experienced plastic bulk containers supplier among those world famous plastic pallet box manufacturers.
                We offer you hot sale and cheap plastic pallet bin, folding plastic pallet box, pallet crate, plastic pallet containers at wholesale price.
                Our Plastic pallet containers are made from the most durable, dependable plastics, designed to withstand the shipping process for years to come.
                We offer both heavy duty and light duty pallet boxes.
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

PlasticPalletContainerPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const PlasticPalletContainerPageQuery = graphql`
  query PlasticPalletContainerIndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "plasticpalletcontainer-post" } }}
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
