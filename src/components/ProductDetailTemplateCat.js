
import React from 'react'
import { navigateTo } from "gatsby-link";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import {
  aliResizeStyle_h_20,
  aliResizeStyle_h_200,
  aliResizeStyle_h_300,
  aliResizeStyle_w_400,
  aliResizeStyle_w_600,
  aliResizeStyle_w_800,
  aliResizeStyle_w_900,
  aliResizeStyle_w_1024,
  aliResizeStyle_w_1200,
  mmtoinch,
  kgtolbs,
  ltogal,
  contact_url
} from '../utils';

class ProductDetailTemplateCat extends React.Component {
  constructor(props){
    super(props);
    this.toContactUs = this.toContactUs.bind(this);
  }
  toContactUs(e,model,p_img){
    e.preventDefault();
    localStorage.setItem("from_url", window.location.href)
    localStorage.setItem("model", model)
    localStorage.setItem("p_img", p_img)
    navigateTo(contact_url)
    return false
  }
  render() {
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
    } = this.props.data;
    let cat_image_url=''
    let srcset=''
    let placeholderImg=''
    if (images && images.length > 0 ) {
      let the_image = images[0].replace("http:","https:")
      cat_image_url = the_image + aliResizeStyle_h_200
      placeholderImg = the_image + aliResizeStyle_h_20
      srcset=`
        ${the_image}${aliResizeStyle_h_300} 300w, 
        ${the_image}${aliResizeStyle_w_400} 400w, 
        ${the_image}${aliResizeStyle_w_600} 600w,
        ${the_image}${aliResizeStyle_w_800} 800w,
        ${the_image}${aliResizeStyle_w_900} 900w,
        ${the_image}${aliResizeStyle_w_1024} 1024w,
        ${the_image}${aliResizeStyle_w_1200} 1200w`
    }else{
      cat_image_url = cdn_img_thumbnail
      placeholderImg = cdn_img_thumbnail
    }
    return (
      <div className="product-wrap">
        <div className="product-img-wrap">
          <LazyLoadImage 
            src={cat_image_url} 
            placeholderSrc={placeholderImg}
            effect="blur"
            srcset={srcset} 
            sizes="(max-width: 300px) 100vw, 300px"
            className="" 
            alt={title} />
        </div>
        <div className="product-right">
          <div className="product-name">
            <div className="col-sm-12 py-1 clearfix">
              <h2 title={title} className="product-title text-capitalize text-truncate d-inline-block mb-0 pl-1">{title}</h2>
              <span className="btn btn-danger pull-right float-right product-cat-inquiry" onClick={(e)=>this.toContactUs(e,model,cat_image_url)}>Inquiry</span>
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
    );
  }
}
export default ProductDetailTemplateCat