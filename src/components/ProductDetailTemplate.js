import React from 'react'
import PropTypes from 'prop-types'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { kebabCase } from 'lodash'
import { Link } from 'gatsby'
import Content from '../components/Content'
import ImageGallery from 'react-image-gallery';
import InquiryForm from '../components/InquiryForm';
import "react-image-gallery/styles/css/image-gallery.css";
import "./ProductDetailTemplate.scss";
import { menu } from '../utils'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { cdn_url,cdn_loading_img } from '../utils'
import Movingbin from './productDesc/Movingbin'
import PlasticPalletBoxes from './productDesc/plasticPalletBoxes'
import EuroCrate from './productDesc/EuroCrate'
import FoldingCrate from './productDesc/FoldingCrate'
import AllProductCommonDesc from './productDesc/AllProductCommonDesc'

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


class ProductDetailTemplate extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toContactUs(e,model,p_img){
    e.preventDefault();
    localStorage.setItem("from_url", window.location.href)
    localStorage.setItem("model", model)
    localStorage.setItem("p_img", p_img)
    // navigateTo(contact_url)
    this.setState({
      modal: true
    });
    return false
  }

  toggle(e) {
    e.preventDefault();
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  listenScrollEvent = e => {
    if (window.scrollY > 450) {
      this.setState({inquiryBtnClass: 'scrolled'})
    } else {
      this.setState({inquiryBtnClass: ''})
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent)
  }

  render() {
    let {
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
    } = this.props;
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
        <div className="product-detail-single-layout-wrap">
          <div className="product-detail-single-content-wrap">
            <div className="product-detail-single-content">
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
                  <div className="product-spec-table-wrap bg-white p-3">
                    <h1 className="title text-capitalize single-product-title h4" itemProp="name">
                        {title}
                    </h1>
                    <table className="table table-hover table-bordered single-product-attr">
                      <caption className="inquiry-btn-wrap">
                          <button className={`btn btn-lg btn-danger btn-block product-inquiry ${this.state.inquiryBtnClass}`} onClick={(e)=>this.toContactUs(e,model,images[0].original)}>Request a Free Quote</button>
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
                    {
                      parentLevelLink === menu.foldingCrates.url &&(
                        <FoldingCrate />
                      )
                    }
                    {
                      parentLevelLink === menu.movingBins.url &&(
                        <Movingbin />
                      )
                    }
                    {
                      parentLevelLink === menu.euroStackingContainers.url &&(
                        <EuroCrate />
                      )
                    }
                    {
                      parentLevelLink === menu.plasticPalletBoxes.url &&(
                        <PlasticPalletBoxes />
                      )
                    }
                    
                    <div className="single-product-description">
                      <p className="description">{description}</p>
                      <PostContent className="post-content" content={content} />
                    </div>
                    <AllProductCommonDesc />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="amazon-content-wrap">
            <p className="text-center font-weight-bold">Amazon ADs</p>
              {
                parentLevelLink === menu.foldingCrates.url &&(
                  <span className="collapsible-crates">
                    <a href="https://www.amazon.com/gp/product/B015PIRFD6/ref=as_li_ss_il?ie=UTF8&linkCode=li2&tag=cnboxstorecom-20&linkId=e3a96d5a6821f6f92a4166f0cceb2e25&language=en_US" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B015PIRFD6&Format=_SL160_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=cnboxstorecom-20&language=en_US" /></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=cnboxstorecom-20&language=en_US&l=li2&o=1&a=B015PIRFD6" width="1" height="1" border="0" alt="" />
                    <a href="https://www.amazon.com/CleverMade-Collapsible-Stackable-Containers-CleverCrates/dp/B07JD5WMH3/ref=as_li_ss_il?_encoding=UTF8&psc=1&refRID=E0CH2X76SVQWNV7G0QDB&linkCode=li2&tag=cnboxstorecom-20&linkId=4206afac73b7ada6b4d0018bba7a80bb&language=en_US" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B07JD5WMH3&Format=_SL160_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=cnboxstorecom-20&language=en_US" /></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=cnboxstorecom-20&language=en_US&l=li2&o=1&a=B07JD5WMH3" width="1" height="1" border="0" alt="" />
                    <a href="https://www.amazon.com/CleverMade-Collapsible-Storage-Bins-Lids/dp/B078WP8YQH/ref=as_li_ss_il?keywords=folding+crates&qid=1575470915&sr=8-6&linkCode=li2&tag=cnboxstorecom-20&linkId=960ff4b2fa30fa8b096ba1039a07cd40&language=en_US" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B078WP8YQH&Format=_SL160_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=cnboxstorecom-20&language=en_US" /></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=cnboxstorecom-20&language=en_US&l=li2&o=1&a=B078WP8YQH" width="1" height="1" border="0" />
                    <a href="https://www.amazon.com/Clax-Cart-Mobile-Folding-Cart/dp/B00IIW6TSY/ref=as_li_ss_il?keywords=moving+crates+dolly&qid=1575471632&sr=8-20-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEzSVNPMVM1VjVDNEJXJmVuY3J5cHRlZElkPUEwOTkyNzkzMkRUSVNKWUwwV1A4JmVuY3J5cHRlZEFkSWQ9QTA5OTE2ODgzUzBOSkFTUEUzSDJPJndpZGdldE5hbWU9c3BfYnRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ==&linkCode=li2&tag=cnboxstorecom-20&linkId=a23881fe4d4135f9a48db66cbdbd3d11&language=en_US" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00IIW6TSY&Format=_SL160_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=cnboxstorecom-20&language=en_US" /></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=cnboxstorecom-20&language=en_US&l=li2&o=1&a=B00IIW6TSY" width="1" height="1" border="0" alt="" />
                  </span>
                )
              }
              {
                parentLevelLink === menu.movingBins.url &&(
                  <span className="moving-crates">
                    <a href="https://www.amazon.com/Akro-Mils-39120-Distribution-Container-21-5-Inch/dp/B000189CSC/ref=as_li_ss_il?keywords=moving+crates&qid=1575471265&sr=8-1&linkCode=li3&tag=cnboxstorecom-20&linkId=62fa517806eea73338ad5b36130614c2&language=en_US" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B000189CSC&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=cnboxstorecom-20&language=en_US" /></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=cnboxstorecom-20&language=en_US&l=li3&o=1&a=B000189CSC" width="1" height="1" border="0" alt="" />
                    <a href="https://www.amazon.com/Wellmax-Platform-Foldable-Storage-Capacity/dp/B076ZYHBJF/ref=as_li_ss_il?keywords=moving+crates+dolly&qid=1575471632&sr=8-19-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEzSVNPMVM1VjVDNEJXJmVuY3J5cHRlZElkPUEwOTkyNzkzMkRUSVNKWUwwV1A4JmVuY3J5cHRlZEFkSWQ9QTA3ODkyNjlaNUJGMDY2QzhQMFcmd2lkZ2V0TmFtZT1zcF9idGYmYWN0aW9uPWNsaWNrUmVkaXJlY3QmZG9Ob3RMb2dDbGljaz10cnVl&linkCode=li3&tag=cnboxstorecom-20&linkId=41496ae938daba71a73fd455e5524bba&language=en_US" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B076ZYHBJF&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=cnboxstorecom-20&language=en_US" /></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=cnboxstorecom-20&language=en_US&l=li3&o=1&a=B076ZYHBJF" width="1" height="1" border="0" alt="" />
                    <a href="https://www.amazon.com/Akro-Mils-12-Gallon-Plastic-Storage-Attached/dp/B01N33686M/ref=as_li_ss_il?keywords=moving+crates&qid=1575471531&sr=8-11&linkCode=li3&tag=cnboxstorecom-20&linkId=f5b9a128c36f77de82440a78e28a61e3&language=en_US" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B01N33686M&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=cnboxstorecom-20&language=en_US" /></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=cnboxstorecom-20&language=en_US&l=li3&o=1&a=B01N33686M" width="1" height="1" border="0" alt="" />
                  </span>
                )
              }
              {
                parentLevelLink === menu.euroStackingContainers.url &&(
                  <span className="euro-stacking-container">
                    <a href="https://www.amazon.com/Buckhorn-SW241507F101000-Plastic-Straight-Container/dp/B01JUE8Q9I/ref=as_li_ss_il?crid=2YCHD6TZ6TK55&keywords=straight+wall+container+tote&qid=1575472400&sprefix=straight+wall+c,aps,420&sr=8-1&linkCode=li3&tag=cnboxstorecom-20&linkId=bc61cb44ebcd4308a897714d026c4f4f&language=en_US" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B01JUE8Q9I&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=cnboxstorecom-20&language=en_US" /></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=cnboxstorecom-20&language=en_US&l=li3&o=1&a=B01JUE8Q9I" width="1" height="1" border="0" alt="" />
                    <a href="https://www.amazon.com/Akro-Mils-37682-Straight-Container-24-Inch/dp/B000189CR8/ref=as_li_ss_il?_encoding=UTF8&pd_rd_i=B000189CR8&pd_rd_r=f82acce5-7894-430f-a2c9-79e4ac896313&pd_rd_w=8vVCu&pd_rd_wg=jxBWe&pf_rd_p=5873ae95-9063-4a23-9b7e-eafa738c2269&pf_rd_r=H4868M2NFY7QQSS76QR0&psc=1&refRID=H4868M2NFY7QQSS76QR0&linkCode=li3&tag=cnboxstorecom-20&linkId=7922b29028d421eb267b7293461bc30a&language=en_US" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B000189CR8&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=cnboxstorecom-20&language=en_US" /></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=cnboxstorecom-20&language=en_US&l=li3&o=1&a=B000189CR8" width="1" height="1" border="0" alt="" />
                    <a href="https://www.amazon.com/Harper-Trucks-6781-Appliance-Truck/dp/B0026WG51S/ref=as_li_ss_il?ac_md=3-3-YXBwbGlhbmNlIGRvbGx5-ac_d_rm&crid=1KHO3HAIQTQEI&keywords=moving+dollys+with+wheels&pd_rd_i=B0026WG51S&pd_rd_r=73e5b0e3-85ff-4955-80bd-d3f0ceee2da2&pd_rd_w=1NuqV&pd_rd_wg=x28Nl&pf_rd_p=e2f20af2-9651-42af-9a45-89425d5bae34&pf_rd_r=87477DQQXM1YCRAQ746Z&psc=1&qid=1575472575&sprefix=moving+doll,aps,735&linkCode=li3&tag=cnboxstorecom-20&linkId=4cd55d0439c1d01c34aca71917dd275b&language=en_US" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B0026WG51S&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=cnboxstorecom-20&language=en_US" /></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=cnboxstorecom-20&language=en_US&l=li3&o=1&a=B0026WG51S" width="1" height="1" border="0" alt="" />
                  </span>
                )
              }
              {
                parentLevelLink === menu.plasticPalletBoxes.url &&(
                  <span className="bulk-container">
                    <a target="_blank" href="https://www.amazon.com/gp/product/B00AYUVBL8/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B00AYUVBL8&linkCode=as2&tag=cnboxstorecom-20&linkId=6e188b1dba998800fa5dc6b44bfc92f5"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B00AYUVBL8&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=cnboxstorecom-20" /><img src="//ir-na.amazon-adsystem.com/e/ir?t=cnboxstorecom-20&l=am2&o=1&a=B00AYUVBL8" width="1" height="1" border="0" alt="" /></a>
                    <a href="https://www.amazon.com/Crown-Heavy-Duty-Pallet-Truck-27x48/dp/B01LBBB7SK/ref=as_li_ss_il?crid=1UQCKI3FSP0JF&keywords=pallet+truck&qid=1575472940&sprefix=pallet+trunck,aps,631&sr=8-1&linkCode=li3&tag=cnboxstorecom-20&linkId=97aa63da9c184ad629c21dc007b3cacb&language=en_US" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B01LBBB7SK&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=cnboxstorecom-20&language=en_US" /></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=cnboxstorecom-20&language=en_US&l=li3&o=1&a=B01LBBB7SK" width="1" height="1" border="0" alt="" />
                    <a href="https://www.amazon.com/dp/B07D5ZLCJ1/ref=as_li_ss_il?pd_rd_i=B07D5ZLCJ1&pd_rd_w=s00IU&pf_rd_p=45a72588-80f7-4414-9851-786f6c16d42b&pd_rd_wg=0XH6y&pf_rd_r=24EGMKQNPNDCV6BWEZKA&pd_rd_r=8e45c0e4-0fc6-4ddd-9594-8a035af35610&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyVklOTDc0R0tVM1hYJmVuY3J5cHRlZElkPUEwMzcwNjY3NUlKTjFPSTVYWkozJmVuY3J5cHRlZEFkSWQ9QTAyNjMyNDYyTVo4UjlZVU9LMU8md2lkZ2V0TmFtZT1zcF9kZXRhaWwmYWN0aW9uPWNsaWNrUmVkaXJlY3QmZG9Ob3RMb2dDbGljaz10cnVl&th=1&linkCode=li3&tag=cnboxstorecom-20&linkId=f8baea138d3bedf0d0d714f974d56804&language=en_US" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B07D5ZLCJ1&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=cnboxstorecom-20&language=en_US" /></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=cnboxstorecom-20&language=en_US&l=li3&o=1&a=B07D5ZLCJ1" width="1" height="1" border="0" alt="" />
                  </span>
                )
              }
          </div>
        </div>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} backdrop="static">
          <ModalHeader toggle={this.toggle}>Contact us & Inquiry <span className="text-danger"></span></ModalHeader>
          <ModalBody>
            <InquiryForm />
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" className="btn-sm" onClick={this.toggle}>Close</Button>
          </ModalFooter>
        </Modal>
      </section>
    )
  }
}


ProductDetailTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
}
export default ProductDetailTemplate