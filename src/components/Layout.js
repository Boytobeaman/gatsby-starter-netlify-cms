import React from 'react'
import Helmet from 'react-helmet'

import MainNavbar from '../components/MainNavbar'
import Footer from './Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import './all.scss'


const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Home | Gatsby + Netlify CMS" />
    <MainNavbar />
    <div>{children}</div>
    <Footer />
  </div>
)

export default TemplateWrapper
