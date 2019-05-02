import React from "react";
import { Link } from 'gatsby'
import Layout from '../../components/Layout'
import Slider from '../../components/Slider'
import { cdn_url } from '../../utils'
import './about.scss'

export default class Index extends React.Component {

  render() {
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
        <section className='mb-3'>
          <Slider items={items} />
        </section>
        <section>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6">
                <video controls className='w-100'>
                  <source src={`${cdn_url}/static/video/plastic_crates_company_introduce.mp4`} type="video/mp4" />
                  Your browser does not support HTML5 video.
                </video>
              </div>
              <div className="col-md-6">
                <div>
                  <div className="p-3 bg-white">
                    <h1 className="h4">Who are we?</h1>
                    <p>JOINPLASTIC is a Chinese company, specialized in the development and production of material handling products for logistic applications.
                      The products we make are mainly industrial plastic boxes, going from stackable boxes over nestable-stackable boxes and foldable boxes.
                      Shanghai Jiajiu Plastic Products Co., Ltd. is a manufacturer of plastic turnover box with well-equipped testing facilities and strong technical force.
                      Because of good quality, reasonable prices and stylish designs, our products are extensively used in logistics packaging and other industries.
                      Our products are widely recognized and trusted by users and can meet continuously changing of economic and social needs.
                      We welcome new and old customers from all walks of life to contact us for future business relationships and mutual success!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container-fluid">
            <div className="text-center mb-4 border-bottom h5 py-3">Why choose us</div>
            <div className="row">
              <div className="col-md-3 col-sm-6">
                <div className="why-choose-us">
                  <div className="why-header">
                    Raw material
                  </div>
                  <div className="why-text">
                    100% virgin PP/PE,
                    Eco-firendly
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="why-choose-us">
                  <div className="why-header">
                    Quality assurance
                  </div>
                  <div className="why-text">
                    Every box will be inspected before shipment
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="why-choose-us">
                  <div className="why-header">
                    After service
                  </div>
                  <div className="why-text">
                    One year free replacement<br/>
                    (No-human damages)
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="why-choose-us">
                  <div className="why-header">
                    Trade assurance
                  </div>
                  <div className="why-text">
                    Protect your orders<br/>
                    from payment to delivery
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}