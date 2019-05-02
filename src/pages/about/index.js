import React from "react";
import { Link } from 'gatsby'
import Layout from '../../components/Layout'
import Slider from '../../components/Slider'
import { cdn_url } from '../utils'

export default class Index extends React.Component {

  render() {
    let image_one =`${cdn_url}/static/about-us-cooperate-brand.jpg`
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
    items.forEach(item=>{
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
            <div className="p-3 bg-white">
              <h1 className="h4">Who are we?</h1>
              <p>JOINPLASTIC is a Chinese company, specialized in the development and production of material handling products for logistic applications.  The products we make are mainly industrial plastic boxes, going from stackable boxes over nestable-stackable boxes and foldable boxes.</p>
            </div>
          </div>
        </section>
        <section>
          <Slider items={items} />
        </section>
      </Layout>
    );
  }
}