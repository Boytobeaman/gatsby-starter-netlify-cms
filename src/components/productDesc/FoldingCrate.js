
import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { cdn_url,cdn_loading_img } from '../../utils'
export default function Description(props) {
  return (
    <div className="product-detail-description common-folding-crate p-3">
      <div className="row mb-1 no-gutters">
        <div className="col-sm-6">
          <div className="cat-desc-section h-100">
            <h1 className="cat-desc-top-title h4 my-4">Collapsible Plastic Crates</h1>
            <ul>
              <li>Collapsible & Stackable & Durable</li>
              <li>ventilated, multiple heights, returnable, efficient packing.</li>
              <li>100% New PP material.</li>
              <li>SUPER EASY TO WASH & REUSE</li>
              <li>BUILT AMAZINGLY STRONG TO LAST</li>
              <li>Foldable and stackable to maximize truck and store space.</li>
              <li>SUPPORTS ALL TYPES OF ITEMS</li>
            </ul>
            <p className="d-none d-lg-block mb-0 h6">
              These collapsible, reusable plastic crates are Efficient, Economical and Environmentally friendly,
              they can help reduce shipping and storage expenses.
            </p>
          </div>
        </div>
        <div className="col-sm-6">
          <video controls className='w-100 h-100'>
            <source src={`${cdn_url}/static/video/collapsible-crate.mp4`} type="video/mp4" />
            Your browser does not support HTML5 video.
          </video>
        </div>
      </div>
      <div>
        <div className="section-title h4 my-4">Plastic collapsible crates application</div>
        <LazyLoadImage 
          className="img-fluid w-100" 
          src={`${cdn_url}/static/collapsible-plastic-crates-show.jpg`}
          placeholderSrc={cdn_loading_img}
          effect="blur"
          alt="Plastic collapsible crates" />
        <LazyLoadImage 
          className="img-fluid w-100" 
          src={`${cdn_url}/static/collapsible-plastic-vegetable-crates-application.jpg`}
          placeholderSrc={cdn_loading_img}
          effect="blur"
          alt="Plastic collapsible vegetable crates" />
      </div>
      
    </div>
  );
}