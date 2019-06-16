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
export default class FoldingcratePage extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    let cat_link = '/folding-crates/'
    let images = posts[0].node.frontmatter.images
    let the_image
    if (images && images.length > 0 ) {
      the_image = images[0].replace("http:","https:")
    }
    return (
      <Layout>
        <section className="section">
          <SEO 
            thisTitleTemplate = "%s | collapsible crate"
            title='Collapsible Plastic Crate, folding plastic crates'
            description = 'Wholesale Collapsible plastic crate, folding plastic crates which are suitable for the storage and handling of goods. The folding crate can be folded and reused indefinitely'
            pathname = {`${cat_link}`}
            image = {the_image}
            position = '2'
            ratingValue = '4.9'
            reviewCount = '88'
            price = '9.73'
            lowPrice = '5.69'
            highPrice = '18.69'
          />
          <div className="container-fluid">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb bg-white my-2">
                <li className="breadcrumb-item">
                  <Link to="/">
                    Home
                  </Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">Folding Crates</li>
              </ol>
            </nav>
            <div className="cat-desc-top-wrap">
              <div className="d-none d-sm-block">
                <LazyLoadImage 
                  className="img-fluid w-100" 
                  src={`${cdn_url}/static/folding-crates-banner.jpg`}
                  placeholderSrc={cdn_loading_img}
                  alt="folding crates" />
              </div>
              <div className="d-block d-sm-none">
                <LazyLoadImage 
                  className="img-fluid w-100" 
                  src={`${cdn_url}/static/folding-crates-banner-phone.jpg`}
                  placeholderSrc={cdn_loading_img}
                  alt="folding crates" />
              </div>
            </div>

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
            <div className="row mb-1 no-gutters">
              <div className="col-sm-4">
                <video controls className='w-100 h-100' poster={`${cdn_url}/products/a4597984739a4610b258ac90ef4b56dc.jpg?x-oss-process=image/resize,h_200`}>
                  <source src={`${cdn_url}/static/video/collapsible-crate.mp4`} type="video/mp4" />
                  Your browser does not support HTML5 video.
                </video>
              </div>
              <div className="col-sm-4">
                <LazyLoadImage 
                  className="img-fluid w-100" 
                  src={`${cdn_url}/static/collapsible-storage-containers-fold.gif`}
                  placeholderSrc={cdn_loading_img}
                  alt="Collapsible Plastic Crate" />
              </div>
              <div className="col-sm-4">
                <LazyLoadImage 
                  className="img-fluid w-100" 
                  src={`${cdn_url}/static/collapsible-storage-containers-fold-b.gif`}
                  placeholderSrc={cdn_loading_img}
                  alt="Collapsible Crate" />
              </div>
            </div>
            <div className="cat-desc-section">
              <h1 className="cat-desc-top-title">Collapsible Plastic Crates</h1>
              <ul>
                <li>Collapsible & Stackable & Durable</li>
                <li>ventilated, multiple heights, returnable, efficient packing.</li>
                <li>100% New PP material.</li>
              </ul>
              <p className="d-none d-lg-block">
                These collapsible, reusable plastic crates are Efficient, Economical and Environmentally friendly,
                they can help reduce shipping and storage expenses.
              </p>
            </div>
            <div className="cat-desc-section">
              <h4 className="">Folding crate description</h4>
              <div className="cat-desc-text">
                Collapsible Crate is a smart, space-saving solution to simplify all of your activities, trips and day-to-day tasks,
                It is a highly versatile, multi-purpose storage solution for consumers to store and transport goods.
                The collapsible plastic crate can be popped open when you need them, fold flat when you don't,
                the folding crate can save 75% space, usually we provide the folding crate with lid.
              </div>
              <div className="cat-desc-text">
                Features & Benefites of the collapsible crate
                <ul>
                  <li>QUICKLY COLLAPSIBLE & LIGHTWEIGHT</li>
                  <li>100% RECYCLABLE - no waste disposal at food retailer</li>
                  <li>Foldable and stackable to maximize truck and store space.</li>
                  <li>SUPER EASY TO WASH & REUSE</li>
                  <li>BUILT AMAZINGLY STRONG TO LAST</li>
                  <li>SUPPORTS ALL TYPES OF ITEMS</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

FoldingcratePage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const FoldingcratePageQuery = graphql`
  query FoldingcrateIndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "foldingcrate-post" } }}
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
            folded_height
            volumn
            weight
            images
          }
        }
      }
    }
  }
`
