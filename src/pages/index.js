import 'core-js/es6/map';
import 'core-js/es6/set';

import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import Slider from '../components/Slider'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { cdn_url, cdn_loading_img, menu } from '../utils'
import SEO from '../components/SEO/SEO'

export default class IndexPage extends React.Component {
  render() {
    let image_one =`${cdn_url}/static/main-slider-attached-lid-container.jpg`
    let image_two = `${cdn_url}/static/main-slider-nesting-crates.jpg`
    let image_three = `${cdn_url}/static/main-slider-folding-crates.jpg`
    let items = [
      {
        src: `${image_one}`,
        altText: 'Attached Lid Container',
        caption: '',
        link_to: menu.movingBins.url
      },
      {
        src: `${image_two}`,
        altText: 'Nesting Crates',
        caption: '',
        link_to: ''
      },
      {
        src: `${image_three}`,
        altText: 'Folding Crates',
        caption: '',
        link_to: menu.foldingCrates.url
      }
    ];
    items.forEach(item=>{
      item.srcset = `${item.src}?x-oss-process=image/resize,w_360 360w,${item.src}?x-oss-process=image/resize,w_650 650w,${item.src}?x-oss-process=image/resize,w_850 850w,${item.src}?x-oss-process=image/resize,w_1000 1000w,${item.src}?x-oss-process=image/resize,w_1200 1200w`
      item.placeholderImg = `${item.src}?x-oss-process=image/resize,w_50`
    })
    return (
      <Layout>
        <SEO 
            titleTemplate="%s | Moving boxes"
            title='Moving Bins For Sale, Plastic Moving Boxes Manufacturer & Supplier'
            description = 'JOINPLASTIC is a Plastic Crate manufacturers and suppliers from China,we wholesale a wide range of products which include plastic moving boxes, collapsible plastic crates, fruits crate, stacking crates, attached lid containers, heavy duty crates, pallets, dollies'
          />
        <div className="container-fluid">
          <Helmet>
            <title>{`Moving Bins For Sale, Plastic Moving Boxes Manufacturer & Supplier`}</title>
            <meta name="description" content={``} />
          </Helmet>
          <section className="section my-3">
              <div className="">
                <Slider items={items}/>
              </div>
          </section>
          <section className="my-3 border bg-light home-cat-pic">
            <div className="text-center mb-4 border-bottom h5 py-3">Products Categories</div>
            <div className="row">
              <div className="col-sm-3">
                <Link className="nav-link text-danger font-weight-bold pb-0" to={menu.foldingCrates.url}>
                  <LazyLoadImage 
                    className="img-fluid w-100" 
                    src={`${cdn_url}/static/folding-crates.jpg`}
                    placeholderSrc={cdn_loading_img}
                    alt="Plastic Folding Crates" />
                  <p className="home-page-cat-text text-center">
                    Plastic Folding Crates
                  </p>
                </Link>
              </div>
              <div className="col-sm-3">
                <Link className="nav-link text-danger font-weight-bold pb-0" to={menu.movingBins.url}>
                  <LazyLoadImage 
                    className="img-fluid w-100" 
                    src={`${cdn_url}/static/plastic-moving-crates.jpg`}
                    placeholderSrc={cdn_loading_img}
                    alt="Plastic Moving Crates" />
                  <p className="home-page-cat-text text-center">
                    Plastic Moving Crates
                  </p>
                </Link>
              </div>
              <div className="col-sm-3">
                <Link className="nav-link text-danger font-weight-bold pb-0" to={menu.euroStackingContainers.url}>
                  <LazyLoadImage 
                    className="img-fluid w-100" 
                    src={`${cdn_url}/static/euro-stacking-crates.jpg`}
                    placeholderSrc={cdn_loading_img}
                    alt="Euro Stacking Containers" />
                  <p className="home-page-cat-text text-center">
                    Euro Stacking Containers
                  </p>
                </Link>
              </div>
              <div className="col-sm-3">
                <Link className="nav-link text-danger font-weight-bold pb-0" to={menu.plasticPalletBoxes.url}>
                  <LazyLoadImage 
                    className="img-fluid w-100" 
                    src={`${cdn_url}/static/plastic-pallet-boxes.jpg`}
                    placeholderSrc={cdn_loading_img}
                    alt="Plastic Pallet Boxes" />
                  <p className="home-page-cat-text text-center">
                    Plastic Pallet Boxes
                  </p>
                </Link>
              </div>
            </div>
          </section>
          <section className="my-3 border bg-light">
            <div className="row">
              <div className="col-sm-5">
                <LazyLoadImage 
                    className="img-fluid w-100" 
                    src={`${cdn_url}/static/plastic-moving-boxes-customization.png`}
                    placeholderSrc={cdn_loading_img}
                    alt="Plastic moving boxes customization" />
              </div>
              <div className="col-sm-7">
                <div className="center-y-parent h-100">
                  <div className="center-y-child invalid-xs p-3">
                    <h2 className="h1 mb-4 font-weight-bold">Products Customization Service</h2>
                    <h4>Custom service according to your specific demand</h4>
                    <p>
                    Browsed our selection and still can’t find the right crates? 
                    No problem. Check out our specialty items, or contact us about creating a custom mold to your exact specifications
                    </p>
                    <p>
                      OEM service are designed to provide you with customized services by predicting your desires and needs.
                    </p>
                    <Link className="btn btn-danger btn-lg active" role="button" aria-pressed="true" to="/contact/">
                        Contact Us
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="mt-3">
            <div className="row mx-0 border bg-light">
              <div className="col-sm-7">
                <div className="center-y-parent h-100">
                  <div className="center-y-child invalid-xs p-3">
                    <h2>Plastic Crates Manufacturer & Supplier</h2>
                    <ul>
                      <li>Wholesale Pricing</li>
                      <li>All Colors + Custom Logo</li>
                      <li>Quality assurance</li>
                    </ul>
                    <div className="text-left">
                      <h6>Get the best deal for plastic moving boxes, collapsible plastic crates, stackable plastic crates, pallet boxes from Chinese manufacture directly.</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-5 pr-0">
                <LazyLoadImage effect="blur" src={`${cdn_url}/static/plastic-crate-manufacture-factory.jpg`} className="img-fluid"
                  alt="" />
              </div>
            </div>
          </section>
          <section className="mt-3 border bg-light">
              <div className="text-center mb-4 border-bottom h5 py-3">We Provide Crates and Boxes For</div>
              <div className="row text-center">
                  <div className="col-sm-12 col-md-4">
                    <h5 className="text-danger">Moving company</h5>
                    <LazyLoadImage effect="blur" className="img-fluid px-4" src={`${cdn_url}/static/moving-company.jpg`} alt="" />
                    <p className="p-4">Moving isn’t always great for the environment. Luckily, we provide <strong>plastic moving boxes</strong> for moving companies to make moving more planet-friendly.</p>
                  </div>
                  <div className="ol-sm-12 col-md-4">
                    <h5 className="text-danger">Retailers</h5>
                    <LazyLoadImage effect="blur" className="img-fluid px-4" src={`${cdn_url}/static/retails.jpg`} alt="" />
                    <p className="p-4">Retailers can enjoy the high quality and competitive price of our plastic products,and we had build a good relationship with retails across the world</p>
                  </div>
                  <div className="ol-sm-12 col-md-4">
                    <h5 className="text-danger">Anyone</h5>
                    <LazyLoadImage effect="blur" className="img-fluid px-4" src={`${cdn_url}/static/anyboy.jpg`} alt="" />
                    <p className="p-4">We had supplied <strong>plastic crates</strong> for farms, schools, corporations and organizations.And we provide good Pre-and post-sales support for our customers</p>
                  </div>
                </div>
          </section>
        </div>
        
      </Layout>
    )
  }
}



