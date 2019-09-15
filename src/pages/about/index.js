import 'core-js/es6/map';
import 'core-js/es6/set';

import React from "react";
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../../components/Layout'
import Slider from '../../components/Slider'
import { cdn_url } from '../../utils'
import './about.scss'

export default class Index extends React.Component {

  render() {
    let map_img = `${cdn_url}/static/joinplastic_map_address.jpg`
    let image_one = `${cdn_url}/static/about-us-cooperate-brand.jpg`
    let image_two = `${cdn_url}/static/about-us-with-customers.jpg`
    let image_three = `${cdn_url}/static/about-us-certifications.jpg`
    let items = [
      {
        src: `${image_one}`,
        altText: 'cooperate brand',
        caption: '',
        link_to: ''
      },
      {
        src: `${image_two}`,
        altText: 'our customers',
        caption: '',
        link_to: ''
      },
      {
        src: `${image_three}`,
        altText: 'plastic products certifications',
        caption: '',
        link_to: ''
      }
    ];
    items.forEach(item => {
      item.srcset = `${item.src}?x-oss-process=image/resize,w_360 360w,${item.src}?x-oss-process=image/resize,w_650 650w,${item.src}?x-oss-process=image/resize,w_850 850w,${item.src}?x-oss-process=image/resize,w_1000 1000w,${item.src}?x-oss-process=image/resize,w_1200 1200w`
      item.placeholderImg = `${item.src}?x-oss-process=image/resize,w_50`
    })
    return (
      <Layout>
        <Helmet>
          <title>{`Plastic Crates Manufacturer & Supplier | About us`}</title>
          <meta name="description" content={`We wholesale a wide range of products like plastic moving boxes, collapsible plastic crates, fruits crate, stacking crates, attached lid containers, heavy duty crates, pallets, dollies.we are a Plastic products manufacturer and supplier from China and we have customers all around the world`} />
        </Helmet>
        <section className="section">
          <div className="container-fluid">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb bg-white my-2">
                <li className="breadcrumb-item">
                  <Link to="/">
                    Home
                  </Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">About us</li>
              </ol>
            </nav>
          </div>
        </section>
        <div className="container-fluid">
          <section className='mb-5 border bg-light'>
            <div className="row">
              <div className="col-md-6">
                <video controls className='w-100 factory-video' poster={`${cdn_url}/static/plastic-crate-manufacture-factory.jpg`}>
                  <source src={`${cdn_url}/static/video/plastic_crates_company_introduce.mp4`} type="video/mp4" />
                  Your browser does not support HTML5 video.
                </video>
              </div>
              <div className="col-md-6">
                <div>
                  <div className="p-3 bg-white">
                    <h1 className="h4">Who are we?</h1>
                    <p>JOINPLASTIC Company is a Chinese Company, specializing in developing and producing logistic handling materials. 
                      Our main products are industrial plastic boxes, which can be classified into three parts; 
                      Stackable Boxes, Nestable-Stackable Boxes and Collapsible boxes. 
                      We also manufacture plastic turnover boxes that has a strong technical force. 
                      Our good quality products, reasonable prices and modern product designs make your logistic packing and personal storage easier. 
                      These products are extensively used by logistic firms and moving firm among the long list of other firms. 
                      Our products modern design allows these products to continuously meet the ever changing economic and social needs.
                      Our products are widely recognized and trusted by all users all-around the globe.
                    </p>
                    <p>
                      Looking for best business for your money? Look no further, we strive for mutual benefit and look to build a long lasting business relationship.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <section className='mb-3'>
          <Slider items={items} />
        </section>
        <div className="container-fluid">
          <section className='my-5 border bg-light'>
            <div className="text-center mb-4 border-bottom h5 py-3">Why choose us</div>
            <div className="row mx-0">
              <div className="col-md-3 col-sm-6">
                <div className="why-choose-us one">
                  <div className="why-header">
                    Raw material
                  </div>
                  <div className="why-text">
                    100% virgin PP/PE,<br />
                    Eco-firendly
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="why-choose-us two">
                  <div className="why-header">
                    Quality assurance
                  </div>
                  <div className="why-text">
                    Every box will be inspected<br />
                    before shipment
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="why-choose-us three">
                  <div className="why-header">
                    After service
                  </div>
                  <div className="why-text">
                    One year free replacement<br />
                    (No-human damages)
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="why-choose-us four">
                  <div className="why-header">
                    Trade assurance
                  </div>
                  <div className="why-text">
                    Protect your orders<br />
                    from payment to delivery
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="container-fluid">
          <section className='my-5 border bg-light faq'>
            <div className="text-center mb-4 border-bottom h5 py-3">FAQ</div>
            <div className="row mx-0">
              <div className="col-sm-12">
                <div className="question-wrap">
                  <div className="question">
                    Are you a factory, is custom service available?
                  </div>
                  <div className="answer">
                    Yes, we are a factory based in Shanghai, China and authenticated by TUV.
                  </div>
                </div>
                <div className="question-wrap">
                  <div className="question">
                    Can I order a sample to check quality?
                  </div>
                  <div className="answer">
                    Yes, sample will be free but you take the delivery cost.
                  </div>
                </div>
                <div className="question-wrap">
                  <div className="question">
                    What's your MOQ for bulk order?
                  </div>
                  <div className="answer">
                    Normally we start from 300pcs.
                  </div>
                </div>
                <div className="question-wrap">
                  <div className="question">
                    What's your regular colors and can I do custom color?
                  </div>
                  <div className="answer">
                    Regular colors are blue and grey,MOQ for custom color: 500pcs.
                  </div>
                </div>
                <div className="question-wrap">
                  <div className="question">
                    Do you support logo branding?
                  </div>
                  <div className="answer">
                    Yes, we support OEM and ODM service.
                  </div>
                </div>
                <div className="question-wrap">
                  <div className="question">
                    Which package methods are available?
                  </div>
                  <div className="answer">
                    Export wooden pallet packing, canton packing or nude packing for space saving purpose.
                  </div>
                </div>
                <div className="question-wrap">
                  <div className="question">
                    What's your term of payment?
                  </div>
                  <div className="answer">
                    We support T/T, L/C at sight and Paypal for sample.
                  </div>
                </div>
                <div className="question-wrap">
                  <div className="question">
                    How long does it take for production?
                  </div>
                  <div className="answer">
                    7~15 working days after we receive your deposit.
                  </div>
                </div>
                <div className="question-wrap">
                  <div className="question">
                    How can I protect my rights if we meet quality issue?
                  </div>
                  <div className="answer">
                    To benefit buyers, we can draw up a Alibaba trade assurance order.
                    Go to <a href="https://shjiajiu.en.alibaba.com/" target="_blank">our Alibaba store</a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="container-fluid">
          <section className='my-5 border bg-light map'>
            <div className="text-center mb-0 border-bottom h5 py-3">Contact</div>
            <div className="row mx-0">
              <div className="position-relative w-100">
                <div className="bg-img"></div>
                <div className="position-absolute map-overlay">
                  <div className="d-flex align-items-center justify-content-center h-100">
                    <div className="col-sm-8 text-center p-3 content">
                      <h6 className="py-3 h4">If you interested in our products and service, please don't hesitate to contact us</h6>
                      <Link className="btn btn-danger btn-lg active" role="button" aria-pressed="true" to="/contact/">
                        Contact Us
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    );
  }
}