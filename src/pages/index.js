import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import Slider from '../components/Slider'
import { cdn_url } from '../utils'
export default class IndexPage extends React.Component {
  render() {

    return (
      <Layout>
        <div className="container-fluid">
          <Helmet>
            <title>{`Plastic Crates Manufacturer & Supplier | Moving box`}</title>
            <meta name="description" content={`JOINPLASTIC is a Plastic Crate manufacturers and suppliers from China,we wholesale a wide range of products which include plastic moving boxes, collapsible plastic crates, fruits crate, stacking crates, attached lid containers, heavy duty crates, pallets, dollies`} />
          </Helmet>
          <section className="section my-3">
              <div className="">
                <Slider />
              </div>
          </section>
          <section className="my-3">
            <div className="row mx-0 border bg-light">
              <div className="col-sm-7 d-flex align-items-center justify-content-center">
                <div className="text-sm-center">
                  <h2>Plastic Crates Manufacturer & Supplier</h2>
                  <div className="text-left">
                    <h6>JOINPLASTIC provide all kinds of plastic products,including:</h6>
                    <ul className="nav flex-column" id="homePageCatList">
                      <li className="nav-item">
                        <a className="nav-link text-danger font-weight-bold pb-0" href="#"><img className="" src={`${cdn_url}/static/plastic-moving-crates.jpg`}
                            alt="" /> Plastic Moving Crates</a>
                      </li>
                      <li className="nav-item"><a className="nav-link text-danger font-weight-bold pb-0" href="#">
                          <img className="" src={`${cdn_url}/static/euro-stacking-crates.jpg`}
                            alt="euro stacking crates" /> Euro Stacking Crates</a>
                      </li>
                      <li className="nav-item"><a className="nav-link text-danger font-weight-bold pb-0" href="#">
                          <img className="" src={`${cdn_url}/static/folding-crates.jpg`}
                            alt="Folding Crates" /> Folding Crates</a>
                      </li>
                      <li className="nav-item"><a className="nav-link text-danger font-weight-bold pb-0" href="#">
                          <img className="" src={`${cdn_url}/static/plastic-pallet-boxes.jpg`}
                            alt="Plastic Pallet Boxes" /> Plastic Pallet Boxes</a>
                      </li>
          
                    </ul>
                  </div>
                  <div>
                  </div>
                </div>
              </div>
              <div className="col-sm-5 pr-0">
                <img src={`${cdn_url}/static/plastic-crate-manufacture-factory.jpg`} className="img-fluid"
                  alt="" />
              </div>
            </div>
          </section>
          <section className="my-3 border pt-3 bg-light">
              <h4 className="text-center mb-4">We Provide Crates and Boxes For</h4>
              <div className="row text-center">
                  <div className="col-sm-12 col-md-4">
                    <h5 className="text-danger">Moving company</h5>
                    <img className="img-fluid px-4" src={`${cdn_url}/static/moving-company.jpg`} alt="" />
                    <p className="p-4">Moving isn’t always great for the environment. Luckily, we provide <strong>plastic moving boxes</strong> for moving companies to make moving more planet-friendly.</p>
                  </div>
                  <div className="ol-sm-12 col-md-4">
                    <h5 className="text-danger">Retailers</h5>
                    <img className="img-fluid px-4" src={`${cdn_url}/static/retails.jpg`} alt="" />
                    <p className="p-4">Retailers can enjoy the high quality and competitive price of our plastic products,and we had build a good relationship with retails across the world</p>
                  </div>
                  <div className="ol-sm-12 col-md-4">
                    <h5 className="text-danger">Anyone</h5>
                    <img className="img-fluid px-4" src={`${cdn_url}/static/anyboy.jpg`} alt="" />
                    <p className="p-4">We had supplied <strong>plastic crates</strong> for farms, schools, corporations and organizations.And we provide good Pre-and post-sales support for our customers</p>
                  </div>
                </div>
          </section>
        </div>
        
      </Layout>
    )
  }
}



