import React from 'react'
import PropTypes from 'prop-types'
import { navigateTo } from "gatsby-link";
import { kebabCase } from 'lodash'
import { Link } from 'gatsby'
import Content from '../components/Content'
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import "./ProductDetailTemplate.scss";
import { menu } from '../utils'

import { 
  mmtoinch, 
  kgtolbs, 
  ltogal,
  aliResizeStyle_h_120,
  aliResizeStyle_w_300,
  aliResizeStyle_w_400,
  aliResizeStyle_w_600,
  aliResizeStyle_w_800,
  aliResizeStyle_w_900,
  aliResizeStyle_w_1024,
  aliResizeStyle_w_1200,
  contact_url,
  cdn_img_thumbnail
} from '../utils';

function toContactUs(e,model,p_img){
  e.preventDefault();
  localStorage.setItem("from_url", window.location.href)
  localStorage.setItem("model", model)
  localStorage.setItem("p_img", p_img)
  navigateTo(contact_url)
  return false
}
const ProductDetailTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  parentLevelLink,
  parentLevelLinkText,
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
  images,
  static_load,
  dynamic_load
}) => {
  const PostContent = contentComponent || Content
  if(images && images.length>0){
    images = images.map(item=>{
      let obj = {}
      item = item.replace("http:","https:")
      obj.original = `${item}${aliResizeStyle_w_600}`
      obj.srcSet = `${item}${aliResizeStyle_w_300} 300w, ${item}${aliResizeStyle_w_400} 400w, ${item}${aliResizeStyle_w_600} 600w,${item}${aliResizeStyle_w_800} 800w,${item}${aliResizeStyle_w_900} 900w,${item}${aliResizeStyle_w_1024} 1024w,${item}${aliResizeStyle_w_1200} 1200w`
      obj.sizes = '(max-width: 767px) 100vw, 600px'
      obj.thumbnail = item + aliResizeStyle_h_120
      obj.originalAlt = title
      obj.originalTitle = title
      return obj
    })
  }else{
    images=[{
      original: cdn_img_thumbnail,
      thumbnail: cdn_img_thumbnail + aliResizeStyle_h_120,
      originalAlt: 'no image',
      originalTitle: 'no image',
    }]
  }

  return (
    <section className="section product-detail-single">
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
              <Link to={parentLevelLink}>
                {parentLevelLinkText}
              </Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">{title}</li>
          </ol>
        </nav>
        <div className="row" itemScope itemType="http://schema.org/Product">
          {images.map((item,index)=>(
            <link itemProp="image" key={index} href={item.original} />
          ))}
          <div className="col-sm-6">
            <ImageGallery 
              items={images} 
              lazyLoad={true} 
              showFullscreenButton={false}
              showBullets={true}
            />
            <div className="col-sm-6" itemProp="offers" itemScope itemType="http://schema.org/AggregateOffer">
              <meta itemProp="availability" itemType="http://schema.org/ItemAvailability" content="http://schema.org/InStock"/>
              {static_load?(
                <React.Fragment>
                  <meta itemProp="lowPrice" content="89.69" /> 
                  <meta itemProp="highPrice" content="120.79" /> 
                </React.Fragment>
              ):(
                <React.Fragment>
                  <meta itemProp="lowPrice" content="5.69" /> 
                  <meta itemProp="highPrice" content="17.89" /> 
                </React.Fragment>
              )}
              <meta itemProp="priceCurrency" content="USD" />  
              <meta itemProp="priceValidUntil" content="2027-11-05" />  
            </div>
          </div>
          <div className="col-sm-6">
            <div className="bg-white p-3">
              <h1 className="title text-capitalize single-product-title h4" itemProp="name">
                  {title}
              </h1>
              <table className="table table-hover table-bordered single-product-attr">
                <caption>
                    <button className="btn btn-danger btn-block product-inquiry" onClick={(e)=>toContactUs(e,model,images[0].original)}>Request a Free Quote</button>
                </caption>
                <tbody>
                    <tr>
                      <td>
                        <h6>Product Model</h6>
                      </td>
                      <td className="product-model">
                        <span className="mm pull-left value" itemProp="productID">{model}</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h6>External Dimensions</h6>
                        <span>(L * W * H)</span>
                      </td>
                      <td className="external-dimension">
                        <span className="mm pull-left value">{external_long} X {external_width} X {external_height}</span>
                        <span className="pull-right">mm</span>
                        <hr className="w-100 mt-4 mb-0" />
                        <span className="inch pull-left value">{(external_long * mmtoinch).toFixed(2)} X {(external_width * mmtoinch).toFixed(2)} X {(external_height * mmtoinch).toFixed(2)}</span>
                        <span className="pull-right">in</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h6>Internal Dimensions</h6>
                        <span>(L * W * H)</span>
                      </td>
                      <td className="internal-dimension">
                        <span className="mm pull-left value" itemProp="Dimensions(mm)">{internal_long} X {internal_width} X {internal_height}</span>
                        <span className="pull-right">mm</span>
                        <hr className="w-100 mt-4 mb-0" />
                        <span className="inch pull-left value" itemProp="Dimensions(inch)">{(internal_long * mmtoinch).toFixed(2)} X {(internal_width * mmtoinch).toFixed(2)} X {(internal_height * mmtoinch).toFixed(2)}</span>
                        <span className="pull-right">in</span>
                      </td>
                    </tr>
                    {folded_height && (
                      <tr>
                        <td>
                          <h6>Folded Height</h6>
                        </td>
                        <td className="internal-dimension">
                          <meta itemProp="folded height" content={`${folded_height} mm`} />
                          <span className="mm pull-left value">{folded_height}</span>
                          <span className="pull-right">mm</span>
                          <hr className="w-100 mt-4 mb-0" />
                          <span className="inch pull-left value">{(folded_height * mmtoinch).toFixed(2)}</span>
                          <span className="pull-right">in</span>
                        </td>
                      </tr>
                    )}
                    {weight && (
                      <tr>
                        <td>
                          <h6>Weight</h6>
                        </td>
                        <td className="internal-dimension">
                          <meta itemProp="weight" content={`${weight} kg`} />
                          <span className="kg pull-left value">{weight}</span>
                          <span className="pull-right">kg</span>
                          <hr className="w-100 mt-4 mb-0" />
                          <span className="lbs pull-left value">{(weight * kgtolbs).toFixed(2)}</span>
                          <span className="pull-right">lbs</span>
                        </td>
                      </tr>
                    )}
                    {volumn && (
                      <tr>
                        <td>
                          <h6>Volumn</h6>
                        </td>
                        <td className="internal-dimension">
                          <meta itemProp="volumn" content={`${volumn} L`} />
                          <span className="liters pull-left value">{volumn}</span>
                          <span className="pull-right">Liters</span>
                          <hr className="w-100 mt-4 mb-0" />
                          <span className="gallon pull-left value">{(volumn * ltogal).toFixed(2) }</span>
                          <span className="pull-right">Us gallon</span>
                        </td>
                      </tr>
                    )}
                    {static_load && dynamic_load && (
                      <tr>
                        <td>
                          <h6>Load capacity</h6>
                        </td>
                        <td className="internal-dimension">
                          <meta itemProp="static load" content={`${static_load} T`} />
                          <meta itemProp="dynamic load" content={`${dynamic_load} T`} />
                          <span className="liters pull-left value">{static_load}</span>
                          <span className="pull-right">Static (T)</span>
                          <hr className="w-100 mt-4 mb-0" />
                          <span className="gallon pull-left value">{dynamic_load}</span>
                          <span className="pull-right">Dynamic (T)</span>
                        </td>
                      </tr>
                    )}
                </tbody>
              </table>
              {tags && tags.length ? (
                <div style={{ marginTop: `1rem` }}>
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
              <meta itemProp="description" content={description} />
            </div>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-sm-12">
            <div className="bg-white p-3">
              <p>{description}</p>
              <PostContent content={content} />
              {
                parentLevelLink === menu.foldingCrates.url &&(
                  `folding crate common description`
                )
              }
              {
                parentLevelLink === menu.movingBins.url &&(
                  `movingBins common description`
                )
              }
              {
                parentLevelLink === menu.euroStackingContainers.url &&(
                  `euroStackingContainers common description`
                )
              }
              {
                parentLevelLink === menu.plasticPalletBoxes.url &&(
                  `plasticPalletBoxes common description`
                )
              }
            </div>
          </div>
        </div>
        
      </div>
    </section>
  )
}

ProductDetailTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
}
export default ProductDetailTemplate