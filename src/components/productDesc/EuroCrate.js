
import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { cdn_url,cdn_loading_img } from '../../utils'
export default function Description(props) {
  return (
    <div className="product-detail-description common-euro-crate p-3">
      <div className="row mb-1 no-gutters">
        <div className="col-sm-6">
          <div className="cat-desc-section h-100">
            <h1 className="cat-desc-top-title h4 my-3">Euro Stacking Containers</h1>
            <ul>
              <li>Stackable, Reinforced design and Reusable.</li>
              <li>Multiple Size and Colors, Lidded Containers, Effecient Packing.</li>
              <li>100% New PP material.</li>
             
            </ul>
            <p className="d-none d-lg-block mb-0">
            Suitable for storing auto-parts, stackable when both in use and empty, eco-friendly, 
            reinforced design, reduces shipping and storage expenses.
            </p>
            <p className="text-muted text-small">
            Available in a variety of dimensions, 
            Plastic EURO stacking containers and boxes generally have a greater volume capacity due to their straight sides. 
            The reinforced corners of the Plastic Containers make them an ideal choice for transporting heavy loads. 
            Our Euro (European standard size) stacking boxes can be tailored to suit your requirements with lids, hinges, inner dividers, personalised print and locking clasps. 
            Thanks to its food grade plastic construction, this high quality range of plastic containers is resistant to acids and oils. 
            Euro Containers are uniform in dimensions meaning they are ideal for automated manufacturing systems or for product handling. 
            </p>
          </div>
        </div>
        <div className="col-sm-6">
          <video controls className='w-100 h-100'>
            <source src={`${cdn_url}/static/video/euro-stackable-container.mp4`} type="video/mp4" />
            Your browser does not support HTML5 video.
          </video>
        </div>
      </div>
      <div>
        <div className="section-title h4 mt-5">Euro stacking container detail & application</div>
        <LazyLoadImage 
          className="img-fluid w-100" 
          src={`${cdn_url}/static/euro-stacking-crates-detail.jpg`}
          placeholderSrc={cdn_loading_img}
          effect="blur"
          alt="Euro stacking container" />
        <LazyLoadImage 
          className="img-fluid w-100" 
          src={`${cdn_url}/static/euro-stacking-crates-feature.jpg`}
          placeholderSrc={cdn_loading_img}
          effect="blur"
          alt="Euro stacking container" />
      </div>
      
    </div>
  );
}