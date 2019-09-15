import 'core-js/es6/map';
import 'core-js/es6/set';

import React from 'react'
import Helmet from 'react-helmet'

import MainNavbar from '../components/MainNavbar'
import Footer from './Footer'
import favicon from '../img/movingboxlogo-red.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import './all.scss'


const TemplateWrapper = ({ children }) => (
  <div className="position-relative" style={{paddingBottom: '55px'}}>
    <Helmet>
      <title>Home | Moving Crates Supplier</title>
      <link rel="icon" type="image/svg+xml" href={favicon}></link>
    </Helmet>
    <MainNavbar />
    <div className="main-body">{children}</div>
    <Footer />
  </div>
)

export default TemplateWrapper
