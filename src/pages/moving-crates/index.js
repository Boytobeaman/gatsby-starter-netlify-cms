import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/Layout'
import {
  mmtoinch,
  kgtolbs,
  ltogal,
  aliResizeStyle_h_200,
  aliResizeStyle_h_300,
  aliResizeStyle_h_400,
  aliResizeStyle_h_600,
} from '../../utils';
import '../../cat-page-style.scss'
export default class MovingcratePage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <Layout>
        <section className="section">
          <div className="container-fluid">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb bg-white my-2">
                <li className="breadcrumb-item">
                  <Link to="/">
                    Home
                  </Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">Moving Crates</li>
              </ol>
            </nav>
            
            {posts
              .map(({ node: post }) => {
                const {
                  title,
                  model,
                  external_long,
                  external_width,
                  external_height,
                  internal_long,
                  internal_width,
                  internal_height,
                  volumn,
                  weight,
                  images
                } = post.frontmatter;
                let cat_image_url=''
                let srcset=''
                if (images && images.length > 0 ) {
                  let the_image = post.frontmatter.images[0].replace("http:","https:")
                  cat_image_url = the_image + aliResizeStyle_h_200
                  srcset=`${the_image}${aliResizeStyle_h_300} 300w, ${the_image}${aliResizeStyle_h_400} 400w, ${the_image}${aliResizeStyle_h_600} 600w, ${the_image} 700w`
                }
                return (
                  <div
                    className="clearfix mb-3"
                    key={post.id}
                  >
                    <div className="col-xs-12">
                      <Link className="cat-product-link" to={post.fields.slug}>
                        <div className="product-wrap">
                          <div className="product-img-wrap">
                            <img src={cat_image_url} srcset={srcset}
                              className="" alt={post.frontmatter.title} />
                          </div>
                          <div className="product-right">
                            <div className="product-name">
                              <div className="col-sm-12 py-1 clearfix">
                                <h2 title={title} className="product-title text-capitalize text-truncate d-inline-block mb-0 pl-1">{title}</h2>
                                <span className="btn btn-danger pull-right float-right product-cat-inquiry">Inquiry</span>
                                <span className="badge badge-info product-model mr-3">Model: {model}</span>
                              </div>
                            </div>
                            <div className="product-attributes">
                              <div className="row no-gutters">
                              <div className="col-sm-7">
                                <div className="row no-gutters">
                                  <div className="col-sm-6 border-right border-white external-dimension">
                                    <div className="table-head bb-2-white">External Dimensions</div>
                                    <div className="product-val-mm">
                                      <span className="value">{external_long} X {external_width} X {external_height}</span>
                                      <span className="pull-right float-right">mm</span>
                                    </div>
                                    <div className="product-val-inch">
                                      <span className="value">{(external_long * mmtoinch).toFixed(2)} X {(external_width * mmtoinch).toFixed(2)} X {(external_height * mmtoinch).toFixed(2)}</span>
                                      <span className="pull-right float-right">in</span>
                                    </div>
                                  </div>
                                  <div className="col-sm-6 border-right border-white internal-dimension d-none d-sm-block">
                                    <div className="table-head bb-2-white">Internal Dimensions</div>
                                    <div className="product-val-mm">
                                      <span className="value">{internal_long} X {internal_width} X {internal_height}</span>
                                      <span className="pull-right float-right">mm</span>
                                    </div>
                                    <div className="product-val-inch">
                                      <span className="value">{(internal_long * mmtoinch).toFixed(2)} X {(internal_width * mmtoinch).toFixed(2)} X {(internal_height * mmtoinch).toFixed(2)}</span>
                                      <span className="pull-right float-right">in</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-sm-5 d-none d-sm-block">
                                <div className="row no-gutters">
                                  <div className="col-sm-6 border-right border-white weight">
                                    <div className="table-head bb-2-white">Weight</div>
                                    <div className="product-val-mm">
                                      <span className="value">{weight}</span>
                                      <span className="pull-right float-right">kg</span>
                                    </div>
                                    <div className="product-val-inch">
                                      <span className="value">{(weight * kgtolbs).toFixed(2)}</span>
                                      <span className="pull-right float-right">lbs</span>
                                    </div>
                                  </div>
                                  <div className="col-sm-6 volumn">
                                    <div className="table-head bb-2-white">Volume</div>
                                    <div className="product-val-mm">
                                      <span className="value">{volumn}</span>
                                      <span className="pull-right float-right">Liters</span>
                                    </div>
                                    <div className="product-val-inch">
                                      <span className="value">{(volumn * ltogal).toFixed(2)}</span>
                                      <span className="pull-right float-right">Us gallon</span>
                                    </div>
                                  </div>
                                </div>
                              </div>

                                
                                
                                
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                )
              })}

            <div className="cat-desc">
              <h4 className="">Folding crate description</h4>
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
