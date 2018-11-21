import React from 'react'
import Helmet from 'react-helmet'

import MainNavbar from '../components/MainNavbar'
import Footer from './Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import './all.scss'


const TemplateWrapper = ({ children }) => (
  <div className="position-relative h-100" style={{paddingBottom: '40px'}}>
    <Helmet title="Home | Moving Crates Supplier" />
    <MainNavbar />
    <div>{children}</div>
    <Footer />
  </div>
)

export default TemplateWrapper
