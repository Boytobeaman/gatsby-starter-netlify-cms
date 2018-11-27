import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import Slider from '../components/Slider'
export default class IndexPage extends React.Component {
  render() {

    return (
      <Layout>
        <section className="section">
          <div className="container">
            <Slider />
          </div>
        </section>
        <section>
          <div className="row mx-0 mt-5 border bg-light">
            <div className="col-sm-7 d-flex align-items-center justify-content-center">
              <div className="text-sm-center">
                <h2>Plastic Crates Manufacturer & Supplier</h2>
                <div className="text-left">
                  <h6>JOINPLASTIC provide all kinds of plastic products,including:</h6>
                  <ul className="nav flex-column">
                    <li className="nav-item">
                      <a className="nav-link text-danger font-weight-bold pb-0" href="#"><img className="" style="width:50px"
                          alt="" /> Plastic Moving Crates</a>
                    </li>
                    <li className="nav-item"><a className="nav-link text-danger font-weight-bold pb-0" href="#">
                        <img className="" style="width:50px" src="https://lu-ali-us-west.oss-us-west-1.aliyuncs.com/static/euro-stacking-crates.jpg"
                          alt="" /> Euro Stacking Crates</a>
                    </li>
                    <li className="nav-item"><a className="nav-link text-danger font-weight-bold pb-0" href="#">
                        <img className="" style="width:50px" src="https://lu-ali-us-west.oss-us-west-1.aliyuncs.com/static/folding-crates.jpg"
                          alt="" /> Folding Crates</a>
                    </li>
                    <li className="nav-item"><a className="nav-link text-danger font-weight-bold pb-0" href="#">
                        <img className="" style="width:50px" src="https://lu-ali-us-west.oss-us-west-1.aliyuncs.com/static/plastic-pallet-boxes.jpg"
                          alt="" /> Plastic Pallet Boxes</a>
                    </li>
        
                  </ul>
                </div>
                <div>
                </div>
              </div>
            </div>
            <div className="col-sm-5 pr-0">
              <img src="https://lu-ali-us-west.oss-us-west-1.aliyuncs.com/static/plastic-crate-manufacture-factory.jpg" className="img-fluid"
                alt="" />
            </div>
          </div>
        </section>
        <section className="my-5 border py-3 bg-light">
            <h4 className="text-center mb-4">We Provide Crates and Boxes For</h4>
            <div className="row text-center">
                <div className="col-sm-12 col-md-4">
                  <h5 className="text-danger">Moving company</h5>
                  <img className="img-fluid px-4" src="https://lu-ali-us-west.oss-us-west-1.aliyuncs.com/static/moving-company.jpg" alt="" />
                  <P className="p-4">Moving isn’t always great for the environment. Luckily, we provide <strong>plastic moving boxes</strong> for moving companies to make moving more planet-friendly.</P>
                </div>
                <div className="ol-sm-12 col-md-4">
                  <h5 className="text-danger">Retailers</h5>
                  <img className="img-fluid px-4" src="https://lu-ali-us-west.oss-us-west-1.aliyuncs.com/static/retails.jpg" alt="" />
                  <P className="p-4">Retailers can enjoy the high quality and competitive price of our plastic products,and we had build a good relationship with retails across the world</P>
                </div>
                <div className="ol-sm-12 col-md-4">
                  <h5 className="text-danger">Anyone</h5>
                  <img className="img-fluid px-4" src="https://lu-ali-us-west.oss-us-west-1.aliyuncs.com/static/anyboy.jpg" alt="" />
                  <P className="p-4">We had supplied <strong>plastic crates</strong> for farms, schools, corporations and organizations.And we provide good Pre-and post-sales support for our customers</P>
                </div>
              </div>
        </section>
      </Layout>
    )
  }
}



