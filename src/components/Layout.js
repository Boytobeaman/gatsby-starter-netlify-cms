import React from 'react'
import Helmet from 'react-helmet'

import MainNavbar from '../components/MainNavbar'
import Footer from './Footer'
import favicon from '../img/movingboxlogo.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import './all.scss'


const TemplateWrapper = ({ children }) => (
  <div className="position-relative" style={{paddingBottom: '55px'}}>
    <Helmet>
      <title>Home | Moving Crates Supplier</title>
      <link rel="icon" type="image/svg+xml" href={favicon}></link>
    </Helmet>
    <MainNavbar />
    <div>{children}</div>
    <Footer />
  </div>
)

export default TemplateWrapper
