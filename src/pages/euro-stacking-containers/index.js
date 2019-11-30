import 'core-js/es6/map';
import 'core-js/es6/set';

import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import ProductDetailTemplateCat from '../../components/ProductDetailTemplateCat'
import Layout from '../../components/Layout'
import SEO from '../../components/SEO/SEO'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { cdn_url, cdn_loading_img } from '../../utils'
import '../../cat-page-style.scss'

export default class EuroStackingContainerPage extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    let cat_link = '/euro-stacking-containers/'
    let images = posts[0].node.frontmatter.images
    let the_image
    if (images && images.length > 0 ) {
      the_image = images[0].replace("http:","https:")
    }
    return (
      <Layout>
        <section className="section product-cate-page">
          <SEO 
            thisTitleTemplate="%s | Euro Stacking Containers"
            title='Plastic Euro Stacking Containers Manufacturer & Supplier'
            description = 'Wholesale Plastic Euro Stacking Containers, make your move as environmentally-friendly as possible, Wholesale Plastic Euro Stacking Containers, make your move as environmentally-friendly as possible'
            pathname = {`${cat_link}`}
            image = {the_image}
            position = '2'
            ratingValue = '4.7'
            reviewCount = '68'
            price = '9.79'
            lowPrice = '3.69'
            highPrice = '22.69'
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
            
            <div className="cat-desc-top-wrap">
              <div className="d-none d-sm-block cat-desc-top-img-wrap">
                <LazyLoadImage 
                  className="img-fluid w-100" 
                  effect="blur"
                  src={`${cdn_url}/static/euro-stacking-container-banner.jpg`}
                  // placeholderSrc={cdn_loading_img}
                  alt="euro stacking container" />
              </div>
              <div className="d-block d-sm-none cat-desc-top-img-wrap">
                <LazyLoadImage 
                  className="img-fluid w-100" 
                  effect="blur"
                  src={`${cdn_url}/static/euro-stacking-container-banner-phone.jpg`}
                  // placeholderSrc={cdn_loading_img}
                  alt="euro stacking container" />
              </div>
            </div>

            {posts
              .map(({ node: post }) => {
                return (
                  <div
                    className="cat-desc-element-wrap"
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
            
            <div className="cat-desc-section mb-2">
              <h4 className="">Euro Stacking Containers</h4>
              <div className="cat-desc-text">
                Suitable for storing auto-parts, stackable when both in use and empty, eco-friendly, reinforced design, reduces shipping and storage expenses.
              </div>
              <div className="cat-desc-text">
                Features & Benefites of the stacking boxes
                <ul>
                  <li>Stackable, Reinforced design and Reusable.				</li>
                  <li>Multiple Size and Colors, Lidded Containers, Effecient Packing.</li>
                  <li>100% New PP Material.</li>
                </ul>
              </div>
            </div>

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
