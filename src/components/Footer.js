import React from 'react'
import { 
  contact_email,
  facebook_url,
  twitter_url
} from '../utils'

export default class Footer extends React.Component{

  render() {
    return (
      <footer className="footer w-100 position-absolute bg-secondary py-3" style={{ bottom: '0' }}>
        <div className="footer-social pt-2">
          <a title="facebook" href={facebook_url} target="_blank" rel="nofollow noopener" className="footer-social-link">
            <figure className="icon icon-fb"></figure>
          </a>
          <a title="twitter" href={twitter_url} target="_blank" rel="nofollow noopener" className="footer-social-link">
            <figure className="icon icon-tw"></figure>
          </a>
          <a title="email" href={`mailto:${contact_email}?subject=Inquiry about your products`} rel="nofollow noopener" className="footer-social-link">
            <figure className="icon icon-em"></figure>
          </a>
        </div>
        <div className="friendly-link">
          <a href="https://www.storage-totes.com/" target="_blank" className="footer-friendly-link">
            storage totes
          </a>
          <a href="https://www.vegcrates.com/" target="_blank" className="footer-friendly-link">
            vegetable crates
          </a>
          <a href="https://www.chinaboxsale.com/product-category/bulk-plastic-containers/" target="_blank" className="footer-friendly-link">
           Bulk Plastic Containers
          </a>
          <a href="https://www.chinaboxsale.com/product-category/parts-bins/" target="_blank" className="footer-friendly-link">
            plastic parts bins
          </a>
          <a href="https://www.plastic-crate.com/" target="_blank" className="footer-friendly-link">
            plastic crates
          </a>
          <a href="https://www.ausplastic.com/product-category/euro-storage-boxes/" target="_blank" className="footer-friendly-link">
            euro storage boxes
          </a>
        </div>
        <div className="copy-right text-center py-3 px-1">
          <span className="text-white">© 2019 Shanghai Join Plastic, Inc. All Rights Reserved.</span>
        </div>
      </footer>
    )
  }
}
