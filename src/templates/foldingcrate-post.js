import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import { mmtoinch, kgtolbs, ltogal} from '../utils';

export const FoldingcratePostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
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
  images
}) => {
  const PostContent = contentComponent || Content
  let resizeStyle = '?x-oss-process=image/resize,h_100'
  if(images && images.length>0){
    images = images.map(item=>{
      let obj = {}
      obj.original = item
      obj.thumbnail = item+resizeStyle
      return obj
    })
  }else{

  }
  if (!weight) {
    weight = NaN
  }
  if (!folded_height) {
    folded_height = NaN
  }
  if (!volumn) {
    volumn = NaN
  }
  return (
    <section className="section">
      {helmet || ''}
      <div className="container-fluid">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb bg-white my-2">
            <li className="breadcrumb-item">
              <Link to="/">
                Home
              </Link>
            </li>
            <li className="breadcrumb-item">
              <Link to="/folding-crates">
                Folding Crates
              </Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">{title}</li>
          </ol>
        </nav>
      <div className="row">
        <div className="col-sm-6">
          <ImageGallery 
            items={images} 
            lazyLoad={true} 
            showFullscreenButton={false}
            showBullets={true}
          />
        </div>
        <div className="col-sm-6">
          <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
          </h1>

          <table className="table table-hover table-bordered single-product-attr">
            <caption>
                <button className="btn btn-danger btn-block product-inquiry">Request a Free Quote</button>
            </caption>
            <tbody>
                <tr>
                  <td>
                    <h4>Product Model</h4>
                  </td>
                  <td className="product-model">
                    <span className="mm pull-left value">{model}</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h4>External Dimensions</h4>
                    <span>(L * W * H)</span>
                  </td>
                  <td className="external-dimension">
                    <span className="mm pull-left value">{external_long}X{external_width}X{external_height}</span>
                    <span className="pull-right">mm</span>
                    <hr />
                    <span className="inch pull-left value">{(external_long * mmtoinch).toFixed(2)}X{(external_width * mmtoinch).toFixed(2)}X{(external_height * mmtoinch).toFixed(2)}</span>
                    <span className="pull-right">in</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h4>Internal Dimensions</h4>
                    <span>(L * W * H)</span>
                  </td>
                  <td className="internal-dimension">
                    <span className="mm pull-left value">{internal_long}X{internal_width}X{internal_height}</span>
                    <span className="pull-right">mm</span>
                    <hr />
                    <span className="inch pull-left value">{(internal_long * mmtoinch).toFixed(2)}X{(internal_width * mmtoinch).toFixed(2)}X{(internal_height * mmtoinch).toFixed(2)}</span>
                    <span className="pull-right">in</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h4>Folded Height</h4>
                  </td>
                  <td className="internal-dimension">
                    <span className="mm pull-left value">{folded_height}</span>
                    <span className="pull-right">mm</span>
                    <hr />
                    <span className="inch pull-left value">{(folded_height * mmtoinch).toFixed(2)}</span>
                    <span className="pull-right">in</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h4>Weight</h4>
                  </td>
                  <td className="internal-dimension">
                    <span className="kg pull-left value">{weight}</span>
                    <span className="pull-right">kg</span>
                    <hr />
                    <span className="lbs pull-left value">{(weight * kgtolbs).toFixed(2)}</span>
                    <span className="pull-right">lbs</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h4>Volumn</h4>
                  </td>
                  <td className="internal-dimension">
                    <span className="liters pull-left value">{volumn}</span>
                    <span className="pull-right">Liters</span>
                    <hr />
                    <span className="gallon pull-left value">{volumn * ltogal }</span>
                    <span className="pull-right">Us gallon</span>
                  </td>
                </tr>
            </tbody>
          </table>
          <p>{description}</p>
        </div>
      </div>

      <div className="col-sm-12">
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
        images={post.frontmatter.images}
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
  imagea: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
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
        images
      }
    }
  }
`
