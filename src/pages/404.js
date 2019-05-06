import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'

const NotFoundPage = () => (
  <Layout>
    <div className="container mt-5">
      <div className="text-center">
        <div className='rounded bg-white p-3'>
          <h1>404</h1>
          <h4>NOT FOUND</h4>
          <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
          <Link className="btn btn-danger" role="button" aria-pressed="true" to="/">
            Back to homepage
          </Link>
        </div>
      </div>
    </div>
    
  </Layout>
)

export default NotFoundPage
