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
import Movingbin from '../../components/productDesc/Movingbin'
import AllProductCommonDesc from '../../components/productDesc/AllProductCommonDesc'

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
        <section className="section product-cate-page">
          <SEO 
            thisTitleTemplate="%s | Moving boxes for sale"
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
            
            <div className="cat-desc-top-wrap">
              <div className="d-none d-sm-block cat-desc-top-img-wrap">
                <LazyLoadImage 
                  className="img-fluid w-100" 
                  src={`${cdn_url}/static/moving-bins-banner.jpg`}
                  // placeholderSrc={cdn_loading_img}
                  effect="blur"
                  alt="plastic moving bins" />
              </div>
              <div className="d-block d-sm-none cat-desc-top-img-wrap">
                <LazyLoadImage 
                  className="img-fluid w-100" 
                  src={`${cdn_url}/static/moving-bins-banner-phone.jpg`}
                  // placeholderSrc={cdn_loading_img}
                  effect="blur"
                  alt="plastic moving bins" />
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
            <div className="cat-desc-section">
              <Movingbin />
              <AllProductCommonDesc />
            </div>
            <div className="cat-desc-section mb-2">
              <h4 className="">Moving bins</h4>
              <div className="cat-desc-text">
                These moving boxes, can be stacked without fear of falling because of the lid edge stabilizer. Saves you space, eco-friendly and suitable for any conditions.
              </div>
              <div className="cat-desc-text">
                Features & Benefites of the moving crates
                <ul>
                  <li>Stackable, Nestable and Lidded Containers.</li>
                  <li>Anti-theft hole, Multiple Colors and Sizes, Anti-slip reinforced design</li>
                  <li>100% New PP Material.</li>
                </ul>
              </div>
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
