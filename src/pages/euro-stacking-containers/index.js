import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import ProductDetailTemplateCat from '../../components/ProductDetailTemplateCat'
import Layout from '../../components/Layout'
import SEO from '../../components/SEO/SEO'
import '../../cat-page-style.scss'

export default class EuroStackingContainerPage extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    let cat_link = '/euro-stacking-containers/'
    return (
      <Layout>
        <section className="section">
          <SEO 
            titleTemplate="%s | Euro Stacking Containers"
            title='Plastic Euro Stacking Containers Manufacturer & Supplier'
            description = 'Wholesale Plastic Euro Stacking Containers, make your move as environmentally-friendly as possible, Wholesale Plastic Euro Stacking Containers, make your move as environmentally-friendly as possible'
            pathname = {`${cat_link}`}
            position = '2'
            ratingValue = '4.7'
            reviewCount = '68'
            price = '9.79'
          />
          <div className="container-fluid">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb bg-white my-2">
                <li className="breadcrumb-item">
                  <Link to="/">
                    Home
                  </Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">Euro Stacking Containers</li>
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
              <h4 className="">EURO STACKING CONTAINERS description</h4>
              <div className="cat-desc-text">
                Available in a variety of dimensions, Plastic EURO stacking containers and boxes generally have a greater volume capacity due to their straight sides. 
                The reinforced corners of the Plastic Euro Stacking Containers make them an ideal choice for transporting heavy loads.
                Our Euro (European standard size) stacking boxes can be tailored to suit your requirements with lids, hinges, inner dividers, personalised print and locking clasps.
                Thanks to its food grade plastic construction, this high quality range of plastic containers is resistant to acids and oils.
                Euro Containers are uniform in dimensions meaning they are ideal for automated manufacturing systems or for product handling.
                We stock a great selection of Euro Containers, all our stacking heavy duty containers are strong and durable.
              </div>
              <div className="cat-desc-text">
                Features & Benefites of the EURO stacking container
                <ul>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

EuroStackingContainerPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const EuroStackingContainerPageQuery = graphql`
  query EuroStackingContainerIndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "eurostackingcontainer-post" } }}
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
