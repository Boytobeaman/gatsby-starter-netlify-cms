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

export default class PlasticPalletContainerPage extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    let cat_link = '/plastic-pallet-containers/'
    let images = posts[0].node.frontmatter.images
    let the_image
    if (images && images.length > 0 ) {
      the_image = images[0].replace("http:","https:")
    }
    return (
      <Layout>
        <section className="section product-cate-page">
          <SEO 
            thisTitleTemplate="%s | Plastic pallet boxes"
            title='Plastic bulk containers Manufacturer & Supplier'
            description = {`
              Wholesale Plastic pallet containers, bulk container for sale, 
              heavy duty pallet boxes for fruit and vegetable,
              bulk containers are available in light-duty, medium-duty and designs to meet a wide range of application requirements.
              `}
            pathname = {`${cat_link}`}
            image = {the_image}
            position = '2'
            ratingValue = '4.8'
            reviewCount = '69'
            price = '90.69'
            lowPrice = '83.69'
            highPrice = '142.69'
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
            <div className="cat-desc-top-wrap">
              <div className="d-none d-sm-block">
                <LazyLoadImage 
                  className="img-fluid w-100" 
                  src={`${cdn_url}/static/plastic-pallet-container-banner.jpg`}
                  placeholderSrc={cdn_loading_img}
                  alt="Plastic Pallet Container" />
              </div>
              <div className="d-block d-sm-none">
                <LazyLoadImage 
                  className="img-fluid w-100" 
                  src={`${cdn_url}/static/plastic-pallet-container-banner-phone.jpg`}
                  placeholderSrc={cdn_loading_img}
                  alt="Plastic Pallet Container" />
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
              <h4 className="">Plastic Pallet Boxes</h4>
              <div className="cat-desc-text">
              Eco-friendly, Collapsible saving you space, Effecient loading via built-in plastic pallet.
              </div>
              <div className="cat-desc-text">
                Features & Benefites of the bulk storage containers
                <ul>
                  <li>Collapsible, Reinforced design, Ventilated.</li>
                  <li>Bulk packing, Multiple Sizes and Colors, LIdded pallet boxes, Plastic pallet.</li>
                  <li>100% New PP Material.</li>
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <LazyLoadImage 
                  className="img-fluid w-100" 
                  src={`${cdn_url}/static/coaming-box.jpg`}
                  placeholderSrc={cdn_loading_img}
                  alt="Plastic coaming boxes" />
              </div>
              <div className="col-md-6">
                <LazyLoadImage 
                  className="img-fluid w-100" 
                  src={`${cdn_url}/static/pallet-boxes-export-to-oman.jpg`}
                  placeholderSrc={cdn_loading_img}
                  alt="Plastic Pallet Boxes" />
              </div>
            </div>
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
