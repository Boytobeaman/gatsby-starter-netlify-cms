import React from "react";
import Layout from '../../components/Layout'
import { navigateTo } from "gatsby-link";

export default () => (
  <Layout>
        <section className="section">
          <div className="container p-3 mt-3 bg-white">
            <div className="content">
                <h1>Thank you!</h1>
                <p>We will check the email and come back to you as soon as possible!</p>
                <button type="button" onClick={()=>navigateTo('/')} class="btn btn-danger">Back To Homepage</button>
            </div>
          </div>
          </section>
  </Layout>
);