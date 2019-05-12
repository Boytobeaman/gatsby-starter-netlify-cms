import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import ProductDetailTemplateCat from '../../components/ProductDetailTemplateCat'
import Layout from '../../components/Layout'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { cdn_url, cdn_loading_img } from '../../utils'
import '../../cat-page-style.scss'
export default class FoldingcratePage extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <Layout>
        <section className="section">
          <Helmet>
            <title>{`Collapsible Plastic Crate, folding plastic crates | collapsible crate`}</title>
            <meta name="description" content={`Wholesale Collapsible plastic crate, folding plastic crates which are suitable for the storage and handling of goods. The folding crate can be folded and reused indefinitely`} />
          </Helmet>
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
              <div className="row mb-1 no-gutters">
                <div className="col-sm-4">
                  <LazyLoadImage 
                    className="img-fluid w-100" 
                    src={`${cdn_url}/static/collapsible-storage-containers-fold.gif`}
                    placeholderSrc={cdn_loading_img}
                    alt="Collapsible Plastic Crate" />
                </div>
                <div className="col-sm-8">
                  <div className="d-flex align-items-center">
                    <div className="p-2 cat-desc-top">
                      <h2 className="cat-desc-top-title">Collapsible Plastic Crates</h2>
                      <ul>
                        <li>Collapsible & Stackable & Durable</li>
                        <li>ventilated, multiple heights, returnable, efficient packing.</li>
                        <li>100% New PP material.</li>
                      </ul>
                      <p className="d-none d-lg-block">
                        Many companies want to find high volume use in a low cost crate,
                        we provide a secure and reliable solution for them,
                        These collapsible, reusable plastic crates are Efficient, Economical and Environmentally friendly,
                        they can help reduce shipping and storage expenses.
                      </p>
                    </div>
                    
                  </div>
                </div>
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
