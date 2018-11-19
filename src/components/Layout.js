import React from 'react'
import Helmet from 'react-helmet'

import MainNavbar from '../components/MainNavbar'
import 'bootstrap/dist/css/bootstrap.min.css';
// import './all.sass'


const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Home | Gatsby + Netlify CMS" />
    <MainNavbar />
    <div>{children}</div>
  </div>
)

export default TemplateWrapper
