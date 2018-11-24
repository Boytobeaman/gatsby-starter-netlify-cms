import React from "react";
import { Link } from 'gatsby'
import Layout from '../../components/Layout'


export default class Index extends React.Component {

  render() {
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
      </Layout>
    );
  }
}