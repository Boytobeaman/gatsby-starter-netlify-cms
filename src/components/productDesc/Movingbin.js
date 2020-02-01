
import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { cdn_url,cdn_loading_img } from '../../utils'
export default function Description(props) {
  return (
    <div className="product-detail-description common-moving-bins p-3">
      <div className="row">
        <div className="col-sm-6">
          <h4 className="description-title">
          FEATURE: 
          </h4>
          <ul>
            <li>Ergonomically designed handgrips for comfortable handling.</li>
            <li>Nested freely when empty and stacked steadily when full and close.</li>
            <li>Textured and flat base against slipping to increase the friction for strong stability when stacking.</li>
            <li>The customer’s logo can be applied onto the container by screen printing, hot stamping and tampo printing.</li>
            <li>Reinforced ribs on sidewalls for increasing the load capacity and reducing the possibility of sidewalls deformity.</li>
            <li>Heavily reinforced hinge to fix the lids and container for superior safety and stability.</li>
          </ul>
        </div>
        <div className="col-sm-6">
        <video width="100%" height="" controls>
          <source src={`${cdn_url}/static/moving-bin-feature.mp4`} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        </div>
      </div>
      <div>
        <div className="section-title h4 my-4">Plastic moving crates application</div>
        <LazyLoadImage 
          className="img-fluid w-100" 
          src={`${cdn_url}/static/moving-bin-application.jpg`}
          placeholderSrc={cdn_loading_img}
          effect="blur"
          alt="moving bins" />
      </div>
      
      <LazyLoadImage 
        className="img-fluid w-100" 
        src={`${cdn_url}/static/moving-bin-show.jpg`}
        placeholderSrc={cdn_loading_img}
        effect="blur"
        alt="plastic moving boxes show" />
    </div>
  );
}