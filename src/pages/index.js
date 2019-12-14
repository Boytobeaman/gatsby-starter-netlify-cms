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
        <div className="home-page">
          <Helmet>
            <title>{`Moving Bins For Sale, Plastic Moving Boxes Manufacturer & Supplier`}</title>
            <meta name="description" content={``} />
          </Helmet>
          <section className="section">
              <div className="">
                <Slider items={items}/>
              </div>
          </section>
          <section className="bg-dark home-cat-pic pt-4 pb-5">
            <h2 className="text-center p-4 text-white">Products Categories</h2>
            <h5 className="text-center p-3 text-white">Welcome to movingboxsale.com, leading Chinese supplier of plastic boxes </h5>
            <div className="row mx-0">
              <div className="col-sm-3">
                <Link className="nav-link text-white font-weight-bold pb-0" to={menu.foldingCrates.url}>
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
                <Link className="nav-link text-white font-weight-bold pb-0" to={menu.movingBins.url}>
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
                <Link className="nav-link text-white font-weight-bold pb-0" to={menu.euroStackingContainers.url}>
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
                <Link className="nav-link text-white font-weight-bold pb-0" to={menu.plasticPalletBoxes.url}>
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
          <section className="bg-light product-customization">
            <div className="row mx-0">
              <div className="col-sm-5">
                <LazyLoadImage 
                    className="img-fluid w-100 main-pic" 
                    src={`${cdn_url}/static/plastic-moving-boxes-customization-grey.png`}
                    placeholderSrc={cdn_loading_img}
                    alt="Plastic moving boxes customization" />
              </div>
              <div className="col-sm-7">
                <div className="center-y-parent h-100">
                  <div className="center-y-child invalid-xs p-3">
                    <h2 className="mb-4 font-weight-bold">Products Customization Service</h2>
                    <h5>Custom service according to your specific demand</h5>
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
          <section className="manufacturering-equipment py-5 bg-color-a text-white">
            <div className="row mx-0">
              <div className="col-sm-6">
                <div className="center-y-parent h-100">
                  <div className="center-y-child invalid-xs p-3">
                    <h2 className="mb-4 font-weight-bold">Manufacturering Equipment</h2>
                    <h5>Well-equipped with 22 sets 30ton-1600ton injection molding machine</h5>
                    <p>
                      MOQ as 300pcs, flash leadtime as 7-10 days
                    </p>
                    <LazyLoadImage 
                      className="img-fluid w-100" 
                      src={`${cdn_url}/static/crates-manufacturer-equipment-b.png`}
                      placeholderSrc={cdn_loading_img}
                      alt="Plastic crates manufacturer equipment" />
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <LazyLoadImage 
                  className="img-fluid w-100 main-pic" 
                  src={`${cdn_url}/static/crates-manufacturer-equipment-a.jpg`}
                  placeholderSrc={cdn_loading_img}
                  alt="Plastic crates manufacturer equipment" />
              </div>
            </div>
          </section>
          <section className="factory-img py-5 bg-light">
            <div className="row mx-0">
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
                <LazyLoadImage 
                  effect="blur" 
                  src={`${cdn_url}/static/plastic-crate-manufacture-factory.jpg`} 
                  className="img-fluid main-pic"
                  alt="plastic crates manufacturer" />
              </div>
            </div>
          </section>
          <section className="bg-dark text-white py-5">
              <div className="text-center mb-4 h3 py-3">We Provide Crates and Boxes For</div>
              <div className="row mx-0 text-center">
                  <div className="col-sm-12 col-md-4">
                    <h5 className="text-white">Moving company</h5>
                    <LazyLoadImage effect="blur" className="img-fluid px-4" src={`${cdn_url}/static/moving-company.jpg`} alt="" />
                    <p className="text-muted p-3">Moving isn’t always great for the environment. Luckily, we provide <strong>plastic moving boxes</strong> for moving companies to make moving more planet-friendly.</p>
                  </div>
                  <div className="col-sm-12 col-md-4">
                    <h5 className="text-white">Retailers</h5>
                    <LazyLoadImage effect="blur" className="img-fluid px-4" src={`${cdn_url}/static/retails.jpg`} alt="" />
                    <p className="text-muted p-3">Retailers can enjoy the high quality and competitive price of our plastic products,and we had build a good relationship with retails across the world</p>
                  </div>
                  <div className="col-sm-12 col-md-4">
                    <h5 className="text-white">Anyone</h5>
                    <LazyLoadImage effect="blur" className="img-fluid px-4" src={`${cdn_url}/static/anyboy.jpg`} alt="" />
                    <p className="text-muted p-3">We had supplied <strong>plastic crates</strong> for farms, schools, corporations and organizations.And we provide good Pre-and post-sales support for our customers</p>
                  </div>
                </div>
          </section>
        </div>
        
      </Layout>
    )
  }
}



