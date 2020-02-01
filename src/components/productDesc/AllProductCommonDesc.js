
import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { cdn_url,cdn_loading_img } from '../../utils'
export default function Description(props) {
  return (
    <div className="all-product-common-desc p-3">
      <h4 className="section-title my-4">Production process</h4>
      <LazyLoadImage 
        className="img-fluid w-100" 
        src={`${cdn_url}/static/plastic-crates-production-process.jpg`}
        placeholderSrc={cdn_loading_img}
        effect="blur"
        alt="plastic crates production process" />
    </div>
  );
}